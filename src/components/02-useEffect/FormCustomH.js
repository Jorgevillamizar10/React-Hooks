import React from 'react'
import { useForm } from '../../hooks/useForm'
import './effect.css'

export const FormCustomH = () => {

  const [value, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = value

  return(
    <>
      <h1>
        Form Custom H - UseEffect
      </h1>
      <hr/>

      <div style={{display:"flex", flexDirection: "column"}}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre..."
          value={name}
          onChange={ handleInputChange }
          style={{marginTop:"20px"}}
        />

        <input
          type="text"
          name="email"
          placeholder="Tu email..."
          value={email}
          onChange={ handleInputChange }
          style={{marginTop:"20px"}}
        />

        <input
          type="password"
          name="password"
          placeholder="Tu password..."
          value={password}
          onChange={ handleInputChange }
          style={{marginTop:"20px"}}
        />

      </div>
    </>
  )
}