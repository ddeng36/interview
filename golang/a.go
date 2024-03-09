package main

import (
	"fmt"
)

func main() {
	hashTable := map[int]int{}
	for i, x := range []int{2, 7, 11, 15} {
		if j, ok := hashTable[9-x]; ok {
			fmt.Println(j, i)
		}
		hashTable[x] = i
	}
	fmt.Println(hashTable)
}
