import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import styles from '@/styles/lee-form.module.scss'

export default function LoginPage() {
  const router = useRouter()
  const { auth, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (auth.token) {
      router.push('/lee-test/logout')
    }
  }, [auth, router])

  const onSubmit = (e) => {
    e.preventDefault()

    login(email, password).then((result) => {
      if (result) {
        alert('登入成功')
        router.push('/lee-test/logout')
      } else {
        alert('登入失敗')
      }
    })
  }

  return (
    <>
      <Head>
        <title>歡迎登入</title>
      </Head>
      <div className="container d-flex justify-content-center">
        <div className={`p-3 w-75 round ${styles.myloginform}`}>
          <form name="form1" onSubmit={onSubmit}>
            <div className="mb-3">
              <h3 className="text-center">歡迎登入</h3>
            </div>
            <div className="mb-3">
              <div className="user-account">
                <label className="form-label ms-2" htmlFor="email">
                  email
                </label>
                <input
                  className="form-control rounded"
                  type="text"
                  name="email"
                  id="email"
                  placeholder="輸入信箱"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <div className="user-password">
                <label className="form-label ms-2" htmlFor="password">
                  密碼
                </label>
                <input
                  className="form-control rounded"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="輸入密碼"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn">
              登入
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
