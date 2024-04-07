import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
import { shuffle } from 'lodash'
// style-----
import style from './prodB.module.css'
// react bootstrap
// react icons-----
import { AiOutlineSmallDash, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs'
import { RiGameLine } from 'react-icons/ri'
import { IoSearch } from 'react-icons/io5'
// hook------

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
      const shuffledRows = shuffle([...data.rowsRandom]).slice(0, 8)
      setRandomRows(shuffledRows)
    }
  }, [isBack, data.rowsRandom])

  const handleClick = () => {
    setIsBack(!isBack)
  }

  const qs = { ...router.query }

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
                    <Image
                      className={style.slideImg}
                      src="/openit.png"
                      alt=""
                      width={430}
                      height={500}
                    />
                  </div>
                  <Link
                    href=""
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
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
                          <Link href="" className="">
                            <BsFillCartFill className={style.iconAInner} />
                          </Link>
                          <Link href="" className="">
                            <AiOutlineHeart className={style.iconBInner} />
                          </Link>
                          <Link href="" className="">
                            <IoSearch className={style.iconCInner} />
                          </Link>
                        </div>
                      </div>
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
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* Products End */}
    </>
  )
}
