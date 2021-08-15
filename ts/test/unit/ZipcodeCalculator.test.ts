import ZipcodeCalculatorAPIInMemory from "../../src/infra/gateway/memory/ZipcodeCalculatorAPIInMemory";

test("Deve calcular a distancia entre 2 ceps", function(){
    const zipcodeCalculator = new ZipcodeCalculatorAPIInMemory();
    const distance = zipcodeCalculator.calculate("11.111-111","99.999-999");
    expect(distance).toBe(1000);
});