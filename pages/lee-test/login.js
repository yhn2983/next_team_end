import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import styles from '@/styles/lee-form.module.scss'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const { auth, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // 記錄錯誤訊息用的狀態
  const [error, setError] = useState({
    username: '',
    password: '',
  })
  // 註冊表單有另外一種更新表單狀態的寫法

  useEffect(() => {
    if (auth.token) {
      router.push('/lee-test/logout')
    }
  }, [auth, router])

  const onSubmit = async (e) => {
    e.preventDefault()

    let hasError = false
    const newError = {
      email: '',
      password: '',
    }

    if (!email) {
      newError.email = 'Email為必填'
      hasError = true
    }

    if (!password) {
      newError.password = '密碼為必填'
      hasError = true
    }

    if (password.length < 6) {
      newError.password ||= '密碼至少要6個字元'
      hasError = true
    }

    if (password.length > 10) {
      newError.password ||= '密碼至多為10個字元'
      hasError = true
    }

    if (hasError) {
      setError(newError)
      return
    }

    const result = await login(email, password)
    if (result) {
      alert('登入成功')
      router.push('/lee-test/logout')
    } else {
      alert('登入失敗')
    }
  }

  return (
    <>
      <Head>
        <title>歡迎登入</title>
      </Head>
      <div className="container d-flex justify-content-center">
        <div className={`p-3 w-75 round ${styles.myloginform}`}>
          {/* 用form標籤就不會用onClick */}
          <form name="form1" onSubmit={onSubmit}>
            <div className="mb-4">
              <h2 className="text-center">歡迎登入</h2>
            </div>
            <div className="mb-3">
              <div className="user-account">
                <label className="form-label ms-2" htmlFor="email">
                  <strong>email:{''}</strong>
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
                <div className={styles.error}>{error.email}</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="user-password">
                <label className="form-label ms-2" htmlFor="password">
                  <strong>密碼:{''}</strong>
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
                <div className={styles.error}>{error.password}</div>
                <Link
                  href="/lee-test/forgetpassword"
                  className="text-decoration-none"
                >
                  <p className="ms-2 mt-4">
                    <strong>忘記密碼？</strong>
                  </p>
                </Link>
              </div>
            </div>
            <div className="register mt-2 ms-1">
              <p>
                不是會員？
                <Link href="/lee-test/signup" className="text-decoration-none">
                  <strong>
                    來去註冊
                    <i className="fa-brands fa-golang" />
                  </strong>
                </Link>
              </p>
            </div>
            <hr />
            <div className="login-with-line">
              <button type="submit" className="btn">
                <strong>登入</strong>
              </button>
              <button
                type="button"
                className="btn rounded line-btn btn-outline-primary"
                style={{ marginLeft: '15px' }}
              >
                <strong>
                  <i className="fab fa-line" style={{ color: '#00c300' }}></i>{' '}
                  連動LINE登入
                </strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
