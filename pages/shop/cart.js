import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// page
import Footer from '@/components/common/footer/footer'
// style-----
import style from './cart.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// react bootstrap
// react icons-----
import {
  FaPersonBreastfeeding,
  FaSeedling,
  FaMinus,
  FaPlus,
  FaTrashCan,
  FaAnglesUp,
} from 'react-icons/fa6'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useCart } from '@/hooks/use-cart'

export default function Cart() {
  // import functions from cart hook
  const {
    items,
    incrementItemById,
    decrementItemById,
    removeItemById,
    totalPrice,
    totalCP,
  } = useCart()

  // set sweetAlert2
  const notifyAndRemove = (productName, id) => {
    MySwal.fire({
      title: '請確定是否刪除此項商品？',
      text: '請選擇下方功能鍵，確認是否刪除',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#8e2626',
      cancelButtonText: '取消',
      confirmButtonText: '是的，請刪除！',
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: '您的通知：',
          text: productName + ' 已從購物車中被刪除',
          icon: 'success',
        })
        removeItemById(id)
      }
    })
  }

  // Loading bar-----
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 300)
    }
  }, [isLoading])

  const display = (
    <>
      <Head>
        <title>購物車 | DEAL-2ND HAND SHOP</title>
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col bg-light container-fluid d-flex justify-content-center">
            <h5 className="align-middle mt-2 py-2">
              <FaSeedling style={{ color: '#51c332' }} />
              <Link
                className="colorSlogan text-decoration-none"
                href="/activity"
                style={{ color: '#8e2626' }}
              >
                <strong style={{ fontSize: '24px' }}>
                  {' '}
                  \ 歡慶DEAL線上開通試營運 企業親子二手市集活動 /{' '}
                </strong>
              </Link>
              <FaPersonBreastfeeding style={{ color: '#2055b1' }} />
            </h5>
          </div>
        </div>
        {/* Breadcrumb Start */}
        <div className={`container-fluid ${style.breadcrumbArea}`}>
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb">
                <Link
                  className="breadcrumb-item text-dark"
                  href="/"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ fontSize: '20px' }}>首頁</span>
                </Link>
                <Link
                  className="breadcrumb-item text-dark"
                  href="/shop"
                  style={{ textDecoration: 'none', fontSize: '20px' }}
                >
                  <span>探索商品</span>
                </Link>
                <span
                  className="breadcrumb-item active"
                  style={{ fontSize: '20px' }}
                >
                  購物車
                </span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Cart Start */}
        <div className="container-fluid mt-3">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover">
                <thead className="text-center table-dark">
                  <tr className="fw-5 text-nowrap" style={{ fontSize: '20px' }}>
                    <th>商品</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>金額</th>
                    <th className="text-wrap">可獲得小碳點</th>
                    <th>移除</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-center">
                  {items.map((v, i) => {
                    return (
                      <>
                        <tr key={v.id}>
                          <td>
                            <Link href={`/shop/${v.id}`}>
                              <img
                                src={
                                  v.product_photos.includes(',')
                                    ? `/${v.product_photos.split(',')[0]}`
                                    : `/${v.product_photos}`
                                }
                                alt=""
                                width={150}
                                height={150}
                                style={{ objectFit: 'cover' }}
                              />
                            </Link>
                          </td>
                          <td
                            className="align-middle text-wrap text-truncate"
                            style={{ fontSize: '20px', maxWidth: '120px' }}
                          >
                            <Link
                              href={`/shop/${v.id}`}
                              style={{ textDecoration: 'none', color: 'black' }}
                            >
                              {v.product_name}
                            </Link>
                          </td>
                          <td
                            className="align-middle"
                            style={{ fontSize: '20px' }}
                          >
                            ${v.product_price}
                          </td>
                          <td className="align-middle">
                            <div
                              className="input-group quantity mx-auto"
                              style={{ width: '100px' }}
                            >
                              <div className="input-group-btn">
                                <button
                                  className={`btn btn-sm btn-minus ${style.btnHover}`}
                                  style={{
                                    backgroundColor: '#8e2626',
                                    color: 'white',
                                  }}
                                  onClick={() => {
                                    const nextQty = v.product_qty - 1
                                    if (nextQty === 0) {
                                      notifyAndRemove(v.product_name, v.id)
                                    } else {
                                      decrementItemById(v.id)
                                    }
                                  }}
                                >
                                  <FaMinus className="mb-1" />
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control form-control-sm border-0 text-center"
                                value={v.product_qty}
                                defaultValue="1"
                              />
                              <div className="input-group-btn">
                                <button
                                  className={`btn btn-sm btn-plus ${style.btnHover}`}
                                  style={{
                                    backgroundColor: '#8e2626',
                                    color: 'white',
                                  }}
                                  onClick={() => {
                                    incrementItemById(v.id)
                                  }}
                                >
                                  <FaPlus className="mb-1" />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td
                            className="align-middle"
                            style={{ fontSize: '20px' }}
                          >
                            ${v.product_qty * v.product_price}
                          </td>
                          <td style={{ fontSize: '20px' }}>{v.mc * 0.01}</td>
                          <td className="align-middle">
                            <button
                              className="btn btn-sm"
                              onClick={() => {
                                notifyAndRemove(v.product_name, v.id)
                              }}
                            >
                              <FaTrashCan
                                className={`mb-1 ${style.trashBtn}`}
                                style={{ fontSize: '20px', color: '#8e2626' }}
                              />
                            </button>
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <div className="d-flex mb-3 justify-content-center">
                <h3 className="mb-2" style={{ color: '#8e2626' }}>
                  <strong>– 購物車詳情 –</strong>
                </h3>
              </div>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom px-4 pt-4 pb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="font-weight-medium">運費</h5>
                    <h5 className="font-weight-medium">$60</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="font-weight-medium">總金額</h5>
                    <h5 className="font-weight-medium">${totalPrice}</h5>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="font-weight-medium">總小碳點</h5>
                    <h5 className="font-weight-medium">{totalCP}</h5>
                  </div>
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>
                      <strong>總付款金額</strong>
                    </h5>
                    <h5>
                      <strong>${totalPrice + 60}</strong>
                    </h5>
                  </div>
                  <button
                    className={`btn btn-block font-weight-bold d-flex ${style.checkBtn}`}
                    style={{
                      backgroundColor: '#e96d3f',
                      color: 'white',
                    }}
                  >
                    <strong style={{ fontSize: '20px' }}>去結帳</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart End */}
        {/* Back to Top */}
        <Link href="#top" className="btn">
          <FaAnglesUp
            className={style.backToTop}
            style={{ fontSize: '40px' }}
          />
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
