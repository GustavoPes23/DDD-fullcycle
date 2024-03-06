import Address from "../value-object/address";
import CustomerFactory from "./customer.factory";

describe("Customer factory unit tests", () => {
    it("should create a customer", () => {
        const customerFactory = CustomerFactory.create("John");

        expect(customerFactory.id).toBeDefined();
        expect(customerFactory.name).toBe("John");
        expect(customerFactory.Address).toBeUndefined();
    });

    it("should create a customer with an address", () => {
        const address = new Address("Street", 123, "123", "City");
        const customerFactory = CustomerFactory.createWithAddress("John", address);

        expect(customerFactory.id).toBeDefined();
        expect(customerFactory.name).toBe("John");
        expect(customerFactory.Address).toBe(address);
    });
});