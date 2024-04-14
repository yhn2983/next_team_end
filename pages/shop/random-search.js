import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import 'react-datepicker/dist/react-datepicker.css'
import { PROD_LIST, CART_ADD, TOGGLE_LIKE } from '@/configs/config-r'
import { shuffle } from 'lodash'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './randomSearch.module.css'
import toast, { Toaster } from 'react-hot-toast'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useCart } from '@/hooks/use-cart'
import { useLike } from '@/hooks/use-like'

export default function RandomShop() {
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
  }, [router])

  const [isBack, setIsBack] = useState(false)
  const [randomRows, setRandomRows] = useState([])

  useEffect(() => {
    if (!isBack) {
      const shuffledRows = shuffle([...data.rowsRandom]).slice(0, 12)
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

  const [isClicked, setIsClicked] = useState(false)

  const likeClick = async (productData2) => {
    const r = await fetch(`${TOGGLE_LIKE}/${productData2.product_id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData2),
    })
    const result = await r.json()
    console.log(result)
    if (result.success) {
      setIsClicked(!isClicked)
      if (!isClicked) {
        notify2(productData2.p_name)
        addProd(productData2)
      } else {
        notify3(productData2.p_name)
        removeProdById(productData2.product_id)
      }
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
      <DefaultLayout pageName="randomSearch">
        <Head>
          <title>隨機探索 | DEAL-2ND HAND SHOP</title>
        </Head>

        {/*  Breadcrumb Start */}
        <div className={`container-fluid ${style.breadcrumbArea}`}>
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb mb-30">
                <Link
                  className="breadcrumb-item"
                  style={{ textDecoration: 'none' }}
                  href="/"
                >
                  <span>首頁</span>
                </Link>
                <span className="breadcrumb-item active">隨機探索</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Shop Start */}
        <div className="container-fluid mt-2 px-lg-5 mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h2>
                <strong>歡迎使用隨機探索！</strong>
              </h2>
              <h4>
                <strong>還沒有想法嗎? 動動滑鼠 點擊試試看吧！</strong>
              </h4>
            </div>
            <div className="col-12 text-center">
              <button
                class={`btn my-3 ${style.moreBtn}`}
                type="submit"
                style={{
                  backgroundColor: '#e96d3f',
                  color: 'white',
                  fontSize: '18px',
                }}
                onClick={handleClick}
              >
                <strong>一鍵探索</strong>
              </button>
            </div>
          </div>
          <div className="row px-xl-5 mt-4">
            {randomRows.map((v, i) => {
              return (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12 pb-1">
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
                          <button className="btn">
                            <BsFillCartFill
                              className={style.iconAInner}
                              onClick={() => {
                                if (v.status == '1') {
                                  addItem(v)
                                  const productData = {
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
                                } else {
                                  notifyNoAdd(v.product_name)
                                }
                              }}
                            />
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              const productData2 = {
                                member_id: 1030,
                                product_id: v.id,
                                p_photos: v.product_photos,
                                p_name: v.product_name,
                                p_price: v.product_price,
                                p_qty: 1,
                                total_price: v.product_price,
                                available_cp: v.mc ? v.mc : v.sc,
                              }
                              likeClick(productData2)
                            }}
                          >
                            <AiOutlineHeart
                              className={style.iconBInner}
                              style={{
                                color: isClicked && v.id ? '#e96d3f' : '',
                                backgroundColor:
                                  isClicked && v.id ? '#8e2626' : '',
                              }}
                            />
                          </button>
                          <Link href={`/shop?searchSub=${v.s}`} className="btn">
                            <IoSearch className={style.iconCInner} />
                          </Link>
                        </div>
                      </div>
                      <Link
                        href={`/shop/detail?pid=${v.id}`}
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
                              <strong>
                                ${v.product_price.toLocaleString()}
                              </strong>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* Shop Product End */}
          </div>
          <Toaster />
        </div>
        {/* Shop End */}
      </DefaultLayout>
    </>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
