import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
    const [count, increment, decrement] = useCounter(1)
  return (
  <>
    <div>Count{count}</div>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  </>
  )
}

export default Counter