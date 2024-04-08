import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { PROD_LIST } from '@/configs/config-r'
import { shuffle } from 'lodash'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './randomSearch.module.css'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
// hook------

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

  const qs = { ...router.query }

  return (
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
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                  <div
                    className={`mb-5 ${style.card}`}
                    style={{ marginBottom: '60px' }}
                  >
                    <div
                      className={isBack ? style.slideB : style.slide}
                      style={{ overflow: 'hidden' }}
                    >
                      <Image
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
                          <Image
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
                            <BsFillCartFill className={style.iconAInner} />
                          </button>
                          <button className="btn">
                            <AiOutlineHeart className={style.iconBInner} />
                          </button>
                          <button className="btn">
                            <IoSearch className={style.iconCInner} />
                          </button>
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
                              <strong>${v.product_price}</strong>
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
        </div>
        {/* Shop End */}
      </DefaultLayout>
    </>
  )
}
