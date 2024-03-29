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
    carbonPoints: 0,
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
          carbonPoints = 0,
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
          carbonPoints,
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
                      <p className="mb-0">小碳點</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.carbonPoints}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3 mt-1">
                      <p className="mb-0">關於我</p>
                    </div>
                    <div className="col-sm-9 mt-1">
                      <div className="card">
                        <div className="card-body">
                          <p className="text-muted">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. In, error. Consectetur ullam sed minima.
                            Numquam dicta, optio repellat quae necessitatibus
                            ipsam voluptatem omnis! Ipsum facere sed esse nam?
                            Nesciunt amet temporibus beatae magnam ad harum
                            perferendis dolore deserunt dolorum vero, laborum
                            fuga culpa incidunt eum aliquam. Minus quisquam
                            fugit est Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus hic ex corporis at,
                            blanditiis corrupti repellat. Dolor n
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
