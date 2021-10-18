import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado'
import { useCounter } from '../../hooks/useCounter'
import '../02-useEffect/effect.css'

const MemoHook = () => {

  const { counter, increment } = useCounter( 5000 )
  const [show, setShow] = useState(true)

  //si el counter cambia necesito una nueva version memorizada del resultado de esa funcion
  // recibe una funcion y un input
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

  return(
    <>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{ counter }</small>
      </h3>
      <hr />

      <p>{ memoProcesoPesado }</p>

      <button
        style={{ marginTop:'20px' }}
        onClick={increment}
      >
        +1
      </button>

      <button
        style={{ marginLeft:'20px', marginTop:'20px' }}
        onClick={() => setShow(!show)}
      >
        Show/Hide { JSON.stringify( show )}
      </button>
    </>
  )
}

export default MemoHook