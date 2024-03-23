import { createContext, useContext, useEffect, useState } from 'react'
import { JWT_LOGIN_POST } from '@/components/config'

const AuthContext = createContext()

// 1. 保有登入的狀態
// 2. 登入的功能
// 3. 登出
const logoutState = {
  id: 0, // 如果不是 0 表示已經登入
  email: '',
  nickname: '',
  token: '',
}

const authStorageKey = 'shin-auth'

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(logoutState)

  const login = async (email, password) => {
    // 處理登入的狀況
    const r = await fetch(JWT_LOGIN_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    if (!r.ok) return false // 登入沒有成功
    const result = await r.json()
    if (result.status !== 'success') return false // 登入沒有成功

    const token = result.data.accessToken
    const payload = JSON.parse(atob(token.split('.')[1]))
    const { id, nickname } = payload

    localStorage.setItem(
      authStorageKey,
      JSON.stringify({ id, nickname, email, token })
    )
    setAuth({ id, nickname, email, token })
    return true
  }

  const logout = () => {
    localStorage.removeItem(authStorageKey)
    setAuth({ ...logoutState })
  }

  const getAuthHeader = () => {
    if (auth.token) {
      const payload = JSON.parse(atob(auth.token.split('.')[1]))
      const { id, nickname } = payload
      console.log(`User ID: ${id}, Nickname: ${nickname}`)

      return {
        Authorization: `Bearer ${auth.token}`,
      }
    }
    return {}
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
    <AuthContext.Provider value={{ auth, login, logout, getAuthHeader }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
