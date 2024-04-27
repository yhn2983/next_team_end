import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/buyer.module.css'
import Button from 'react-bootstrap/Button'
import { FaAlignJustify } from 'react-icons/fa'
import { BUYER_ORDER } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import OrderListNav from '@/components/orderList/order-list-nav'
import { BUYER_ORDER_FIN } from '@/configs/configs-buyer'
import DefaultLayout from '@/components/common/default-layout'
import Link from 'next/link'
import Head from 'next/head'

export default function OrderList() {
  const router = useRouter()

  const { checkAuth, auth } = useAuth()
  const [data, setData] = useState({
    success: false,
    page: 0,
    totalPages: 0,
    rows: [],
  })
  useEffect(() => {
    fetch(`${BUYER_ORDER}?${auth.userData.id}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
      })
  }, [router.query, auth])

  // useEffect(() => {
  //   fetch(`${BUYER_ORDER}${location.search}`, {
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then((r) => r.json())
  //     .then((dataObj) => {
  //       setData(dataObj)
  //     })
  // }, [router.query])

  // useEffect(() => {
  //   if (!id) return // 如果沒有 sid 的值, 就不用發 AJAX
  //   fetch(`${AB_ITEM}/${sid}`)
  //     .then((r) => r.json())
  //     .then((result) => {
  //       console.log(result)
  //       if (result.success) {
  //         setFormData({ ...result.data })
  //       } else {
  //         router.push('/address-book')
  //       }
  //     })
  // }, [id, router])

  //-------
  return (
    <>
      <DefaultLayout pageName="od-fi">
        <Head>
          <title>我的訂單：已完成 | DEAL-2ND HAND SHOP</title>
        </Head>
        <div className={`${Styles.orderList}`}>
          <OrderListNav pageName="od-fi" />
          <div className="row mt-5 mx-5 mb-5">
            <div className="col-sm-8 cart-area">
              {!auth ? (
                alert('請先登入')
              ) : !data.rows ? (
                <div>...loading</div>
              ) : (
                <>
                  <h4 className="mb-3">
                    <strong>已完成訂單</strong>
                  </h4>
                  {data.rows
                    .filter((v) => {
                      return v.complete_status == 2
                    })
                    .map((v, i) => {
                      return (
                        <div key={i}>
                          <div
                            className={`card mb-4 border-bottom cart-card ${Styles.imgBox}`}
                            style={{
                              overflow: 'auto',
                            }}
                          >
                            <div className="row g-0">
                              <div className="col-md-3">
                                <Link href={`/shop/${v.p_id}`}>
                                  <img
                                    src={`/${
                                      v.product_photos.match(/[^,]+\.jpg/)[0]
                                    }`}
                                    className="img-fluid"
                                    alt="..."
                                    style={{
                                      width: '100%',
                                      height: '330px',
                                      objectFit: 'cover',
                                    }}
                                  />
                                </Link>
                              </div>
                              <div className="col-md-9 ps-3 d-flex align-items-center">
                                <div className="card-body">
                                  <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                                    <strong>
                                      訂單編號：
                                      {Math.floor(new Date(v.order_date))}
                                      {v.id}
                                    </strong>
                                  </h5>
                                  <p className="card-title card-text d-flex justify-content-between align-items-center">
                                    <Link
                                      href={`/shop/${v.p_id}`}
                                      style={{ textDecoration: 'none' }}
                                    >
                                      <strong>{v.product_name}</strong>
                                    </Link>{' '}
                                    <span>
                                      <strong>
                                        ${v.total_price?.toLocaleString()}
                                      </strong>
                                    </span>
                                  </p>
                                  <br />
                                  <Link
                                    className={Styles.sellerLink}
                                    href={`/member/store/${v.seller_id}`}
                                    style={{
                                      textDecoration: 'none',
                                      color: 'black',
                                    }}
                                  >
                                    <p className="card-text pb-2">
                                      <strong>
                                        賣家：{v.seller_name} (點我進入賣家介紹)
                                      </strong>
                                    </p>
                                  </Link>
                                  <p className="card-text pb-2">
                                    <strong>
                                      <span>
                                        {v.class === 2
                                          ? '議價訂單'
                                          : '一般訂單'}
                                      </span>
                                      /
                                      <span>
                                        {v.complete_status === 2
                                          ? '訂單已完成'
                                          : '進行中'}
                                      </span>
                                    </strong>
                                  </p>
                                  <div className="row g-3 align-items-center justify-content-end">
                                    <div className="col-auto">
                                      {/* <Button
                                        href={`/address-book/edit/${v.sid}`}
                                      >
                                        Link
                                      </Button> */}
                                    </div>
                                    <div className="col-auto">
                                      <Button
                                        href={`/buyer/evaluation/${v.id}`}
                                        variant="outline-warning"
                                        className={`${Styles.btn}`}
                                      >
                                        評論
                                      </Button>
                                    </div>
                                  </div>

                                  <div className="iconbar">
                                    <i className="bi bi-suit-heart"></i>
                                    <i className="bi bi-trash3"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                </>
              )}
              <hr />
            </div>
            <div className="col-sm-4">
              <h4 className="mb-3">
                <strong>小碳點</strong>
              </h4>

              <p className="card-text d-flex justify-content-between align-items-center">
                目前點數 <span></span>
              </p>
              <hr />
              {/* <p className="card-text d-flex justify-content-between align-items-center">
            預估運費與手續費 <span>$300.00</span>
          </p> */}
              <hr />
              {/* <p className="card-text d-flex justify-content-between align-items-center">
            總計 <span>$4,300.00</span>
          </p> */}
              <hr />
              {/* <button className="btn btn-primary w-100 mb-3">會員結帳</button> */}
              {/* <button className="btn btn-primary w-100 mb-3">訪客結帳</button> */}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
