package main

import "fmt"

func main() {
	a, b := multi()
	_, c := multi()
	fmt.Println("a",a, "b", b, "c", c)
}

func multi() (int, int){
	return 3, 7
}

