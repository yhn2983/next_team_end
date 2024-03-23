import Head from 'next/head'
import { useState } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password).then((result) => {
      if (result) {
        alert('登入成功')
        router.push('/')
      } else {
        alert('登入失敗')
      }
    })
  }

  return (
    <>
      <Head>
        <title>會員登入</title>
      </Head>
      <div className="container d-flex justify-content-center">
        <div className="border-dark border border-3 rounded p-3 w-75">
          <form name="form1" onSubmit={onSubmit}>
            <div className="mb-3">
              <h3 className="text-center">會員登入</h3>
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

            <button type="submit" className="btn btn-primary">
              登入
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
