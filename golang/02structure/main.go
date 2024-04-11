package main

import (
    "fmt"
    "maps"
)

func main() {
	// array()
	// slice()
	// mp()
	rg()
}

func array() {
	var a[5] int
	fmt.Println("empty: " ,a)
	fmt.Println("length: ", len(a))

	b := [5] int{1,2,3,4,5}
	fmt.Println("declared: ", b)
	// error!
	// b := [5] int
	
}

func slice() {
	var s [] string
	fmt.Println("uninit", s, s == nil, len(s), cap(s))

	s = make([]string, 5)
    fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	s[3] = "d"
	s[4] = "e"
	fmt.Println("set:", s, "len:", len(s), "cap:", cap(s))

	c := s[2:4]
	fmt.Println("get:", c, "len:", len(c), "cap:", cap(c))

	c = append(c, "f")
	fmt.Println("append:", c, "len:", len(c), "cap:", cap(c))
	fmt.Println("original:", s, "len:", len(s), "cap:", cap(s))

	c = s[1:]
	fmt.Println("get:", c, "len:", len(c), "cap:", cap(c))

	c = s[:1]
	fmt.Println("get:", c, "len:", len(c), "cap:", cap(c))

}

func mp() {
	m := make(map[string]int)
	fmt.Println("empty:", m)

	m["k1"] = 7
	m["k2"] = 0
	fmt.Println("set:", m)
	fmt.Println("len",len(m))

	delete(m, "k1")
	fmt.Println("delete:", m)

	val, prs := m["k2"]
	fmt.Println("prs:", prs, "val:", val)

	clear(m)
	fmt.Println("clear:", m)

	n1 := map [string]int{"foo": 1, "bar": 2}

	n2 := map [string]int{"foo": 1, "bar": 2}


	fmt.Println("n1 == n2", maps.Equal(n1, n2))
}

func rg(){
	nums := []int{2,3,4}
	for index, num := range nums {
		fmt.Println("index:", index, "num:", num)
	}
	
    kvs := map[string]string{"a": "apple", "b": "banana"}
    for k, v := range kvs {
        fmt.Printf("%s -> %s\n", k, v)
    }

	str := "hello"
	for i, c := range str {
		fmt.Println(i, c)
	}

}