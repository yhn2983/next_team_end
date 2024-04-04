import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
// style-----
import style from './prodA.module.css'
// react bootstrap
// react icons-----
import { AiOutlineSmallDash, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCartFill, BsSearchHeart } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
// hook------

export default function ProdA() {
  // Router-----
  const router = useRouter()
  // Products-----
  const [data, setData] = useState({
    success: false,
    page: 0,
    totalPages: 0,
    rows: [],
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

  // category
  const [mainSelect, setMainSelect] = useState(null)

  const qs = { ...router.query }
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 mt-5 pb-3 px-lg-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash className="me-2" />
              <BsSearchHeart className="mb-2" />
              探索商品
              <AiOutlineSmallDash className="ms-2" />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5">
          {data.rows.map((v) => {
            return (
              <div key={v.id} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link
                  href=""
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div
                    className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
                    style={{ marginBottom: '60px' }}
                  >
                    <div className="overflow-hidden ">
                      <div
                        className="position-relative"
                        style={{ overflow: 'hidden' }}
                      >
                        <Image
                          className={`img-fluid w-100 ${style.imgAct}`}
                          src={
                            v.product_photos.includes(',')
                              ? `/${v.product_photos.split(',')[0]}`
                              : `/${v.product_photos}`
                          }
                          alt=""
                          width={266}
                          height={266}
                          style={{ height: '266px', objectFit: 'cover' }}
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
            )
          })}
        </div>
        <div className="row px-xl-5 text-center">
          <div className="col-12">
            <Link href="">
              <button type="button" className={style.moreBtn} href="">
                <strong>探索更多</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  )
}
