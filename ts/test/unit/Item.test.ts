import Item from "../../src/domain/entity/Item";

const ITEM_VOLUME = (50 / 100) * (50 / 100) * (50 / 100);

test("Deve calcular o frete de um item.", function () {
    const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22);
    const volume = item.getVolume();
    expect(volume).toBe(ITEM_VOLUME);
});

test("Deve calcular a densidade de um item.", function () {
    const item = new Item("1", "Amplificador", 5000, 50, 50, 50, 22);
    const volume = item.getDensity();
    expect(volume).toBe(22 / ITEM_VOLUME);
});