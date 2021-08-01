
package main

import "fmt"

func main() {
	fmt.Println(validateCpf("00000000000"))    // false
	fmt.Println(validateCpf("86446422799"))    // false
	fmt.Println(validateCpf("86446422784"))    // true
	fmt.Println(validateCpf("864.464.227-84")) // true
	fmt.Println(validateCpf("91720489726"))    // true
	fmt.Println(validateCpf("a1720489726"))    // false
}