import { useState } from 'react'
import styles from '@/styles/lee-form.module.scss'
import { PASSWORD_RESET_POST } from '@/components/config'
import { useRouter } from 'next/router'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()

    // 在這裡處理密碼重設的請求
    const resetPassword = async () => {
      if (
        password !== confirmPassword ||
        password === '' ||
        confirmPassword === ''
      ) {
        alert('密碼和確認密碼不匹配或為空')
        return
      }

      const res = await fetch(PASSWORD_RESET_POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token, password }),
      })

      const result = await res.json()
      console.log(result)

      if (result.status === 'success') {
        alert('密碼重設成功，為您跳轉到登入頁面')
        router.push('/member/login')
      } else {
        alert(result.message)
      }
    }

    resetPassword() // 呼叫 resetPassword 函數
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className={`p-3 round ${styles.myloginform}`}>
        <form name="form1" onSubmit={onSubmit}>
          <div className="mb-4">
            <h2 className="text-center">重設密碼</h2>
          </div>
          <div className="mb-3">
            <label className="form-label ms-2" htmlFor="email">
              <strong>電子郵件地址:</strong>
            </label>
            <input
              className="form-control rounded"
              type="email"
              name="email"
              id="email"
              placeholder="輸入你的電子郵件地址"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label ms-2" htmlFor="token">
              <strong>驗證碼:</strong>
            </label>
            <input
              className="form-control rounded"
              type="text"
              name="token"
              id="token"
              placeholder="輸入你的驗證碼"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label ms-2" htmlFor="password">
              <strong>新密碼:</strong>
            </label>
            <input
              className="form-control rounded"
              type="password"
              name="password"
              id="password"
              placeholder="輸入你的新密碼"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label ms-2" htmlFor="confirmPassword">
              <strong>確認新密碼:</strong>
            </label>
            <input
              className="form-control rounded"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="再次輸入你的新密碼"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="login-with-line">
            <button type="submit" className="btn">
              <strong>提交</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
