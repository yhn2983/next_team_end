import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './cart.module.css'
// react bootstrap
// react icons-----
import {
  FaMinus,
  FaPlus,
  FaTrashCan,
  FaAnglesUp,
  FaCartPlus,
} from 'react-icons/fa6'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------

export default function Like() {
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
      <DefaultLayout>
        <Head>
          <title>收藏商品 | DEAL-2ND HAND SHOP</title>
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
                  href="/shop/product-search"
                  style={{ textDecoration: 'none', fontSize: '20px' }}
                >
                  <span>探索商品</span>
                </Link>
                <span
                  className="breadcrumb-item active"
                  style={{ fontSize: '20px' }}
                >
                  收藏商品
                </span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Like Start */}
        <div className="container-fluid mt-3 px-5">
          <div className="row px-xl-5">
            <div className="col-lg-12 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover">
                <thead className="text-center table-dark">
                  <tr className="fw-5" style={{ fontSize: '20px' }}>
                    <th>加入購物車</th>
                    <th>賣家暱稱</th>
                    <th>商品</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>金額</th>
                    <th>可獲得小碳點</th>
                    <th>移除</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-center">
                  <tr>
                    <td>
                      <button className="btn btn-sm">
                        <FaCartPlus
                          className={`mb-1 ${style.trashBtn}`}
                          style={{ fontSize: '25px', color: '#8e2626' }}
                        />
                      </button>
                    </td>
                    <td style={{ fontSize: '20px' }}>
                      <Link
                        href=""
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        賣家
                      </Link>
                    </td>
                    <td>
                      <Link href={`/shop`}>
                        <img src="/pot.jpg" alt="" width={150} height={150} />
                      </Link>
                    </td>
                    <td className="align-middle" style={{ fontSize: '20px' }}>
                      <Link
                        href={`/shop`}
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        鍋子
                      </Link>
                    </td>
                    <td className="align-middle" style={{ fontSize: '20px' }}>
                      $100
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
                          >
                            <FaMinus className="mb-1" />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm border-0 text-center"
                          value="1"
                        />
                        <div className="input-group-btn">
                          <button
                            className={`btn btn-sm btn-plus ${style.btnHover}`}
                            style={{
                              backgroundColor: '#8e2626',
                              color: 'white',
                            }}
                          >
                            <FaPlus className="mb-1" />
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="align-middle" style={{ fontSize: '20px' }}>
                      $150
                    </td>
                    <td style={{ fontSize: '20px' }}>10</td>
                    <td className="align-middle">
                      <button className="btn btn-sm">
                        <FaTrashCan
                          className={`mb-1 ${style.trashBtn}`}
                          style={{ fontSize: '20px', color: '#8e2626' }}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Like End */}
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
