import { useState } from 'react'
import styles from '@/styles/lee-form.module.scss'
import { PASSWORD_OTP_POST } from '@/components/config'
import { useRouter } from 'next/router'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const onSubmit = (e) => {
    e.preventDefault()

    // 在這裡處理密碼重設的請求
    const postOtp = async () => {
      const res = await fetch(PASSWORD_OTP_POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        const data = await res.json()
        console.log(data)
      }
      // 如果接收到資料，則跳轉到重設密碼頁面
      router.push('/member/resetpassword') // 新增這一行
    }

    postOtp() // 呼叫 postOtp 函數

    // 例如，你可以發送一個請求到你的後端API，並將email作為參數
    console.log(`Password reset request for ${email} has been sent.`)
  }

  return (
    <div className="container d-flex justify-content-center">
      <div className={`p-3 round ${styles.myloginform}`}>
        <form name="form1" onSubmit={onSubmit}>
          <div className="mb-4">
            <h2 className="text-center">忘記密碼</h2>
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
            <div className={styles.error}></div>{' '}
            {/* 如果有錯誤訊息，可以在這裡顯示 */}
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
