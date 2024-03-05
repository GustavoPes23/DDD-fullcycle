import Order from "../../../../domain/checkout/entity/order";
import OrderItem from "../../../../domain/checkout/entity/order_item";
import OrderRepositoryInterface from "../../../../domain/checkout/repository/order-repository.interface";
import OrderItemModel from "./order-item.model";
import OrderModel from "./order.model";

export default class OrderRepository implements OrderRepositoryInterface {
    async create(entity: Order): Promise<void> {
        const order = {
            id: entity.id,
            customer_id: entity.customerId,
            total: entity.total(),
            items: entity.items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                product_id: item.productId
            }))
        };

        await OrderModel.create(order, {
            include: [{ model: OrderItemModel }],
        });
    }

    async update(entity: Order): Promise<void> {
        const sequelize = OrderModel.sequelize;

        await sequelize!.transaction(async (t) => {
            await OrderItemModel.destroy({
                where: { order_id: entity.id },
                transaction: t,
            });

            const items = entity.items.map((item) => ({
                id: item.id,
                name: item.name,
                price: item.price,
                product_id: item.productId,
                quantity: item.quantity,
                order_id: entity.id,
            }));

            await OrderItemModel.bulkCreate(items, { transaction: t });
            
            await OrderModel.update(
                { total: entity.total() },
                { where: { id: entity.id }, transaction: t }
            );
        });
    }

    async find(id: string): Promise<Order> {
        let orderModel;
        try {
            orderModel = await OrderModel.findOne({
                where: {
                    id,
                },
                include: ["items"],
                rejectOnEmpty: true,
            });
        } catch (error) {
            throw new Error("Order not found");
        }

        const orderItems = orderModel.items.map((orderItem) => {
            return new OrderItem(
                orderItem.id,
                orderItem.name,
                orderItem.price,
                orderItem.product_id,
                orderItem.quantity
            )
        })

        return new Order(id, orderModel.customer_id, orderItems);
    }

    async findAll(): Promise<Order[]> {
        let orderModels;
        try {
            orderModels = await OrderModel.findAll({
                include: ["items"],
            });
        } catch (error) {
            throw new Error("Orders not found");
        }

        return orderModels.map((orderModel) => {
            return new Order(
                orderModel.id,
                orderModel.customer_id,
                orderModel.items.map((orderItem) => {
                    return new OrderItem(
                        orderItem.id,
                        orderItem.name,
                        orderItem.price,
                        orderItem.product_id,
                        orderItem.quantity
                    )
                })
            )
        });
    }
}