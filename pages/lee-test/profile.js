import React from 'react'
import Image from 'next/image'
import styles from '@/styles/lee-form.module.scss'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { CHECK_AUTH_ROUTE } from '@/components/config'
import { UPLOAD_AVATAR_ONE_POST } from '@/components/config'

export default function Profile() {
  // 使用 useState 建立 user 和 file 的狀態
  const [user, setUser] = useState({
    name: '',
    nickname: '',
    email: '',
    mobile: '',
    birthday: '',
    photo: 'default.png',
    address: '',
    carbon_points_got: 0,
    carbon_points_have: 0,
  })
  const [file, setFile] = useState(null)

  // 使用 useRef 建立一個參照到 input 元件的 ref
  const inputRef = useRef(null)

  // 定義一個異步函數來從後端獲取使用者資料
  const fetchUserData = async () => {
    const response = await fetch(CHECK_AUTH_ROUTE, {
      method: 'GET',
      credentials: 'include',
    })
    const result = await response.json()

    if (result.status === 'success') {
      result.data.user.mobile = '0' + result.data.user.mobile
      result.data.user.birthday = new Date(result.data.user.birthday)
        .toISOString()
        .split('T')[0]

      // 更新 user 和 file 的狀態
      setUser(result.data.user)
      setFile(result.data.user.photo)
    }
  }

  // 使用 useEffect 在組件掛載時獲取使用者資料
  useEffect(() => {
    fetchUserData()
  }, [])

  // 定義一個函數來模擬點擊 input 元件
  const handleClick = () => {
    inputRef.current.click()
  }
  // 定義一個函數來處理檔案變更事件
  const handleFileChange = (e) => {
    handleUpload(e.target.files[0])
  }

  // 定義一個異步函數來處理檔案上傳
  const handleUpload = async (file) => {
    try {
      const formData = new FormData()
      formData.append('avatar', file)

      const response = await fetch(UPLOAD_AVATAR_ONE_POST, {
        method: 'POST',
        body: formData,
        credentials: 'include',
      })

      const result = await response.json()

      // 如果上傳成功，則重新獲取使用者資料
      if (result.status) {
        fetchUserData()
      }
    } catch (err) {
      console.error('Upload failed:', err)
    }
  }

  return (
    <>
      <section className={`${styles.profilesStyle}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <Image
                    src={
                      file
                        ? `http://localhost:3001/avatar/${file}`
                        : '/default.png'
                    }
                    alt="avatar"
                    width={175}
                    height={185}
                    className="rounded-circle mt-2 secondary"
                  />
                  <h5 className="my-4">{user.nickname}</h5>
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }} // 隱藏 input 元件
                  />
                  <button
                    type="button"
                    className={`mb-4 ${styles.photobtn}`}
                    onClick={handleClick}
                  >
                    上傳大頭貼照
                  </button>
                  {/* <div className="content text-center m-4">
                    <div className="ratings">
                      <span className="product-rating">4.6</span>
                      <span>/5</span>
                      <div className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="rating-text">
                        <span>46 個評分 &amp; 15 個評論</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn">
                      追蹤
                    </button>
                    <button type="button" className="btn ms-1">
                      傳訊息
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-lg-0r text-center mb-4">
                <div className="card-body p-0 text-center">
                  <ul className="list-group list-group-flush rounded-3">
                    <Link href="/lee-test/update-profile">
                      <li
                        className={`list-group-item p-3 ${styles.listGroupItem}`}
                      >
                        修改個人資料
                      </li>
                    </Link>
                    <Link href="/your-target-url">
                      <li
                        className={`list-group-item p-3 ${styles.listGroupItem}`}
                      >
                        更改密碼
                      </li>
                    </Link>
                    <Link href="/your-target-url">
                      <li
                        className={`list-group-item p-3 ${styles.listGroupItem}`}
                      >
                        個人賣場
                      </li>
                    </Link>
                    <Link href="/your-target-url">
                      <li
                        className={`list-group-item p-3 ${styles.listGroupItem}`}
                      >
                        預留功能
                      </li>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">真實姓名</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">暱稱</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.nickname}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">手機</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.mobile}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">生日</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.birthday}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">地址</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">累積小碳點</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user.carbon_points_got}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">持有小碳點</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">
                        {user.carbon_points_have}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">會員等級</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.level_desc}</p>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
