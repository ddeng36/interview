package main

import "fmt"

func MapKeys[K comparable, V any](m map[K]V) []K {
	r := make([]K, 0, len(m))
	for k := range m {
		r = append(r, k)
	}
	return r
}

type List[T any] struct {
	head, tail *element[T]
}

type element[T any] struct {
	next *element[T]
	val T
}

func (lst *List[T]) push(val T) {
	if lst.tail == nil {
		lst.head = &element[T]{val: val}
		lst.tail = lst.head
	} else {
		lst.tail.next = &element[T]{val: val}
		lst.tail = lst.tail.next
	}
}

func (lst *List[T]) getAll() []T {
	var elems []T
	for e := lst.head; e != nil; e = e.next {
		elems = append(elems, e.val)
	}
	return elems
}

func main() {
	var m = map[int]string{1: "2", 2: "4", 3: "6"}
	fmt.Println("keys", MapKeys(m))

	lst := List[int]{}
	lst.push(1)
	lst.push(2)
	lst.push(3)
	fmt.Println("list", lst.getAll())

	lst2 := List[string]{}
	lst2.push("a")
	lst2.push("b")
	lst2.push("c")

}