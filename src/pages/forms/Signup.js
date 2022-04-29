import { useState } from "react";
import { useSignup } from '../../hooks/UseSignup'

// styles
import './Signup.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signup, isPending, error} = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign up to save your photos!</h2>
      <label>
        <span>Email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      { !isPending && <button className='btn'>Complete Signup</button> }
      { error && <p>{error}</p> }

    </form>
  )
}
