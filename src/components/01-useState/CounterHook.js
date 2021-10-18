import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterHook = () => {

  const { increment, decrement, state } = useCounter()

  return (
    <>
      <h1>
        Counter with Hook: { state }
        <hr/>
        <button onClick={increment}> + 1 </button>
        <button onClick={decrement}> - 1 </button>
      </h1>
    </>
  )
}