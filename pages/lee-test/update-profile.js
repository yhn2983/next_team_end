import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '@/styles/lee-form.module.scss'
import validator from 'validator'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { CHECK_AUTH_ROUTE } from '@/components/config'
import router from 'next/router'
import Image from 'next/image'

export default function UpdateProfilePage() {
  const MySwal = withReactContent(Swal)

  const [user, setUser] = useState({
    email: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
    address: '',
  })

  const initError = {
    email: '',
    name: '',
    nickname: '',
    mobile: '',
    birthday: '',
    address: '',
  }

  const [error, setError] = useState(initError)

  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const checkError = () => {
    let hasError = false
    const newError = { ...initError }

    if (!user.name) {
      newError.name = '姓名為必填'
    }

    if (!user.email) {
      newError.email = 'Email為必填'
    }

    if (!validator.isEmail(user.email)) {
      newError.email ||= 'Email格式錯誤'
    }

    for (const property in newError) {
      if (newError[property]) {
        hasError = true
      }
    }

    return { hasError, newError }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { hasError, newError } = checkError()

    if (hasError) {
      setError(newError)
      return
    }

    setError(initError)

    const response = await fetch(CHECK_AUTH_ROUTE, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    const data = await response.json()

    if (data.status === 'success') {
      MySwal.fire({
        title: '恭喜',
        text: '你已經成功更新會員資料',
        icon: 'success',
      })

      router.push('/lee-test/profile')
    } else {
      MySwal.fire({
        title: '錯誤!',
        text: '更新失敗',
        icon: 'error',
        confirmButtonText: '確認',
      })
    }
  }

  // 在這裡加入 useEffect 來從伺服器取得用戶的當前資訊，並設定到 user 狀態中
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(CHECK_AUTH_ROUTE, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      const data = await response.json()

      if (data.status === 'success') {
        setUser(data.data)
      }
    }

    fetchUser()
  }, [])

  return (
    <>
      <Head>
        <title>修改資料</title>
      </Head>
      <div className="container d-flex justify-content-center">
        <div className={`${styles.registerForm} p-3`}>
          <form name="form1" onSubmit={handleSubmit}>
            <div className="mb-3">
              <h3 className="text-center">修改資料</h3>
            </div>
            <div className="mb-4">
              <label className="form-label ms-2" htmlFor="name">
                姓名
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="name"
                id="name"
                placeholder="輸入姓名"
                value={user.name}
                onChange={handleFieldChange}
              />
              <div className="error">{error.name}</div>
            </div>
            <div className="mb-4">
              <label className="form-label ms-2" htmlFor="mobile">
                手機號碼
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="mobile"
                id="mobile"
                placeholder="輸入手機號碼"
                value={user.mobile}
                onChange={handleFieldChange}
              />
              <div className="error">{error.mobile}</div>
            </div>
            <div className="mb-1">
              <label className="form-label ms-2" htmlFor="address">
                地址
              </label>
              <input
                className="form-control rounded"
                type="text"
                name="address"
                id="address"
                placeholder="輸入地址"
                value={user.address}
                onChange={handleFieldChange}
              />
              <div className="error">{error.address}</div>
            </div>
            <button type="submit" className="btn mt-3">
              <strong>確認修改</strong>
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .error {
          color: red;
          height: 10px;
          position: relative;
          margin-left: 5px;
          margin-top: 6px;
          font-weight: 500;
        }
      `}</style>
    </>
  )
}
