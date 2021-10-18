import React, { useRef } from 'react'
import '../02-useEffect/effect.css'

export const FocusScreen = () => {

  const ref = useRef()

  const handleClick = () => {
    // document.querySelector('input').focus()
    // esto que hacemos con el ref es lo mismo de arriba
    ref.current.focus()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>

      <div style={{display:"flex", flexDirection:"column"}}>
        <input
          ref={ref} 
          placeholder="Su Nombre"
          style={{marginTop:"30px", width:"300px"}}
        />

        <button
          style={{marginTop:"30px", width:"100px"}}
          onClick={ handleClick }
        >
          Focus
        </button>
      </div>
    </>
  )
}