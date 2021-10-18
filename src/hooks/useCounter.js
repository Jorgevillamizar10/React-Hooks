import { useState } from "react"

// si no envian nada, initialState = 10
export const useCounter = ( initialState = 10 ) => {

  const [state, setState] = useState(initialState)

  const increment = () => {
    setState( state + 1 )
  }

  const decrement = () => {
    setState( state - 1 )
  }

  return {
    counter: state,
    increment,
    decrement
  }

}