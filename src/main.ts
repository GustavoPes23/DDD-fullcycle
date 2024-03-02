import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";
import Product from "./domain/entity/product";

const customerID = "123";

//Customer aggragate
const customer = new Customer(customerID, "Gustavo");
const address = new Address("Street 1", 123, "12345-678", "São Paulo");
customer.Address = address;
customer.activate();

//Product aggragate
const product1 = new Product("p1", "Product 1", 10);
const product2 = new Product("p2", "Product 2", 20);

//Order aggragate
const item1 = new OrderItem("1", "Item 1", 10, "p1", 1);
const item2 = new OrderItem("2", "Item 2", 20, "p2", 1);
const order = new Order("123", customerID, [item1, item2]);