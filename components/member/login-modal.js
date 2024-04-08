import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import style from '@/styles/lee-form.module.scss'
import GoogleLoginRedirect from '@/components/member/google-login-redirect'
import { Modal, Button, Form } from 'react-bootstrap'

export default function LoginPage({ show, onHide }) {
  const router = useRouter()
  const { auth, login, checkAuth } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasChecked, setHasChecked] = useState(false)

  // 記錄錯誤訊息用的狀態
  const [error, setError] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    const checkLoginStatus = async () => {
      if (!hasChecked) {
        const isAuth = await checkAuth()
        if (isAuth) {
          // setTimeout(() => {
          //   router.push('/member/profile')
          // }, 1000)
        }
        setHasChecked(true)
      }
    }

    checkLoginStatus()
  }, [router, hasChecked])

  // 練習怎麼撈出登入的會員資料
  useEffect(() => {
    if (auth.userData) {
      console.log(
        auth.userData.id,
        auth.userData.email,
        auth.userData.nickname,
        auth.userData.google_uid
      )
    }
  }, [auth])

  // 表單送出的事件處理函式
  const onSubmit = async (e) => {
    // 取消表單送出的預設行為，要改用fetch/ajax來送出表單資料
    e.preventDefault()
    // e.target指的是表單元素

    // 這裡可以作自訂的表單檢查 --- START ---
    // 信號代表有沒有錯誤
    let hasError = false
    // 記錄錯誤的物件
    const newError = {
      email: '',
      password: '',
    }

    // if(user.email)指的是"有填寫"的情況，所以反之為"沒填寫"的情況
    if (!email) {
      newError.email = 'Email為必填'
      hasError = true
    }

    if (!password) {
      newError.password = '密碼為必填'
      hasError = true
    }

    if (password.length < 6) {
      // 指定預設值語法，如果已經有上個錯誤訊息的話，不會再加入這個訊息
      // 同欄位多個檢查時才會使用
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
      // 流程控制，有錯誤訊息則先跳出處理函式不繼續送到伺服器
    }
    // 這裡可以作自訂的表單檢查 --- END ---

    // 這裡之後送到伺服器(資料庫)中

    const result = await login(email, password)
    if (result) {
      alert('登入成功')
      // router.push('/member/profile')
    } else {
      alert('登入失敗')
    }
  }

  return (
    <>
      <Head>
        <title>歡迎登入</title>
      </Head>

      <Modal show={show} onHide={onHide} className={style.myloginform}>
        {' '}
        {/* 使用從 props 中取得的 show 和 onHide */}
        <Modal.Header closeButton>
          <Modal.Title>歡迎登入</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="輸入信箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">{error.email}</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>密碼:</Form.Label>
              <Form.Control
                type="password"
                placeholder="輸入密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text className="text-muted">{error.password}</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              登入
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <GoogleLoginRedirect />
        </Modal.Footer>
      </Modal>
    </>
  )
}
