import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'
import '../02-useEffect/effect.css'

const Memorize = () => {

  const { counter, increment } = useCounter( 10 )
  const [show, setShow] = useState(true)

  return(
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />

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

export default Memorize