import React from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'

export default function Logout() {
  const { auth, logout } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    /* 要這樣設定是因為登出後要等一下才能跳轉頁面
    不然來不及清除 localStorage 就跳轉頁面了
    因為 localStorage.removeItem 是一個同步操作
    logout()
    await new Promise((resolve) => setTimeout(resolve, 200))
    router.push('/lee-test/login')
    */
    const success = await logout()
    if (success) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      router.push('/lee-test/login')
    } else {
      // handle logout failure
    }
  }
  return (
    <div>
      <h1>你確定要登出嗎？</h1>
      <button onClick={handleLogout}>確定登出</button>
    </div>
  )
}
