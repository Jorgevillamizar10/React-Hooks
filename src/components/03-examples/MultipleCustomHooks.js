import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);
  const { loading, data }= useFetch( `https://www.breakingbadapi.com/api/quotes/${counter}` )
  // !!data -> si existe la data
  const { author, quote } = !!data && data[0]

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr/>
        {
          loading ?
            <div style={{
              marginTop:'30px',
              textAlign:'center',
              width:'100%',
              background: 'lightblue',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Roboto, sans-serif',
              fontSize:'20px'
            }}>
              Loading....
            </div>
          :
            <blockquote style={{textAlign:'right', marginTop:'30px', fontFamily: 'Roboto, sans-serif'}}>
              <p>{quote}</p>
              <footer>- {author}</footer>
            </blockquote>
        }

        <button onClick={increment} style={{marginTop:'30px'}}>
          Siguiente quote
        </button>

    </>
  )
}