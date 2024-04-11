package main

import (
	"fmt"
)
func main() {
	// hello()
	// value()
	// variables()
	// variablesType()
	// constant()
	// forLoop()
	// ifElse()
	switchCase()
}

func hello() {
	fmt.Println("hello world")
}

func value() {
	// error!
	// fmt.Println("1" + 2)
	fmt.Println(0.3 + 1)
}

func variablesType() {
	var a int
	var b string
	var c float64
	var d bool
	var e []int
	var f map[string]int
	var g chan int
	var h func(string) int
	var i *int
	var j interface{}
	fmt.Println(a, b, c, d, e, f, g, h, i, j)
}

func variables() {
	var a = "initial"
	fmt.Println(a)

	var b, c int = 1, 2
	fmt.Println(b, c)

	var d = true
	fmt.Println(d)

	var e int
	fmt.Println(e)

	f := "apple"
	fmt.Println(f)
	f = "banana"
	fmt.Println(f)
}

func constant() {
	const a = 1
	// error!
	// const b := 2
	// error!
	// a = 2
	fmt.Println(a)

	const n = 5
	fmt.Println(float32(n) / 2)
	fmt.Println(n / 2)
	fmt.Println(n / 2.0)
	// print type of n
	fmt.Printf("%T\n", n)

}

func forLoop() {
	for i := 0; i< 5; i++ {
		fmt.Println(i)
	}

	for i := range 5 {
		fmt.Println(i)
	}
}

func ifElse() {
	if num := 9; num < 0 {
		fmt.Println(num, "is negative")
	} else {
		fmt.Println(num, "is positive")
	}
}

func switchCase() {
	i := 2
	switch i {
	case 1:
		fmt.Println("one")
	case 2:
		fmt.Println("two")
	case 3:
		fmt.Println("three")
	}
}