import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { PROD_LIST } from '@/configs/config-r'
// page
import DefaultLayout from '@/components/common/default-layout'
import LoginPage from '@/components/member/login-modal'
// style-----
import style from '@/pages/shop/cart.module.css'
// react bootstrap
// react icons-----
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useAuth } from '@/context/auth-context'

export default function Barter() {
  // Router-----
  const router = useRouter()

  // member
  const { checkAuth, auth } = useAuth()
  const [showLogin, setShowLogin] = useState(false)
  // ---Modal---
  // 關閉登入視窗
  const handleLoginClose = () => {
    if (!isLoading) {
      setShowLogin(false)
    }
  }
  // 點擊登入按鈕
  const handleLoginClick = () => {
    if (!auth.isAuth) {
      // 如果用戶未登入，則顯示登入表單
      setShowLogin(true)
    }
  }
  // 登入表單提交
  const handleLoginSubmit = async () => {
    // 開始檢查認證狀態
    setIsLoading(true)
    await checkAuth()
    // 結束檢查認證狀態
    setIsLoading(false)
    if (auth.isAuth) {
      // 如果已經登入，則關閉模態框
      setShowLogin(false)
    }
  }

  // 如果已經登入，則關閉模態框
  useEffect(() => {
    if (auth.isAuth) {
      setShowLogin(false)
      checkAuth()
    }
  }, [auth.isAuth])

  // Barter
  const [data, setData] = useState({
    barter: [],
  })

  useEffect(() => {
    const member_id = auth.userData.id
    fetch(`${PROD_LIST}${location.search}?member_id=${member_id}`)
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [router.query, router.isReady, auth.isAuth, auth.userData])

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
      {auth.isAuth ? (
        <>
          <DefaultLayout>
            <Head>
              <title>以物易物清單 | DEAL-2ND HAND SHOP</title>
            </Head>
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
                      <span>會員中心</span>
                    </Link>
                    <span
                      className="breadcrumb-item active"
                      style={{ fontSize: '20px' }}
                    >
                      以物易物清單
                    </span>
                  </nav>
                </div>
              </div>
            </div>
            {/* Breadcrumb End */}
            {/* Barter Start */}
            <div className="container-fluid mt-3 px-5">
              <div className="row px-xl-5">
                {data.barter.map((v, i) => {
                  // 提出邀請 : m2-m1
                  if (v.m2_id == auth.userData.id) {
                    return (
                      <>
                        <div
                          key={i}
                          className="col-lg-12 table-responsive mb-5"
                        >
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <strong>
                                    您提出的以物易物邀請：
                                    {v.status_approve == 1
                                      ? '未核准'
                                      : '已核准'}
                                  </strong>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body text-center">
                                  <table className="table table-light table-borderless table-hover">
                                    <thead className="text-center table-dark">
                                      <tr
                                        className="fw-5 text-nowrap"
                                        style={{ fontSize: '20px' }}
                                      >
                                        <th>您的商品</th>
                                        <th>商品名稱</th>
                                        <th className="text-nowrap">
                                          可獲得小碳點
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="align-middle text-center">
                                      <tr>
                                        <td>
                                          <Link href={`/shop/${v.p2_id}`}>
                                            <img
                                              src={
                                                v.photo2.includes(',')
                                                  ? `/${v.photo2.split(',')[0]}`
                                                  : `/${v.photo2}`
                                              }
                                              alt=""
                                              width={150}
                                              height={150}
                                              style={{ objectFit: 'cover' }}
                                            />
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle text-wrap"
                                          style={{
                                            fontSize: '20px',
                                            width: '500px',
                                          }}
                                        >
                                          <Link
                                            href={`/shop/${v.p2_id}`}
                                            style={{
                                              textDecoration: 'none',
                                              color: 'black',
                                            }}
                                          >
                                            {v.p2_name}
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle"
                                          style={{ fontSize: '20px' }}
                                        >
                                          {v.cp2}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table className="table table-light table-borderless table-hover">
                                    <thead className="text-center table-dark">
                                      <tr
                                        className="fw-5 text-nowrap"
                                        style={{ fontSize: '20px' }}
                                      >
                                        <th>{v.m1_nickname}的商品</th>
                                        <th>商品名稱</th>
                                        <th className="text-nowrap">
                                          可獲得小碳點
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="align-middle text-center">
                                      <tr>
                                        <td>
                                          <Link href={`/shop/${v.p1_id}`}>
                                            <img
                                              src={
                                                v.photo1.includes(',')
                                                  ? `/${v.photo1.split(',')[0]}`
                                                  : `/${v.photo1}`
                                              }
                                              alt=""
                                              width={150}
                                              height={150}
                                              style={{ objectFit: 'cover' }}
                                            />
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle text-wrap"
                                          style={{
                                            fontSize: '20px',
                                            width: '500px',
                                          }}
                                        >
                                          <Link
                                            href={`/shop/${v.p1_id}`}
                                            style={{
                                              textDecoration: 'none',
                                              color: 'black',
                                            }}
                                          >
                                            {v.p1_name}
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle"
                                          style={{ fontSize: '20px' }}
                                        >
                                          {v.cp1}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                })}
                {data.barter.map((v2, i2) => {
                  // 收到邀請 : m1-m2
                  if (auth.userData.id == v2.m1_id) {
                    return (
                      <>
                        <div className="col-lg-12 table-responsive mb-5">
                          <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="headingOne">
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  <strong>
                                    您收到的以物易物邀請：
                                    {v2.status_reply == 1 ? '待回覆' : '已回覆'}
                                  </strong>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body text-center">
                                  <table className="table table-light table-borderless table-hover">
                                    <thead className="text-center table-dark">
                                      <tr
                                        className="fw-5 text-nowrap"
                                        style={{ fontSize: '20px' }}
                                      >
                                        <th>您的商品</th>
                                        <th>商品名稱</th>
                                        <th className="text-nowrap">
                                          可獲得小碳點
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="align-middle text-center">
                                      <tr>
                                        <td>
                                          <Link href={`/shop/${v2.p1_id}`}>
                                            <img
                                              src={
                                                v2.photo1.includes(',')
                                                  ? `/${
                                                      v2.photo1.split(',')[0]
                                                    }`
                                                  : `/${v2.photo1}`
                                              }
                                              alt=""
                                              width={150}
                                              height={150}
                                              style={{ objectFit: 'cover' }}
                                            />
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle text-wrap"
                                          style={{
                                            fontSize: '20px',
                                            width: '500px',
                                          }}
                                        >
                                          <Link
                                            href={`/shop/${v2.p1_id}`}
                                            style={{
                                              textDecoration: 'none',
                                              color: 'black',
                                            }}
                                          >
                                            {v2.p1_name}
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle"
                                          style={{ fontSize: '20px' }}
                                        >
                                          {v2.cp1}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <table className="table table-light table-borderless table-hover">
                                    <thead className="text-center table-dark">
                                      <tr
                                        className="fw-5 text-nowrap"
                                        style={{ fontSize: '20px' }}
                                      >
                                        <th>{v2.m2_nickname}的商品</th>
                                        <th>商品名稱</th>
                                        <th className="text-nowrap">
                                          可獲得小碳點
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody className="align-middle text-center">
                                      <tr>
                                        <td>
                                          <Link href={`/shop/${v2.p2_id}`}>
                                            <img
                                              src={
                                                v2.photo2.includes(',')
                                                  ? `/${
                                                      v2.photo2.split(',')[0]
                                                    }`
                                                  : `/${v2.photo2}`
                                              }
                                              alt=""
                                              width={150}
                                              height={150}
                                              style={{ objectFit: 'cover' }}
                                            />
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle text-wrap"
                                          style={{
                                            fontSize: '20px',
                                            width: '500px',
                                          }}
                                        >
                                          <Link
                                            href={`/shop/${v2.p2_id}`}
                                            style={{
                                              textDecoration: 'none',
                                              color: 'black',
                                            }}
                                          >
                                            {v2.p2_name}
                                          </Link>
                                        </td>
                                        <td
                                          className="align-middle"
                                          style={{ fontSize: '20px' }}
                                        >
                                          {v2.cp2}
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <button
                                    className={`btn me-4 ${style.btnHover}`}
                                    style={{
                                      backgroundColor: '#e96d3f',
                                      color: 'white',
                                    }}
                                  >
                                    同意
                                  </button>
                                  <button
                                    className={`btn ${style.btnHover}`}
                                    style={{
                                      backgroundColor: '#8e2626',
                                      color: 'white',
                                    }}
                                  >
                                    婉拒
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  }
                })}
              </div>
            </div>
            {/* Barter End */}
          </DefaultLayout>
        </>
      ) : (
        <>
          <DefaultLayout>
            <Head>
              <title>以物易物清單 | DEAL-2ND HAND SHOP</title>
            </Head>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <Link
                  href="#login"
                  style={{ textDecoration: 'none' }}
                  onClick={handleLoginClick}
                >
                  <h2 style={{ color: '#8e2626' }}>
                    <strong>
                      請先登入<small>(點擊我登入)</small>
                    </strong>
                  </h2>
                </Link>
                <img src="/logo9.png" alt="" />
              </div>
            </div>
          </DefaultLayout>
          {/* Login Modal start */}
          <LoginPage
            show={showLogin}
            onHide={handleLoginClose}
            onSubmit={handleLoginSubmit}
          />
          {/* Login Modal end */}
        </>
      )}
    </>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
