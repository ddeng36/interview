package main
import(
	"fmt"
	"time"
)

func f(from string) {
	for i := 0; i < 5; i++ {
		time.Sleep(100 * time.Millisecond)
		fmt.Println(from, ":", i)
	}
}
func routines() {
	go f("goroutine")
	f("direct")

	go func(msg string) {
		fmt.Println(msg)
	}("going")

	time.Sleep(time.Second)
	fmt.Println("done")
}


func channel() {
	message := make(chan string)
	go func() {
		message <- "ping"
	}()

	msg := <-message
	fmt.Println(msg)
}

func worker(done chan bool) {
	fmt.Print("working...")
	time.Sleep(time.Second)
	fmt.Println("done")

	done <- true
}
func channelSync() {
	done := make(chan bool, 1)
	go worker(done)

	 a := <- done
	 fmt.Println(a)
}


func main() {
	// routines()
	// channel()
	// channelSync()

}