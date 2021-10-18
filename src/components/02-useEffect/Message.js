import React, { useEffect } from 'react'

export const Message = () => {

  useEffect(() => {
    console.log('componente montado')

    const mouseMove = (e) => {
      const cors = {x: e.x, y: e.y}
      console.log(cors)
    }

    window.addEventListener('mousemove', mouseMove)
    
    return () => {
      console.log('componente desmontado')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <>
      <h3>Eres genial</h3>
    </>
  )
}
