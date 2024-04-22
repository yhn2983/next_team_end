import React from 'react'
import Image from 'next/image'
// import Styles from '@/styles/orderList.module.css'
import Button from 'react-bootstrap/Button'
import { FaAlignJustify } from 'react-icons/fa'
import { BUYER_ORDER } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import OrderListNav from '@/components/orderList/order-list-nav'
import DefaultLayout from '@/components/common/default-layout'
import Styles from '@/styles/buyer.module.css'

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
    const fetchOrderData = async () => {
      try {
        const params = new URLSearchParams({ id: auth.userData.id })
        const response = await fetch(`${BUYER_ORDER}?${params}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        const dataObj = await response.json()
        setData(dataObj)
      } catch (error) {
        console.error('Error fetching order data:', error)
      }
    }

    fetchOrderData()
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
  return (
    <>
      <DefaultLayout pageName="od">
        <div className={`${Styles.orderList}`}>
          <OrderListNav pageName="od" />
          <div className="row mt-5 mx-5">
            <div className="col-sm-8 cart-area">
              {!data.rows ? (
                <div>...loading</div>
              ) : (
                <>
                  <h4 className="mb-3"> 我的所有購買訂單</h4>
                  {data.rows.map((v) => {
                    return (
                      <>
                        <div className="card mb-3 border-0 cart-card">
                          <div className="row g-0">
                            <div className="col-md-3">
                              <img
                                src={`/${
                                  v.product_photos.match(/[^,]+\.jpg/)[0]
                                }`}
                                className="img-fluid rounded-start"
                                alt="..."
                              />
                            </div>
                            <div className="col-md-9">
                              <div className="card-body">
                                <h5 className="card-title card-text d-flex justify-content-between align-items-center">
                                  {v.product_name}
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
                                  /
                                  <span>
                                    {v.shipment_status === 2
                                      ? '已寄出'
                                      : '未寄出'}
                                  </span>
                                </p>
                                <p className="card-text">
                                  $<span>{v.total_price}</span>
                                </p>
                                <div
                                  className={`row g-3 align-items-center justify-content-end ${Styles.orderList}`}
                                >
                                  <div className="col-auto  w-auto ">
                                    {Math.floor(
                                      (new Date() - new Date(v.order_date)) /
                                        (1000 * 60 * 60 * 24)
                                    ) === 0
                                      ? '今天'
                                      : Math.floor(
                                          (new Date() -
                                            new Date(v.order_date)) /
                                            (1000 * 60 * 60 * 24)
                                        ) + '天前'}
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
                      </>
                    )
                  })}
                </>
              )}
              {/* <div className="card mb-3 border-0 cart-card">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img
                      src="/cart-1.jpeg"
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                </div>
              </div> */}
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
