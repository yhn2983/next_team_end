import { createContext, useContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'

const AuthContext = createContext()

const authStorageKey = 'shin-auth'

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({})

  const login = async (email, password) => {
    const response = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) return false

    const data = await response.json()

    if (data.status !== 'success') return false

    const decoded = jwt.decode(data.data.accessToken)

    const authData = {
      id: decoded.id,
      email: decoded.email,
      nickname: decoded.nickname,
      token: data.data.accessToken,
    }

    localStorage.setItem(authStorageKey, JSON.stringify(authData))

    setAuth(authData)

    return true
  }

  const logout = () => {
    localStorage.removeItem(authStorageKey)
    setAuth({})
  }

  useEffect(() => {
    const str = localStorage.getItem(authStorageKey)
    if (str) {
      try {
        const localState = JSON.parse(str)
        setAuth(localState)
      } catch (ex) {
        console.log(ex)
      }
    }
  }, [])

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
