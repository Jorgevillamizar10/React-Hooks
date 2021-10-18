import React, { useState } from 'react'
import '../02-useEffect/effect.css'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const ExampleRef = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <h1>ExampleRef</h1>
      <hr/>

      <div style={{display:"flex", flexDirection:"column"}}>
        { show && <MultipleCustomHooks /> }

        <button
          style={{marginTop:"30px"}}
          onClick={
            () => setShow(!show)
          }
        >
          Show / Hide
        </button>
      </div>

    </>
  )
}