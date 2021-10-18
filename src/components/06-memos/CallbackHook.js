import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

import '../02-useEffect/effect.css'

/*
  useCallback funciones:
    1- Cuando ocupamos mandar una funcion a un componente hijo
*/

const CallbackHook = () => {

  const [counter, setCounter] = useState(10)

  // const increment = () => {
  //   setCounter( counter + 1)
  // }

  // useCallback -> regresa una funcion (version) memorizada de esa funcion que me va a servir para mandarla como argumento a otros lugares
  // y React sabe que la funcion no a cambiado si la dependencia no a cambiado
  const increment = useCallback( ( num ) => {
    setCounter( auxCounter => auxCounter + num)
  }, [setCounter])

  return(
    <>
      <h1>useCallback Hook: { counter } </h1>
      <hr />

      <ShowIncrement increment={increment} />
    </>
  )
}

export default CallbackHook