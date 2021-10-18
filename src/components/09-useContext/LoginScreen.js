import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

  const { setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginScreen</h1>
      <hr/>
      <button onClick={() => setUser({
        id:456,
        name:'Jorge'
      })}>
        Login
      </button>
    </>
  )
}

export default LoginScreen