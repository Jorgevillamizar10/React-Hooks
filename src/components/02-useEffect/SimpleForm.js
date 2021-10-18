import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  useEffect(() => {

  },[])

  const handleInputChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  return(
    <>
      <h1>
        Simple Form - UseEffect
      </h1>
      <hr/>

      <div style={{display:"flex", flexDirection: "column"}}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre..."
          autoComplete="on"
          value={name}
          onChange={ handleInputChange }
          style={{marginTop:"20px"}}
        />
        <input
          type="text"
          name="email"
          placeholder="Tu email..."
          autoComplete="on"
          value={email}
          onChange={ handleInputChange }
          style={{marginTop:"20px"}}
        />

        {
          name && <Message />
        }

      </div>
    </>
  )
}