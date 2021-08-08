export default class Cpf {
    value: string;
    
    constructor(value: string) {
        if (!this.validateCpf(value)) throw new Error("Invalid CPF");
        this.value = value;
    }

    clean(cpf: string) {
        return cpf.replace(/\D/g, "");
    }

    isInvalidLength(cpf: string) {
        return cpf.length != 11;
    }

    allDigitsAreEqual(cpf: string) {
        const [firstDigit] = cpf;
        return cpf.split("").every(digit => digit === firstDigit);
    }

    calculateDigits(cpf: string, factor: number, max: number) {
        let total = 0;
        for (const digit of cpf.split("").slice(0, max)) {
            total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : 11 - rest;
    }

    extractCheckerDigit(cpf: string) {
        return cpf.slice(9);
    }

    validateCpf(cpf: string) {
        if (!cpf) return false;
        const cpfDigits = this.clean(cpf)
        if (this.isInvalidLength(cpfDigits)) return false;
        if (this.allDigitsAreEqual(cpfDigits)) return false;
        let dg1 = this.calculateDigits(cpfDigits, 10, 9);
        let dg2 = this.calculateDigits(cpfDigits, 11, 10);
        const calculatedDigit = `${dg1}${dg2}`;
        const checkerDigit = this.extractCheckerDigit(cpfDigits);
        return calculatedDigit == checkerDigit;
    }
}