import React from 'react'
import { useAuth } from '@/context/auth-context'
import useFirebase from '@/hooks/use-firebase'
import toast from 'react-hot-toast'
import style from '@/styles/lee-form.module.scss'

export default function LogoutButton() {
  const { logout, setAuth, initUserData } = useAuth()
  const { logoutFirebase } = useFirebase()

  const handleLogout = async () => {
    // firebase logout
    logoutFirebase()

    const res = await logout()

    // 成功登出後，回復初始會員狀態
    if (res) {
      toast.success('已成功登出')

      setAuth({
        isAuth: false,
        userData: initUserData,
      })
    } else {
      toast.error(`登出失敗`)
    }
  }

  return (
    <a
      href="#logout"
      onClick={(e) => {
        e.preventDefault() // 防止頁面跳轉
        handleLogout()
      }}
      style={{ textDecoration: 'none', color: 'inherit' }} // 移除所有樣式
    >
      登出
    </a>
  )
}
