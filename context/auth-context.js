import { createContext, useContext, useEffect, useState } from 'react'
import jwt from 'jsonwebtoken'
import { JWT_LOGIN_POST } from '@/components/config'
import { JWT_REGISTER_POST } from '@/components/config'

const AuthContext = createContext()

const authStorageKey = 'lee-auth'

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({})

  const login = async (email, password) => {
    const response = await fetch(JWT_LOGIN_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) return false

    const result = await response.json()

    if (result.status !== 'success') return false

    const decoded = jwt.decode(result.data.accessToken)

    const authData = {
      id: decoded.id,
      email: decoded.email,
      nickname: decoded.nickname,
      token: result.data.accessToken,
    }
    // 把 authData 存到 localStorage
    localStorage.setItem(authStorageKey, JSON.stringify(authData))

    setAuth(authData)

    return true
  }

  // 登出時，移除 localStorage 的 authData
  const logout = () => {
    localStorage.removeItem(authStorageKey)
    setAuth({})
  }

  const register = async (
    email,
    password,
    name,
    nickname,
    mobile,
    birthday,
    address
  ) => {
    const response = await fetch(JWT_REGISTER_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
        nickname,
        mobile,
        birthday,
        address,
      }),
    })

    if (response.ok) {
      const data = await response.json()
      return data.status === 'success'
    } else {
      return false
    }
  }

  // 每次重新整理頁面時，檢查 localStorage 有沒有 authData
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
    <AuthContext.Provider value={{ auth, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
