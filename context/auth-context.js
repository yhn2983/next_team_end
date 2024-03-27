import { createContext, useContext, useEffect, useState } from 'react'
// import jwt from 'jsonwebtoken'
import { JWT_LOGIN_POST } from '@/components/config'
import { CHECK_AUTH_ROUTE } from '@/components/config'
import { JWT_LOGOUT_POST } from '@/components/config'

const AuthContext = createContext()

// const authStorageKey = 'lee-auth'

export function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState({})

  const checkAuth = async () => {
    const response = await fetch(CHECK_AUTH_ROUTE, {
      method: 'GET',
      credentials: 'include', // 需要添加這行以便在跨域請求中發送cookies
    })
    if (response.ok) {
      const result = await response.json()
      if (result.status === 'success') {
        setAuth(result.data.user) // 確保這裡正確地設置了 auth 狀態
        return result.data.user
      }
    }
    return null
  }

  const login = async (email, password) => {
    const response = await fetch(JWT_LOGIN_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include', // 需要添加這行以便在跨域請求中發送cookies
    })

    if (!response.ok) return false

    const result = await response.json()

    if (result.status !== 'success') return false

    /* 不需要解析 token，因為 token 會在每次請求時自動帶入
    這是localStorage的方式

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
    */
    // 登入成功後，更新 auth 狀態
    await checkAuth()

    return true
  }

  const logout = async () => {
    // 登出時，移除 localStorage 的 authData
    // 不需要從localStorage中刪除access token
    // localStorage.removeItem(authStorageKey)

    const response = await fetch(JWT_LOGOUT_POST, {
      method: 'POST',
      credentials: 'include', // 需要添加這行以便在跨域請求中發送cookies
    })

    if (response.ok) {
      const data = await response.json()
      if (data.status === 'success') {
        setAuth({})
        return true
      }
    }

    return false
  }

  /* 這是localStorage的方式
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
  */

  // 每次重新整理頁面時，檢查用戶是否已經登入
  useEffect(() => {
    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ auth, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

export default AuthContext
