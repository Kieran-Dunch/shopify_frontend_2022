import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import {UserContext} from '../context/UserContext'


export const useSignup = () => {
  const [ isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = UserContext()

  const signup = async (email, password) => {
    setError(null)
    setIsPending(true)

    try {
      // signup user
      const response = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!response) {
        throw new Error("Could not complete signup. Please try again.")
      }

      // dispatch login action
      await dispatch({ type: 'LOGIN', payload: response.user })

      // update state
      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } catch(error) {
      if (!isCancelled) {
        console.log(error.message)
        setError(error.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => {
      setIsCancelled(true)
    }
  }, [])


  return { error, isPending, signup }
}
