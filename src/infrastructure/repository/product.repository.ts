import Product from "../../domain/entity/product";
import ProductRepositoryInterface from "../../domain/repository/product-repository.interface";
import ProductModel from "../db/sequelize/model/product.model";

export default class ProductRepository implements ProductRepositoryInterface {

    //o ideal seria utilizar try catch para tratar os erros em todos os casos
    //meu método é static porque é utilizado apenas o sequelize, acoplando o repository com o db
    async create(entity: Product): Promise<void> {
        const { id, name, price } = entity;

        await ProductModel.create({
            id,
            name,
            price
        })
    }

    async update(entity: Product): Promise<void> {
        const { id, name, price } = entity;

        await ProductModel.update({
            name,
            price
        }, {
            where: {
                id
            }
        })
    }

    async find(id: string): Promise<Product> {
        const productModel = await ProductModel.findOne({
            where: {
                id
            }
        });

        if (!productModel) {
            throw new Error("Product not found");
        }

        return new Product(
            productModel.id,
            productModel.name,
            productModel.price
        );
    }

    async findAll(): Promise<Product[]> {
        const productModels = await ProductModel.findAll();
        return productModels.map(({ id, name, price }) => new Product(id, name, price));
    }
}