import ZipcodeCalculatorAPI from "../../../domain/gateway/ZipcodeCalculatorAPI";

export default class ZipcodeCalculatorAPIInMemory implements ZipcodeCalculatorAPI {

    calculate(destiny: string, origin: string): number {
        return 1000;
    }

}