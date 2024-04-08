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
    <div className={`${style.logoutButton}`}>
      <button onClick={handleLogout}>
        <strong>登出</strong>
      </button>
    </div>
  )
}
