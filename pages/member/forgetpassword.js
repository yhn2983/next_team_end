import { useState } from 'react'
import styles from '@/styles/lee-form.module.scss'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    // 在這裡處理密碼重設的請求
    // 例如，你可以發送一個請求到你的後端API，並將email作為參數
    console.log(`Password reset request for ${email} has been sent.`)
  }

  return (
    <div
      className={`container d-flex justify-content-center ${styles.myloginform}`}
    >
      <form name="form1" onSubmit={onSubmit}>
        <div className="mb-3">
          <h3 className="text-center">忘記密碼</h3>
        </div>
        <div className="mb-3">
          <label className="form-label ms-2" htmlFor="email">
            電子郵件地址
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
        <button type="submit" className="btn">
          <strong>提交</strong>
        </button>
      </form>
    </div>
  )
}
