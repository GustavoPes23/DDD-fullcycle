import Order from "./order";
import OrderItem from "./order_item";


describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123", []);
        }).toThrow("Id is required");
    });

    it("should throw error when costumerId is empty", () => {
        expect(() => {
            let order = new Order("123", "", []);
        }).toThrow("CustomerId is required");
    });

    it("should throw error when Item is empty", () => {
        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrow("Items are required");
    });

    it("should calculate total", () => {
        const priceItem1 = 10;
        const priceItem2 = 20;
        const qt1 = 1;
        const qt2 = 2;        

        const item = new OrderItem("1", "Item 1", priceItem1, "p1", qt1);
        const item2 = new OrderItem("2", "Item 2", priceItem2, "p1", qt2);

        const sum = (priceItem1 * qt1) + (priceItem2 * qt2);

        let order = new Order("123", "123", [item, item2]);

        const total = order.total();

        expect(total).toBe(sum);
    });

    it("should throw error if the item qtd is greater than 0", () => {
        expect(() => {
            const priceItem1 = 10;
            const qt1 = 0;

            const item = new OrderItem("1", "Item 1", priceItem1, "p1", qt1);

            const sum = (priceItem1 * qt1);

            const order = new Order("123", "123", [item]);

            const total = order.total();
        }).toThrow("Quantity must be greater than 0");
    });
});