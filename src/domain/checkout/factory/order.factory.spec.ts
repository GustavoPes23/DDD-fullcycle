import { v4 as uuid } from "uuid";

import OrderFactory from "./order.factory";

describe("Order factory unit tests", () => {
    it("should create an order", () => {
        const orderProps = {
            id: uuid(),
            customerId: uuid(),
            items: [
                {
                    id: uuid(),
                    name: "Product 1",
                    price: 100,
                    productId: uuid(),
                    quantity: 1,
                }
            ]
        };

        const orderFactory = OrderFactory.create(orderProps);

        expect(orderFactory.id).toEqual(orderProps.id);
        expect(orderFactory.customerId).toEqual(orderProps.customerId);
        expect(orderFactory.items.length).toBe(1);
    });
});