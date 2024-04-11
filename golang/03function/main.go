package main

import "fmt"

func main() {
	// multi returns
	// a, b := multi()
	// _, c := multi()
	// fmt.Println("a",a, "b", b, "c", c)

	// variadic
	// nums := []int{1,2,3,4,5}
	// variadic(nums...)
	// variadic(1,2,3)

	// closurre
	// nextInt := closurre()
	// fmt.Println("nextInt", nextInt())
	// fmt.Println("nextInt", nextInt())

	// pointer
	// i := 1
	// fmt.Println("initial:", i)
	// val(i)
	// fmt.Println("val:", i)
	// ptr(&i)
	// fmt.Println("ptr:", i)
	// fmt.Println("ptr:", &i)
	
}

func multi() (int, int){
	return 3, 7
}

func variadic (nums ...int) {
	fmt.Println(nums," ")

	total := 0;

	for _, num := range nums {
		total += num;
	}
	fmt.Println("Total", total)
}

func closurre() func() int {
	i := 0;
	return func() int{
		i++
		return i
	}
}

func val(ival int) {
	ival = 0
}

func ptr(iptr *int) {
	*iptr = 0
}

