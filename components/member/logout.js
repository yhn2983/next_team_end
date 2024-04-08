import React from 'react'
import { useAuth } from '@/context/auth-context'
// import { useRouter } from 'next/router'

export default function Logout() {
  const { auth, logout } = useAuth()
  // const router = useRouter()

  const handleLogout = async () => {
    /* 要這樣設定是因為登出後要等一下才能跳轉頁面
    不然來不及清除 localStorage 就跳轉頁面了
    因為 localStorage.removeItem 是一個同步操作
    logout()
    await new Promise((resolve) => setTimeout(resolve, 200))
    router.push('/member/login')
    */
    const success = await logout()
    /* 跳轉路由註解
    if (success) {
      await new Promise((resolve) => setTimeout(resolve, 200))
      router.push('/member/login')
    } else {
      // handle logout failure
    }
    */
  }
  return (
    <div>
      <button onClick={handleLogout}>登出</button>
    </div>
  )
}
