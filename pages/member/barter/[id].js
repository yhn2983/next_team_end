import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import {
  ORDER_BARTER_LIST,
  ORDER_BARTER_711_PUT,
  ORDER_BARTER_711_PUT2,
} from '@/configs/config-r'
// page
import Footer from '@/components/common/footer/footer'
import DefaultLayout from '@/components/common/default-layout'
import LoginPage from '@/components/member/login-modal'
// style-----
import style from '@/pages/shop/cart.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// react bootstrap
// react icons-----
import { FaPersonBreastfeeding, FaSeedling, FaAnglesUp } from 'react-icons/fa6'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useAuth } from '@/context/auth-context'
import { useShip711StoreOpener } from '@/hooks/use-ship-711-store'

export default function BarterCheckout() {
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

  // barter
  const [barter, setBarter] = useState({
    data: {
      id: 0,
      m1_id: 0,
      m2_id: 0,
      shipment_fee_m1: 0,
      shipment_fee_m2: 0,
      amount_m1: 0,
      amount_m2: 0,
      address711_m1: '',
      address711_m2: '',
      name711_m1: '',
      name711_m2: '',
      p1_id: 0,
      p2_id: 0,
      qty_m1: 0,
      qty_m2: 0,
      cp1: 0,
      cp2: 0,
      p1_name: '',
      p2_name: '',
      p1_photos: '',
      p2_photos: '',
      m1_nickname: '',
      m2_nickname: '',
      m1_name: '',
      m2_name: '',
      m1_mobile: '',
      m2_mobile: '',
    },
  })

  useEffect(() => {
    fetchBarterData()
  }, [router.query.id])

  const fetchBarterData = () => {
    const { id } = router.query
    if (id) {
      fetch(`${ORDER_BARTER_LIST}/${id}`)
        .then((r) => r.json())
        .then((dataObj) => {
          setBarter(dataObj)
          console.log(dataObj)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }

  // 7-11
  const { store711, openWindow, closeWindow } = useShip711StoreOpener(
    'http://localhost:3001/shipment/711',
    { autoCloseMins: 3 } // x分鐘沒完成選擇會自動關閉，預設5分鐘。
  )

  const allSend = barter.data.name711_m1 && barter.data.name711_m2
  const onlyM2Send = !barter.data.name711_m1 && barter.data.name711_m2
  const onlyM1Send = barter.data.name711_m1 && !barter.data.name711_m2

  const notifySuccess = () => {
    MySwal.fire({
      title: `您已添加運送7-11門市資訊`,
      icon: 'success',
      confirmButtonText: '關閉',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload()
      }
    })
  }

  const notifyNoAdd = () => {
    MySwal.fire({
      title: `您未選擇運送7-11門市資訊`,
      icon: 'error',
      confirmButtonText: '關閉',
      confirmButtonColor: '#3085d6',
    })
  }

  const save711DataClickA = async (newFormData) => {
    try {
      const r = await fetch(`${ORDER_BARTER_711_PUT}/${newFormData.id}`, {
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
        notifySuccess()
      } else {
        console.log('資料沒有改變')
      }
    } catch (e) {
      console.error('發生錯誤：', e)
    }
  }

  const save711DataClickB = async (newFormData) => {
    try {
      const r = await fetch(`${ORDER_BARTER_711_PUT2}/${newFormData.id}`, {
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
        notifySuccess()
      } else {
        console.log('資料沒有改變')
      }
    } catch (e) {
      console.error('發生錯誤：', e)
    }
  }

  // ---BackToTop---
  const [isBtnVisible, setIsBtnVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY >= 300) {
        setIsBtnVisible(true)
      } else {
        setIsBtnVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
        <title>以物易物訂單詳情 | DEAL-2ND HAND SHOP</title>
      </Head>
      {auth.isAuth ? (
        <>
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
                      href="/member"
                      style={{ textDecoration: 'none', fontSize: '20px' }}
                    >
                      <span>會員中心</span>
                    </Link>
                    <span
                      className="breadcrumb-item active"
                      style={{ fontSize: '20px' }}
                    >
                      以物易物訂單詳情
                    </span>
                  </nav>
                </div>
              </div>
            </div>
            {/* Breadcrumb End */}
            {/* barter order checkout Start */}
            <div className="container-fluid mt-3">
              <div className="row px-xl-5">
                {barter.data.m2_id == auth.userData.id ? (
                  <>
                    <div className="col-lg-8 table-responsive mb-5">
                      <table className="table table-light table-borderless table-hover mb-5">
                        <thead className="text-center table-dark">
                          <tr
                            className="fw-5 text-nowrap"
                            style={{ fontSize: '20px' }}
                          >
                            <th>您的商品</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th className="text-wrap">可獲得小碳點</th>
                            <th>運費</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/${barter.data.p2_id}`}>
                                <img
                                  src={
                                    barter.data.p2_photos?.includes(',')
                                      ? `/${
                                          barter.data.p2_photos.split(',')[0]
                                        }`
                                      : `/${barter.data.p2_photos}`
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
                              style={{
                                fontSize: '20px',
                                maxWidth: '120px',
                              }}
                            >
                              <Link
                                href={`/shop/${barter.data.p2_id}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              >
                                {barter.data.p2_name}
                              </Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.qty_m2}
                            </td>

                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.cp2}
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.shipment_fee_m2}
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
                            <th>{barter.data.m1_nickname}的商品</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th className="text-wrap">可獲得小碳點</th>
                            <th>運費</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/${barter.data.p1_id}`}>
                                <img
                                  src={
                                    barter.data.p1_photos?.includes(',')
                                      ? `/${
                                          barter.data.p1_photos.split(',')[0]
                                        }`
                                      : `/${barter.data.p1_photos}`
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
                              style={{
                                fontSize: '20px',
                                maxWidth: '120px',
                              }}
                            >
                              <Link
                                href={`/shop/${barter.data.p1_id}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              >
                                {barter.data.p1_name}
                              </Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.qty_m1}
                            </td>

                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.cp2}
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.shipment_fee_m1}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-4">
                      {allSend ? (
                        <>
                          {/* m2/m1已經選好超商時 */}
                          <div className="bg-light p-30 mb-5">
                            <div className="px-4 pt-4 pb-3">
                              <div className="d-flex justify-content-center">
                                <h5 className="font-weight-medium">
                                  <strong>7-11 運送商店選定資訊</strong>
                                </h5>
                              </div>
                              <div className="mt-2 border-bottom ">
                                <p>
                                  <strong>您的選定門市資訊</strong>
                                </p>
                                門市名稱 :{' '}
                                <input
                                  className=" form-control"
                                  type="text"
                                  value={barter.data.name711_m2}
                                  disabled
                                />
                                <br />
                                門市地址 :{' '}
                                <input
                                  className="mb-3 form-control"
                                  type="text"
                                  value={barter.data.address711_m2}
                                  disabled
                                />
                              </div>
                              <div className="mt-3">
                                <p>
                                  <strong>
                                    {barter.data.m1_nickname}選定門市資訊
                                  </strong>
                                </p>
                                收件人 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.m1_name}
                                  disabled
                                />
                                手機號碼 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.m1_mobile}
                                  disabled
                                />
                                門市名稱 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.name711_m1}
                                  disabled
                                />
                                門市地址 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.address711_m1}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* m2選了但m1還沒有選超商時 */}
                          {onlyM2Send ? (
                            <>
                              <div className="bg-light p-30 mb-5">
                                <div className="px-4 pt-4 pb-3">
                                  <div className="d-flex justify-content-center">
                                    <h5 className="font-weight-medium">
                                      <strong>7-11 運送商店選定資訊</strong>
                                    </h5>
                                  </div>
                                  <div className="mt-2 border-bottom ">
                                    <p>
                                      <strong>您的選定門市資訊</strong>
                                    </p>
                                    門市名稱 :{' '}
                                    <input
                                      className=" form-control"
                                      type="text"
                                      value={barter.data.name711_m2}
                                      disabled
                                    />
                                    <br />
                                    門市地址 :{' '}
                                    <input
                                      className="mb-3 form-control"
                                      type="text"
                                      value={barter.data.address711_m2}
                                      disabled
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <p>
                                      <strong>
                                        {barter.data.m1_nickname}選定門市資訊
                                      </strong>
                                    </p>
                                    <p>請待對方填寫門市資訊</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* m1選了但是m2還沒有選 */}
                              {onlyM1Send ? (
                                <>
                                  <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom px-4 pt-4 pb-3">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h5 className="font-weight-medium">
                                          <strong>7-11 運送商店選擇</strong>
                                        </h5>
                                        <button
                                          className={`btn ${style.checkBtn}`}
                                          style={{
                                            backgroundColor: '#16b628',
                                            color: 'white',
                                          }}
                                          onClick={() => {
                                            openWindow()
                                          }}
                                        >
                                          <strong style={{ fontSize: '18px' }}>
                                            選擇門市
                                          </strong>
                                        </button>
                                      </div>
                                      <div className="mb-2">
                                        門市名稱 :{' '}
                                        <input
                                          className=" form-control"
                                          type="text"
                                          value={store711.storename}
                                          disabled
                                        />
                                        <br />
                                        門市地址 :{' '}
                                        <input
                                          className="mb-2 form-control"
                                          type="text"
                                          value={store711.storeaddress}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <div className="p-4 d-flex justify-content-center">
                                      <button
                                        className={`btn btn-block font-weight-bold d-flex ${style.checkBtn}`}
                                        style={{
                                          backgroundColor: '#e96d3f',
                                          color: 'white',
                                        }}
                                        onClick={() => {
                                          const newFormData = {
                                            id: barter.data.id,
                                            address711_m2:
                                              store711.storeaddress,
                                            name711_m2: store711.storename,
                                          }
                                          if (
                                            store711.storename &&
                                            store711.storeaddress
                                          ) {
                                            save711DataClickA(newFormData)
                                          } else {
                                            notifyNoAdd()
                                          }
                                        }}
                                      >
                                        <strong style={{ fontSize: '18px' }}>
                                          確認送出
                                        </strong>
                                      </button>
                                    </div>
                                    <div className="p-4">
                                      <p>
                                        <strong>
                                          {barter.data.m1_nickname}選定門市資訊
                                        </strong>
                                      </p>
                                      收件人 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.m1_name}
                                        disabled
                                      />
                                      手機號碼 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.m1_mobile}
                                        disabled
                                      />
                                      門市名稱 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.name711_m1}
                                        disabled
                                      />
                                      門市地址 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.address711_m1}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* m1和m2都還沒選 */}
                                  <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom px-4 pt-4 pb-3">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h5 className="font-weight-medium">
                                          <strong>7-11 運送商店選擇</strong>
                                        </h5>
                                        <button
                                          className={`btn ${style.checkBtn}`}
                                          style={{
                                            backgroundColor: '#16b628',
                                            color: 'white',
                                          }}
                                          onClick={() => {
                                            openWindow()
                                          }}
                                        >
                                          <strong style={{ fontSize: '18px' }}>
                                            選擇門市
                                          </strong>
                                        </button>
                                      </div>
                                      <div className="mb-2">
                                        門市名稱 :{' '}
                                        <input
                                          className=" form-control"
                                          type="text"
                                          value={store711.storename}
                                          disabled
                                        />
                                        <br />
                                        門市地址 :{' '}
                                        <input
                                          className="mb-2 form-control"
                                          type="text"
                                          value={store711.storeaddress}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <div className="p-4 d-flex justify-content-center">
                                      <button
                                        className={`btn btn-block font-weight-bold d-flex ${style.checkBtn}`}
                                        style={{
                                          backgroundColor: '#e96d3f',
                                          color: 'white',
                                        }}
                                        onClick={() => {
                                          const newFormData = {
                                            id: barter.data.id,
                                            address711_m2:
                                              store711.storeaddress,
                                            name711_m2: store711.storename,
                                          }
                                          if (
                                            store711.storename &&
                                            store711.storeaddress
                                          ) {
                                            save711DataClickA(newFormData)
                                          } else {
                                            notifyNoAdd()
                                          }
                                        }}
                                      >
                                        <strong style={{ fontSize: '18px' }}>
                                          確認送出
                                        </strong>
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
                {barter.data.m1_id == auth.userData.id ? (
                  <>
                    <div className="col-lg-8 table-responsive mb-5">
                      <table className="table table-light table-borderless table-hover">
                        <thead className="text-center table-dark">
                          <tr
                            className="fw-5 text-nowrap"
                            style={{ fontSize: '20px' }}
                          >
                            <th>您的商品</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th className="text-wrap">可獲得小碳點</th>
                            <th>運費</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/${barter.data.p1_id}`}>
                                <img
                                  src={
                                    barter.data.p1_photos?.includes(',')
                                      ? `/${
                                          barter.data.p1_photos.split(',')[0]
                                        }`
                                      : `/${barter.data.p1_photos}`
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
                              style={{
                                fontSize: '20px',
                                maxWidth: '120px',
                              }}
                            >
                              <Link
                                href={`/shop/${barter.data.p1_id}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              >
                                {barter.data.p1_name}
                              </Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.qty_m1}
                            </td>

                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.cp2}
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.shipment_fee_m1}
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
                            <th>{barter.data.m2_nickname}的商品</th>
                            <th>商品名稱</th>
                            <th>數量</th>
                            <th className="text-wrap">可獲得小碳點</th>
                            <th>運費</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/${barter.data.p2_id}`}>
                                <img
                                  src={
                                    barter.data.p2_photos?.includes(',')
                                      ? `/${
                                          barter.data.p2_photos.split(',')[0]
                                        }`
                                      : `/${barter.data.p2_photos}`
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
                              style={{
                                fontSize: '20px',
                                maxWidth: '120px',
                              }}
                            >
                              <Link
                                href={`/shop/${barter.data.p2_id}`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              >
                                {barter.data.p2_name}
                              </Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.qty_m2}
                            </td>

                            <td style={{ fontSize: '20px' }}>
                              {barter.data.cp2}
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            >
                              {barter.data.shipment_fee_m2}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-4">
                      {allSend ? (
                        <>
                          {/* m1/m2已經選好超商時 */}
                          <div className="bg-light p-30 mb-5">
                            <div className="px-4 pt-4 pb-3">
                              <div className="d-flex justify-content-center">
                                <h5 className="font-weight-medium">
                                  <strong>7-11 運送商店選定資訊</strong>
                                </h5>
                              </div>
                              <div className="mt-2 border-bottom ">
                                <p>
                                  <strong>您的選定門市資訊</strong>
                                </p>
                                門市名稱 :{' '}
                                <input
                                  className=" form-control"
                                  type="text"
                                  value={barter.data.name711_m1}
                                  disabled
                                />
                                <br />
                                門市地址 :{' '}
                                <input
                                  className="mb-3 form-control"
                                  type="text"
                                  value={barter.data.address711_m1}
                                  disabled
                                />
                              </div>
                              <div className="mt-3">
                                <p>
                                  <strong>
                                    {barter.data.m2_nickname}選定門市資訊
                                  </strong>
                                </p>
                                收件人 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.m2_name}
                                  disabled
                                />
                                手機號碼 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.m2_mobile}
                                  disabled
                                />
                                門市名稱 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.name711_m2}
                                  disabled
                                />
                                門市地址 :{' '}
                                <input
                                  className="mb-2 form-control"
                                  type="text"
                                  value={barter.data.address711_m2}
                                  disabled
                                />
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* m1選了但m2還沒有選超商時 */}
                          {onlyM1Send ? (
                            <>
                              <div className="bg-light p-30 mb-5">
                                <div className="px-4 pt-4 pb-3">
                                  <div className="d-flex justify-content-center">
                                    <h5 className="font-weight-medium">
                                      <strong>7-11 運送商店選定資訊</strong>
                                    </h5>
                                  </div>
                                  <div className="mt-2 border-bottom ">
                                    <p>
                                      <strong>您的選定門市資訊</strong>
                                    </p>
                                    門市名稱 :{' '}
                                    <input
                                      className=" form-control"
                                      type="text"
                                      value={barter.data.name711_m1}
                                      disabled
                                    />
                                    <br />
                                    門市地址 :{' '}
                                    <input
                                      className="mb-3 form-control"
                                      type="text"
                                      value={barter.data.address711_m1}
                                      disabled
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <p>
                                      <strong>
                                        {barter.data.m2_nickname}選定門市資訊
                                      </strong>
                                    </p>
                                    <p>請待對方填寫門市資訊</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* m2選了但m1還沒有選超商時 */}
                              {onlyM2Send ? (
                                <>
                                  <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom px-4 pt-4 pb-3">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h5 className="font-weight-medium">
                                          <strong>7-11 運送商店選擇</strong>
                                        </h5>
                                        <button
                                          className={`btn ${style.checkBtn}`}
                                          style={{
                                            backgroundColor: '#16b628',
                                            color: 'white',
                                          }}
                                          onClick={() => {
                                            openWindow()
                                          }}
                                        >
                                          <strong style={{ fontSize: '18px' }}>
                                            選擇門市
                                          </strong>
                                        </button>
                                      </div>
                                      <div className="mb-2">
                                        門市名稱 :{' '}
                                        <input
                                          className=" form-control"
                                          type="text"
                                          value={store711.storename}
                                          disabled
                                        />
                                        <br />
                                        門市地址 :{' '}
                                        <input
                                          className="mb-2 form-control"
                                          type="text"
                                          value={store711.storeaddress}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <div className="p-4 d-flex justify-content-center">
                                      <button
                                        className={`btn btn-block font-weight-bold d-flex ${style.checkBtn}`}
                                        style={{
                                          backgroundColor: '#e96d3f',
                                          color: 'white',
                                        }}
                                        onClick={() => {
                                          const newFormData = {
                                            id: barter.data.id,
                                            address711_m1:
                                              store711.storeaddress,
                                            name711_m1: store711.storename,
                                          }
                                          if (
                                            store711.storename &&
                                            store711.storeaddress
                                          ) {
                                            save711DataClickB(newFormData)
                                          } else {
                                            notifyNoAdd()
                                          }
                                        }}
                                      >
                                        <strong style={{ fontSize: '18px' }}>
                                          確認送出
                                        </strong>
                                      </button>
                                    </div>
                                    <div className="p-4">
                                      <p>
                                        <strong>
                                          {barter.data.m2_nickname}選定門市資訊
                                        </strong>
                                      </p>
                                      收件人 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.m2_name}
                                        disabled
                                      />
                                      手機號碼 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.m2_mobile}
                                        disabled
                                      />
                                      門市名稱 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.name711_m2}
                                        disabled
                                      />
                                      門市地址 :{' '}
                                      <input
                                        className="mb-2 form-control"
                                        type="text"
                                        value={barter.data.address711_m2}
                                        disabled
                                      />
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* m1/m2都還沒有選擇 */}
                                  <div className="bg-light p-30 mb-5">
                                    <div className="border-bottom px-4 pt-4 pb-3">
                                      <div className="d-flex justify-content-between mb-2">
                                        <h5 className="font-weight-medium">
                                          <strong>7-11 運送商店選擇</strong>
                                        </h5>
                                        <button
                                          className={`btn ${style.checkBtn}`}
                                          style={{
                                            backgroundColor: '#16b628',
                                            color: 'white',
                                          }}
                                          onClick={() => {
                                            openWindow()
                                          }}
                                        >
                                          <strong style={{ fontSize: '18px' }}>
                                            選擇門市
                                          </strong>
                                        </button>
                                      </div>
                                      <div className="mb-2">
                                        門市名稱 :{' '}
                                        <input
                                          className=" form-control"
                                          type="text"
                                          value={store711.storename}
                                          disabled
                                        />
                                        <br />
                                        門市地址 :{' '}
                                        <input
                                          className="mb-2 form-control"
                                          type="text"
                                          value={store711.storeaddress}
                                          disabled
                                        />
                                      </div>
                                    </div>
                                    <div className="p-4 d-flex justify-content-center">
                                      <button
                                        className={`btn btn-block font-weight-bold d-flex ${style.checkBtn}`}
                                        style={{
                                          backgroundColor: '#e96d3f',
                                          color: 'white',
                                        }}
                                        onClick={() => {
                                          const newFormData = {
                                            id: barter.data.id,
                                            address711_m1:
                                              store711.storeaddress,
                                            name711_m1: store711.storename,
                                          }
                                          if (
                                            store711.storename &&
                                            store711.storeaddress
                                          ) {
                                            save711DataClickB(newFormData)
                                          } else {
                                            notifyNoAdd()
                                          }
                                        }}
                                      >
                                        <strong style={{ fontSize: '18px' }}>
                                          確認送出
                                        </strong>
                                      </button>
                                    </div>
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {/* barter order checkout End */}
            {/* Back to Top */}
            {isBtnVisible ? (
              <>
                <button className="btn" onClick={scrollToTop}>
                  <FaAnglesUp
                    className={style.backToTop}
                    style={{ fontSize: '40px' }}
                  />
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
          {/* Footer */}
          <Footer />
        </>
      ) : (
        <>
          <DefaultLayout>
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
