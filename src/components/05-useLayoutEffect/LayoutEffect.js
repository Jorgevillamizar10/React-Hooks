
import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'

export const LayoutEffect = () => {

  const { counter, increment } = useCounter(1);
  const { data }= useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
  // !!data -> si existe la data
  const { quote } = !!data && data[0]
  const refTag = useRef()

  useLayoutEffect(() => {
    refTag.current.getBoundingClientRect()
  }, [quote])

  return (
    <>
      <h1>LayoutEffect</h1>
      <hr/>
        <blockquote style={{textAlign:'right', marginTop:'30px', fontFamily: 'Roboto, sans-serif'}}>
          <p ref={refTag} >{quote}</p>
        </blockquote>

        <button onClick={increment} style={{marginTop:'30px'}}>
          Siguiente quote
        </button>

    </>
  )
}