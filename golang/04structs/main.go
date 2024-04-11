package main

import "fmt"

type person struct {
	name string
	age int
}


func newPerson(name string) *person {
	p := person{name: name}
	p.age = 42
	return &p
}

func main() {

	fmt.Println(person{"b", 2})	

	fmt.Println(person{name: "a",age: 1})

	fmt.Println(person{name: "c"})

	fmt.Println(&person{name: "d", age: 4})

	fmt.Println(newPerson("e"))

	fmt.Println(*newPerson("e"))

	s := person{name: "f", age: 6}
	fmt.Println(s.name)

	sp := &s
	fmt.Println(sp.age)

	addr := &s
	fmt.Println(addr.age)

	g := *addr
	fmt.Println(g.age)

	// anonymous struct
	dog := struct {
		name string
		isGood bool
	}{
		"dog",
		true,
	}
	fmt.Println(dog)
}
