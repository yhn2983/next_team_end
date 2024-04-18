import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {
  PROD_LIST,
  BARTER_UPDATE_PUT,
  BARTER_UPDATE_PUT2,
  ORDER_BARTER_ADD,
} from '@/configs/config-r'
// page
import DefaultLayout from '@/components/common/default-layout'
import LoginPage from '@/components/member/login-modal'
// style-----
import style from '@/pages/shop/cart.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const AgreeSwal = withReactContent(Swal)
// react bootstrap
// react icons-----
import { TbExclamationMark } from 'react-icons/tb'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useAuth } from '@/context/auth-context'

export default function BarterInvite() {
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
  }, [router.query, auth.isAuth, auth.userData])

  const notifyAgree = (m2_nickname) => {
    AgreeSwal.fire({
      title: `您已同意${m2_nickname}申請的以物易物訂單`,
      text: '請到訂單列表查看',
      icon: 'success',
      confirmButtonText: '關閉',
      confirmButtonColor: '#3085d6',
    })
  }

  const notifyDecline = (m2_nickname) => {
    AgreeSwal.fire({
      title: `您已婉拒${m2_nickname}申請的以物易物訂單`,
      icon: 'info',
      confirmButtonText: '關閉',
      confirmButtonColor: '#3085d6',
    })
  }

  // barter
  const agreeBtnClick = async (newFormData) => {
    try {
      const r = await fetch(`${BARTER_UPDATE_PUT}/${newFormData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      })
      if (!r.ok) {
        throw new Error('Error')
      }
      const result = await r.json()
      console.log(result)
      if (result.success) {
        await addBarterOrder(newFormData)
        notifyAgree(newFormData.m2_nickname)
        router.push('/member/barter')
      } else {
        console.log('資料未修改')
      }
    } catch (error) {
      console.error('資料有誤：', error)
    }
  }

  const addBarterOrder = async (newFormData) => {
    try {
      const r = await fetch(ORDER_BARTER_ADD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFormData),
      })

      if (!r.ok) {
        throw new Error('Error')
      }
      const result = await r.json()
      console.log(result)
      if (result.success) {
        console.log('訂單已新增')
      } else {
        console.log('訂單未新增')
      }
    } catch (error) {
      console.error('發生錯誤：', error)
    }
  }

  const declineBtnClick = async (newFormData) => {
    const r = await fetch(`${BARTER_UPDATE_PUT2}/${newFormData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormData),
    })
    console.log(newFormData)
    const result = await r.json()
    console.log(result)
    if (result.success) {
      notifyDecline(newFormData.m2_nickname)
    } else {
      console.log('資料沒有修改')
    }
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
      {auth.isAuth ? (
        <>
          <DefaultLayout>
            <Head>
              <title>以物易物申請&邀請清單 | DEAL-2ND HAND SHOP</title>
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
                      href="/member"
                      style={{ textDecoration: 'none', fontSize: '20px' }}
                    >
                      <span>會員中心</span>
                    </Link>
                    <span
                      className="breadcrumb-item active"
                      style={{ fontSize: '20px' }}
                    >
                      以物易物申請&邀請清單
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
                  const statusText =
                    v.status_approve == 1 ? (
                      <span>
                        <TbExclamationMark
                          className="mb-1"
                          style={{ color: 'red', fontSize: '20px' }}
                        />
                        {v.created_at}
                        {v.id} 您提出的以物易物邀請：未審核
                      </span>
                    ) : (
                      <span>
                        {v.created_at}
                        {v.id} 您提出的以物易物邀請：已審核
                      </span>
                    )
                  const result = () => {
                    if (v.approve == 1) {
                      return (
                        <h4 className="mb-3" style={{ color: '#e96d3f' }}>
                          <strong>對方婉拒您的申請！</strong>
                        </h4>
                      )
                    } else if (v.approve == 2) {
                      return (
                        <>
                          <h4 className="" style={{ color: '#8e2626' }}>
                            <strong>
                              對方已同意您的申請！您的申請已轉至
                              <Link href={`/member/barter/${v.id}`}>
                                訂單詳情頁面
                              </Link>
                            </strong>
                          </h4>
                          <h5>
                            <strong>
                              請至訂單詳情頁面新增您的運送店到店資訊
                            </strong>
                          </h5>
                        </>
                      )
                    }
                  }
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
                                  <strong>{statusText}</strong>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body text-center">
                                  {result()}
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
                  const statusText2 =
                    v2.status_reply == 1 ? (
                      <span>
                        <TbExclamationMark
                          className="mb-1"
                          style={{ color: 'red', fontSize: '20px' }}
                        />
                        {v2.created_at}
                        {v2.id} 您收到的以物易物邀請：待回覆
                      </span>
                    ) : (
                      <span>
                        {v2.created_at}
                        {v2.id} 您收到的以物易物邀請：已回覆
                      </span>
                    )
                  const result = () => {
                    if (v2.approve == 1) {
                      return (
                        <h4 className="mb-3" style={{ color: '#e96d3f' }}>
                          <strong>您已婉拒對方的申請！</strong>
                        </h4>
                      )
                    } else if (v2.approve == 2) {
                      return (
                        <>
                          <h4 style={{ color: '#8e2626' }}>
                            <strong>
                              您已同意對方的申請！以物易物申請已轉至
                              <Link href={`/member/barter/${v2.id}`}>
                                訂單詳情頁面
                              </Link>
                            </strong>
                          </h4>
                          <h5>
                            <strong>
                              請至訂單詳情頁面新增您的運送店到店資訊
                            </strong>
                          </h5>
                        </>
                      )
                    }
                  }
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
                                  <strong>{statusText2}</strong>
                                </button>
                              </h2>
                              <div
                                id="collapseOne"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample"
                              >
                                <div className="accordion-body text-center">
                                  {result()}
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
                                  {!v2.approve ? (
                                    <>
                                      <button
                                        className={`btn me-4 ${style.btnHover}`}
                                        style={{
                                          backgroundColor: '#e96d3f',
                                          color: 'white',
                                        }}
                                        onClick={() => {
                                          const newFormData = {
                                            id: v2.id,
                                            p1_id: v2.p1_id,
                                            p2_id: v2.p2_id,
                                            m1_id: v2.m1_id,
                                            m2_id: v2.m2_id,
                                            m1_nickname: v2.m1_nickname,
                                            m2_nickname: v2.m2_nickname,
                                            cp1: v2.cp1,
                                            cp2: v2.cp2,
                                            status_reply: 2,
                                            status_approve: 2,
                                            approve: 2,
                                          }
                                          agreeBtnClick(newFormData)
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
                                        onClick={() => {
                                          const newFormData = {
                                            id: v2.id,
                                            m2_nickname: v2.m2_nickname,
                                            status_reply: 2,
                                            status_approve: 2,
                                            approve: 1,
                                          }
                                          declineBtnClick(newFormData)
                                        }}
                                      >
                                        婉拒
                                      </button>
                                    </>
                                  ) : (
                                    <></>
                                  )}
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
              <title>以物易物申請&邀請清單 | DEAL-2ND HAND SHOP</title>
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
