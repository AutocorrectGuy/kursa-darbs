import React, { createContext, useContext, useState } from 'react'

type userType = string | null
type tokenType = string | null
type StateContextType = {
  user: userType
  token: tokenType
  setUser: React.Dispatch<React.SetStateAction<userType>>
  updateToken: (token: string | null) => void
}
const StateContext = createContext<StateContextType>({
  user: null,
  token: null,
  setUser: () => null,
  updateToken: () => null
})

export const StateContextProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<userType>(null)
  const [token, setToken] = useState<tokenType>(localStorage.getItem('ACCESS_TOKEN'))

  const updateToken = (token: string | null): void => {
    setToken(token)
    token
      ? localStorage.setItem('ACCESS_TOKEN', token)
      : localStorage.removeItem('ACCESS_TOKEN')
  }

  return (
    <StateContext.Provider value={{
      user,
      token,
      setUser,
      updateToken
    }}>
      {children}
    </StateContext.Provider>
  )
}

const useStateContext = () => useContext(StateContext)

export default useStateContext