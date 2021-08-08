import Coupon from "./Coupon";
import Order from "./Order";

test("Não deve criar pedido com cpf invalido", function () {
    const cpf = "111.111.111.-23"
    expect(() => new Order(cpf)).toThrow(new Error("Invalid CPF"));
});

test("Deve criar um pedido com 3 itens", function () {
    const cpf = "778.278.412-36";
    const order = new Order(cpf);
    order.addItem("Guitarra", 1000, 2);
    order.addItem("Amplificador", 5000, 1);
    order.addItem("Cabo", 30, 3);
    const total = order.getTotal();
    expect(total).toBe(7090);
})

test("Deve criar um cupom de desconto.", function () {
    const cpf = "778.278.412-36";
    const order = new Order(cpf);
    order.addItem("Guitarra", 1000, 2);
    order.addItem("Amplificador", 5000, 1);
    order.addItem("Cabo", 30, 3);
    order.addCoupon(new Coupon("VALE 20", 20))
    const total = order.getTotal();
    expect(total).toBe(7090 - (7090 * 0.2));
})