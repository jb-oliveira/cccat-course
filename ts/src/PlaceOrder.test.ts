import PlaceOrder from "./PlaceOrder";
import PlaceOrderInput from "./PlaceOrderInput";

test("Deve fazer um pedido", function () {
    const placeOrder = new PlaceOrder();
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36", 
        zipCode: "11.111-111",
        items: [
            { id: "1", quantity: 2 },
            { id: "2", quantity: 1 },
            { id: "3", quantity: 3 }
        ],
        coupon: "VALE20"
    });
    const output = placeOrder.execute(input);
    expect(output.total).toBe(5982);

});

test("Deve fazer um pedido com cupom expirado", function () {
    const placeOrder = new PlaceOrder();
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36", 
        zipCode: "11.111-111",
        items: [
            { id: "1", quantity: 2 },
            { id: "2", quantity: 1 },
            { id: "3", quantity: 3 }
        ],
        coupon: "VALE20_EXPIRED"
    });
    const output = placeOrder.execute(input);
    expect(output.total).toBe(7400);

});

test("Deve fazer um pedido com calculo de frete", function () {
    const placeOrder = new PlaceOrder();
    const input = new PlaceOrderInput({
        cpf: "778.278.412-36", 
        zipCode: "11.111-111",
        items: [
            { id: "1", quantity: 2 },
            { id: "2", quantity: 1 },
            { id: "3", quantity: 3 }
        ],
        coupon: "VALE20_EXPIRED"
    });
    const output = placeOrder.execute(input);
    expect(output.freight).toBe(310);

});