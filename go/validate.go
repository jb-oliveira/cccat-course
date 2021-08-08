package main

import (
	"fmt"
	"regexp"
	"strconv"
	"strings"
)

func clean(cpf string) string {
	re := regexp.MustCompile("[^0-9]+");
	return re.ReplaceAllString(cpf,"");
}

func isInvalidLength(cpf string) bool {
	return len(cpf) != 11;
}

func allDigitsAreEqual(cpf string) bool {
	return strings.Count(cpf, string(cpf[0])) == len(cpf);
}

func calculateDigits(cpf string, factor int, max int) int {
	total := 0;
	for _, digit := range cpf[:max] {
		digit, _ := strconv.Atoi( string(digit) )
		total +=  digit * factor;
		factor--;
	}
	rest := total % 11;
	if rest < 2 {
		return 0;
	}else{
		return  11 - rest;
	}
}

func validateCpf(cpf string) bool {
	if ( cpf == "" ){   
		return false;
	}
	cpfDigits := clean(cpf);
	if isInvalidLength(cpfDigits) {
		return false;
	}
	if allDigitsAreEqual(cpfDigits){
		return false;
	}
	digit1 := calculateDigits(cpfDigits,10,9);
	digit2 := calculateDigits(cpfDigits,11,10);
	calculatedDigit := fmt.Sprintf("%d%d", digit1,digit2);	
	return calculatedDigit == string(cpfDigits[9:]);
}