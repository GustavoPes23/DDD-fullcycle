import { v4 as uuid } from "uuid";

import Product from "../entity/product";
import ProductInterface from "../entity/product.interface";
import ProductB from "../entity/product-b";

const TYPE_PRODUCT_A = "a";
const TYPE_PRODUCT_B = "b";

export default class ProductFactory {
    public static create(
        type: string, 
        name: string, 
        price: number
    ): ProductInterface {
        switch (type) {
            case TYPE_PRODUCT_A:
                return new Product(uuid(), name, price);
            case TYPE_PRODUCT_B:
                return new ProductB(uuid(), name, price);
            default:
                throw new Error("Product type not supported");
        }
    }
}