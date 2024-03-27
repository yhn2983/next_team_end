import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import styles from '@/styles/lee-form.module.scss'

export default function RegisterPage() {
  const router = useRouter()
  const { auth, register } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [mobile, setMobile] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (auth.token) {
      router.push('/lee-test/logout')
    }
  }, [auth, router])

  const onSubmit = (e) => {
    e.preventDefault()

    register(email, password, name, nickname, mobile, birthday, address).then(
      (result) => {
        if (result) {
          alert('註冊成功，請重新登入')
          router.push('/lee-test/login')
        } else {
          alert('註冊失敗')
        }
      }
    )
  }

  return (
    <>
      <Head>
        <title>會員註冊</title>
      </Head>
      <div className="container d-flex justify-content-center">
        <div className={`${styles.registerForm} p-3`}>
          <form name="form1" onSubmit={onSubmit}>
            <div className="mb-3">
              <h3 className="text-center">會員註冊</h3>
            </div>
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="email">
                Email
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
            <div className="mb-5">
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
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="name">
                姓名
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="name"
                id="name"
                placeholder="輸入姓名"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="nickname">
                暱稱
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="nickname"
                id="nickname"
                placeholder="輸入暱稱"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="mobile">
                手機號碼
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="mobile"
                id="mobile"
                placeholder="輸入手機號碼"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="birthday">
                生日
              </label>
              <input
                className="form-control rounded"
                type="date"
                name="birthday"
                id="birthday"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label className="form-label ms-2" htmlFor="address">
                地址
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="address"
                id="address"
                placeholder="輸入地址"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button type="submit" className="btn">
              <strong>註冊</strong>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
