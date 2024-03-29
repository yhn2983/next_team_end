import React from 'react'
import Image from 'next/image'
import styles from '@/styles/lee-form.module.scss'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { CHECK_AUTH_ROUTE } from '@/components/config'

export default function Profile() {
  const [user, setUser] = useState({
    name: '',
    nickname: '',
    email: '',
    mobile: '',
    birthday: '',
    address: '',
    carbon_points_got: 0,
    carbon_points_have: 0,
  })

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(CHECK_AUTH_ROUTE, {
        method: 'GET',
        credentials: 'include',
      })
      const data = await response.json()

      if (data.status === 'success') {
        const {
          name = '',
          nickname = '',
          email = '',
          mobile = '',
          birthday = '',
          address = '',
          carbon_points_got = 0,
          carbon_points_have = 0,
          level_desc = '等待任務中',
        } = data.data.user

        // 處理手機號碼補0
        const newMobile = '0' + mobile

        // 處理生日格式
        const formattedBirthday = new Date(birthday).toISOString().split('T')[0]

        setUser({
          name,
          nickname,
          email,
          mobile: newMobile,
          birthday: formattedBirthday,
          address,
          carbon_points_got,
          carbon_points_have,
          level_desc,
        })
      }
    }

    fetchUserData()
  }, [])
  return (
    <>
      <section className={`${styles.profilesStyle}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    width={165}
                    height={185}
                    className="rounded-circle"
                  />
                  <h5 className="my-4">{user.nickname}</h5>
                  <button type="button" className={`mb-4 ${styles.photobtn}`}>
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
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
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
