import React from 'react'
import Image from 'next/image'

import Button from 'react-bootstrap/Button'
import { FaAlignJustify } from 'react-icons/fa'
import { BUYER_ORDER } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import OrderListNav from '@/components/orderList/order-list-nav'
import { BUYER_ORDER_FIN } from '@/configs/configs-buyer'
import DefaultLayout from '@/components/common/default-layout'
import Styles from '@/styles/buyer.module.css'

export default function OrderList() {
  const router = useRouter()
  // const { auth, getAuthHeader } = useAuth()
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
  //   const fetchOrderData = async () => {
  //     try {
  //       const response = await fetch(`${BUYER_ORDER}${location.search}`, {
  //         headers: {
  //           ...auth(),
  //         },
  //       })
  //       const dataObj = await response.json()
  //       setData(dataObj)
  //     } catch (error) {
  //       console.error('Error fetching order data:', error)
  //     }
  //   }

  //   fetchOrderData()
  // }, [])

  // ----修改
  const [formData, setFormData] = useState({
    id: 0, // 資料的 primary key
    complete_status: '',
  })

  const onFinish = async (e) => {
    const newFormData = {
      ...formData,
      complete_status: 2,
      id: e,
    }
    setFormData(newFormData)

    const r = await fetch(`${BUYER_ORDER_FIN}/${e}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormData),
    })

    const result = await r.json()

    console.log(result)
    if (result.success) {
      alert('資料修改成功')
      console.log(document.referrer)
      router.back()
    } else {
      alert('資料沒有修改')
    }
  }

  return (
    <>
      <DefaultLayout pageName="od-unfi">
        <div className={`${Styles.orderList}`}>
          <OrderListNav pageName="od-unfi" />
          <div className="row mt-5 mx-5">
            <div className="col-sm-8 cart-area">
              {!auth ? (
                alert('請先登入')
              ) : !data.rows ? (
                <div>...loading</div>
              ) : (
                <>
                  <h4 className="mb-3">等待收貨的訂單</h4>
                  {data.rows
                    .filter((v) => {
                      return v.complete_status == 1
                    })
                    .map((v, i) => {
                      return (
                        <div key={i}>
                          <div className="card mb-3 border-0 cart-card">
                            <div className="row g-0">
                              <div className="col-md-3">
                                <img
                                  src={
                                    v.product_photos &&
                                    v.product_photos.match(/[^,]+\.jpg/)
                                      ? `/${
                                          v.product_photos.match(
                                            /[^,]+\.jpg/
                                          )[0]
                                        }`
                                      : ''
                                  }
                                  className="img-fluid rounded-start"
                                  alt="..."
                                />
                              </div>
                              <div className="col-md-9">
                                <div className="card-body">
                                  <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                                    {v.product_name}
                                    <span>${v.total_price}</span>
                                  </h5>
                                  <p className="card-text">{v.seller_name}</p>
                                  <p className="card-text">
                                    <span>
                                      {v.class === 2 ? '議價訂單' : '一般訂單'}
                                    </span>
                                    /
                                    <span>
                                      {v.complete_status === 2
                                        ? '已完成'
                                        : '進行中'}
                                    </span>
                                  </p>
                                  <p className="card-text">
                                    {' '}
                                    <span style={{ color: '#EBC1EB' }}>
                                      等待收貨...
                                    </span>
                                  </p>
                                  <div className="row g-3 align-items-center justify-content-end">
                                    <div className="col-auto">
                                      {/* <Button
                                        href={`/buyer/order-detail/${v.id}`}
                                        variant="outline-warning"
                                      >
                                        訂單明細
                                      </Button> */}
                                    </div>
                                    <div className="col-auto  w-auto ">
                                      <Button
                                        onClick={() => onFinish(v.id)}
                                        variant="outline-danger"
                                      >
                                        訂單完成
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
              <div className="card mb-3 border-0 cart-card">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="./images/cart-1.jpeg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                        Nike Air Force 1 PLT.AF.ORM <span>$4,000.00</span>
                      </h5>
                      <p className="card-text">
                        Pale Ivory/Light Orewood Brown/白/Summit White
                      </p>

                      <div className="row g-3 align-items-center justify-content-end">
                        <div className="col-auto">
                          <Button href="#" variant="outline-warning">
                            Link
                          </Button>
                        </div>
                        <div className="col-auto  w-auto ">
                          <Button href="#" variant="outline-warning">
                            Link
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
              <hr />
            </div>
            <div className="col-sm-4">
              <h4 className="mb-3">小炭點</h4>

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
