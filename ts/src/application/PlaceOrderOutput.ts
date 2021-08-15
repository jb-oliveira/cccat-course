export default class PlaceOrderOutput {
    total: number;
    freight: number;

    constructor({ freight, total }: { freight: number, total: number }) {
        this.total = total;
        this.freight = freight;
    }
}