import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import Image from 'next/image'
import { PROD_LIST, CART_ADD, TOGGLE_LIKE } from '@/configs/config-r'
import { shuffle } from 'lodash'
// page
import LoginPage from '@/components/member/login-modal'
// style-----
import style from './prodB.module.css'
import toast, { Toaster } from 'react-hot-toast'
// react bootstrap
// react icons-----
import { AiOutlineSmallDash, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { RiGameLine } from 'react-icons/ri'
import { IoSearch } from 'react-icons/io5'
// hook------
import { useCart } from '@/hooks/use-cart'
import { useLike } from '@/hooks/use-like'
import { useAuth } from '@/context/auth-context'

export default function ProdB() {
  // Router-----
  const router = useRouter()

  // Products-----
  const [data, setData] = useState({
    success: false,
    page: 0,
    totalPages: 0,
    rows: [],
    rowsRandom: [],
    cate: [],
    searchSub: '',
  })

  useEffect(() => {
    fetch(`${PROD_LIST}${location.search}`)
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [router.query])

  const [isBack, setIsBack] = useState(false)
  const [randomRows, setRandomRows] = useState([])

  useEffect(() => {
    if (!isBack) {
      const shuffledRows = shuffle([...data.rowsRandom]).slice(0, 8)
      setRandomRows(shuffledRows)
    }
  }, [isBack, data.rowsRandom])

  const handleClick = () => {
    setIsBack(!isBack)
  }

  // cart
  const { addItem } = useCart()
  const notify = (productName) => {
    const msgBox = (
      <div>
        <p>
          <strong>{productName + ' 已成功加入購物車'}</strong>
        </p>
        <button
          className={`btn mx-auto ${style.conneBtn}`}
          style={{ backgroundColor: '#e96d3f', color: 'white' }}
          onClick={() => {
            router.push('/shop/cart')
          }}
        >
          連至 購物車
        </button>
      </div>
    )
    toast.success(msgBox)
  }

  const notifyNoAdd = (productName) => {
    const msgBox2 = (
      <div>
        <span>
          <strong>{productName + ' 已下架，不可加入購物車'}</strong>
        </span>
      </div>
    )
    toast.error(msgBox2)
  }

  const notifyNeedAuth = () => {
    const msgBox3 = (
      <div>
        <p>
          <strong>{'請先登入才可以使用此功能！'}</strong>
        </p>
        <button
          className={`btn mx-auto ${style.conneBtn}`}
          style={{ backgroundColor: '#e96d3f', color: 'white' }}
          onClick={handleLoginClick}
        >
          點我登入
        </button>
      </div>
    )
    toast(msgBox3)
  }

  const cartClick = async (productData) => {
    const r = await fetch(`${CART_ADD}/${productData.product_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
    const result = await r.json()
    console.log(result)
    if (result.success) {
      notify(productData.p_name)
    }
  }

  // Like
  const { addProd, removeProdById } = useLike()
  const notify2 = (productName) => {
    const msgBox = (
      <div>
        <p>
          <strong>{productName + ' 已加入收藏'}</strong>
        </p>
        <button
          className={`btn mx-auto ${style.conneBtn}`}
          style={{ backgroundColor: '#e96d3f', color: 'white' }}
          onClick={() => {
            router.push('/shop/like')
          }}
        >
          連至 收藏清單
        </button>
      </div>
    )
    toast.success(msgBox)
  }

  const notify3 = (productName) => {
    const msgBox = (
      <div>
        <p>
          <strong>{productName + ' 已從收藏清單移除'}</strong>
        </p>
        <button
          className={`btn mx-auto ${style.conneBtn}`}
          style={{ backgroundColor: '#e96d3f', color: 'white' }}
          onClick={() => {
            router.push('/shop/like')
          }}
        >
          連至 收藏清單
        </button>
      </div>
    )
    toast.success(msgBox)
  }

  const [isClicked, setIsClicked] = useState([])

  const likeClick = async (productData2) => {
    const member_id = auth.userData.id
    const r = await fetch(
      `${TOGGLE_LIKE}/${productData2.product_id}?member_id=${member_id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData2),
      }
    )
    const result = await r.json()
    console.log(result)
    if (result.success) {
      if (!isClicked.includes(productData2.product_id)) {
        setIsClicked([...isClicked, productData2.product_id])
        notify2(productData2.p_name)
        addProd(productData2)
      } else {
        setIsClicked(isClicked.filter((pid) => pid != productData2.product_id))
        notify3(productData2.p_name)
        removeProdById(productData2.product_id)
      }
    }
  }

  // Member
  const { checkAuth, auth } = useAuth()

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

  const [showLogin, setShowLogin] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {/* Products2 Start */}
      <div className="container-fluid pt-5 mt-5 pb-3 px-lg-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-3">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash className="me-2" />
              <RiGameLine className="mb-2" />
              交給DEAL幫您探索商品
              <AiOutlineSmallDash className="ms-2" />
            </strong>
          </span>
        </h2>
        <div className="row">
          <div className="col-12 mb-4 text-center">
            <h4>
              <strong>還沒有想法嗎? 動動滑鼠 點擊試試看吧！</strong>
            </h4>
            <button
              class={`btn ${style.moreBtn}`}
              type="submit"
              style={{
                backgroundColor: '#e96d3f',
                color: 'white',
                fontSize: '20px',
              }}
              onClick={handleClick}
            >
              <strong>一鍵探索</strong>
            </button>
          </div>
        </div>
        <div className="row px-xl-5">
          {randomRows.map((v, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div
                  className={`mb-5 ${style.card}`}
                  style={{ marginBottom: '60px' }}
                >
                  <div
                    className={isBack ? style.slideB : style.slide}
                    style={{ overflow: 'hidden' }}
                  >
                    <img
                      className={style.slideImg}
                      src="/openit.png"
                      alt=""
                      width={430}
                      height={500}
                    />
                  </div>

                  <div
                    className={`flex-column ${style.slideBack} ${
                      isBack ? style.slideBackB : style.slideBack
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="position-relative"
                        style={{ overflow: 'hidden' }}
                      >
                        <img
                          className={`img-fluid w-100 ${
                            isBack ? style.imgAct : ''
                          }`}
                          src={
                            v.product_photos.includes(',')
                              ? `/${v.product_photos.split(',')[0]}`
                              : `/${v.product_photos}`
                          }
                          alt=""
                          width={266}
                          height={266}
                          style={{
                            height: '266px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className={style.productAction}>
                        <button
                          className="btn"
                          onClick={() => {
                            if (auth.isAuth && v.status == '1') {
                              addItem(v)
                              const productData = {
                                member_id: auth.userData.id,
                                product_id: v.id,
                                p_photos: v.product_photos,
                                p_name: v.product_name,
                                p_price: v.product_price,
                                p_qty: 1,
                                total_price: v.product_price,
                                available_cp: v.mc ? v.mc : v.sc,
                              }
                              console.log(productData)
                              cartClick(productData)
                            } else if (!auth.isAuth && v.status == '1') {
                              notifyNeedAuth()
                            } else {
                              notifyNoAdd(v.product_name)
                            }
                          }}
                        >
                          <BsFillCartFill className={style.iconAInner} />
                        </button>
                        <button
                          className="btn"
                          onClick={() => {
                            if (auth.isAuth) {
                              const productData2 = {
                                member_id: auth.userData.id,
                                product_id: v.id,
                                p_photos: v.product_photos,
                                p_name: v.product_name,
                                p_price: v.product_price,
                                p_qty: 1,
                                total_price: v.product_price,
                                available_cp: v.mc ? v.mc : v.sc,
                              }
                              likeClick(productData2)
                            } else {
                              notifyNeedAuth()
                            }
                          }}
                        >
                          <AiOutlineHeart
                            className={style.iconBInner}
                            style={{
                              color: isClicked.includes(v.id) ? '#e96d3f' : '',
                              backgroundColor: isClicked.includes(v.id)
                                ? '#8e2626'
                                : '',
                            }}
                          />
                        </button>
                        <Link href={`/shop?searchSub=${v.s}`} className="btn">
                          <IoSearch className={style.iconCInner} />
                        </Link>
                      </div>
                    </div>
                    <Link
                      href={`/shop/${v.id}`}
                      style={{ textDecoration: 'none', color: 'black' }}
                    >
                      <div
                        className="text-center py-3 px-2"
                        style={{ height: '160px' }}
                      >
                        <div
                          className="text-wrap text-truncate"
                          style={{ height: '70%' }}
                          href=""
                        >
                          <h5>
                            <strong className="">{v.product_name}</strong>
                          </h5>
                        </div>
                        <div className="d-flex justify-content-center ">
                          <div
                            className=""
                            style={{
                              fontSize: '18px',
                              color:
                                v.product_status == '1' ? 'green' : '#e96d3f',
                            }}
                          >
                            <strong>
                              {v.product_status == '1' ? '二手' : '全新'}
                            </strong>
                          </div>
                          &nbsp;
                          <div className="" style={{ fontSize: '18px' }}>
                            <strong>${v.product_price.toLocaleString()}</strong>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Toaster />
      {/* Products End */}
      {/* Login Modal start */}
      <LoginPage
        show={showLogin}
        onHide={handleLoginClose}
        onSubmit={handleLoginSubmit}
      />
      {/* Login Modal end */}
    </>
  )
}
