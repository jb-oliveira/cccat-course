import PlaceOrder from "./PlaceOrder";

test("Deve fazer um pedido", function(){
    const placeOrder = new PlaceOrder();
    const input  = {
        cpf: "778.278.412-36",
        items: [
            { description: "Guitarra", price: 1000, quantity: 2 },
            { description: "Amplificador", price: 5000, quantity: 1 },
            { description: "Cabo", price: 30, quantity: 3 }        
        ],
        coupon: "VALE 20"
    };
    const output = placeOrder.execute(input);
    expect(output.total).toBe(5672);
    
})