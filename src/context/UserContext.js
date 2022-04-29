import { createContext, useReducer, useEffect} from "react"
import { projectAuth } from "../firebase/config"

export const UserContext = createContext()

export const ctxReducer = (state, action) => {
  switch (action.type){
    case 'LOGIN':
      return { ...state, user: action.payload }
    case 'LOGOUT':
      return { ...state, user: null }
      case 'AUTHISREADY':
        return { ...state, user: action.payload, authIsReady: true }
    default:
      return state
  }

}

export const UserContextProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer(ctxReducer, {
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = projectAuth.onAuthStateChanged((user) => {
      dispatch({ type: "AUTHISREADY", payload: user })
      unsub()
    })
  }, [])
  console.log('AuthContext state:', state)

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      { children }
    </UserContext.Provider>
  )
}
