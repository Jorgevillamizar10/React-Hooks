import React, { memo } from 'react'

//memo -> para memorizar el componente en React solo se va a disparar si las properties cambian
// asi evitamos que el componente se vuelva a dibujar si algun estado externo a este cambia

export const Small = memo(({ value }) => {

  return (
    <small>
      { value }
    </small>
  )
  
})