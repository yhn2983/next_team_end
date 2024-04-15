import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import { CART_ADD, TOGGLE_LIKE } from '@/configs/config-r'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from '@/pages/shop/cart.module.css'
// react bootstrap
// react icons-----
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------

export default function Barter() {
  // Router-----
  const router = useRouter()

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
            <div className="col-lg-12 table-responsive mb-5">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <strong>以物易物訂單邀請</strong>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body text-center">
                      <table className="table table-light table-borderless table-hover">
                        <thead className="text-center table-dark">
                          <tr className="fw-5" style={{ fontSize: '20px' }}>
                            <th>您的商品</th>
                            <th>商品名稱</th>
                            <th className="text-nowrap">可獲得小碳點</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/$`}>
                                <img
                                  src=""
                                  alt=""
                                  width={150}
                                  height={150}
                                  style={{ objectFit: 'cover' }}
                                />
                              </Link>
                            </td>
                            <td
                              className="align-middle text-wrap"
                              style={{ fontSize: '20px', width: '500px' }}
                            >
                              <Link
                                href={`/shop/`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              ></Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-light table-borderless table-hover">
                        <thead className="text-center table-dark">
                          <tr className="fw-5" style={{ fontSize: '20px' }}>
                            <th>的商品</th>
                            <th>商品名稱</th>
                            <th className="text-nowrap">可獲得小碳點</th>
                          </tr>
                        </thead>
                        <tbody className="align-middle text-center">
                          <tr>
                            <td>
                              <Link href={`/shop/$`}>
                                <img
                                  src=""
                                  alt=""
                                  width={150}
                                  height={150}
                                  style={{ objectFit: 'cover' }}
                                />
                              </Link>
                            </td>
                            <td
                              className="align-middle text-wrap"
                              style={{ fontSize: '20px', width: '500px' }}
                            >
                              <Link
                                href={`/shop/`}
                                style={{
                                  textDecoration: 'none',
                                  color: 'black',
                                }}
                              ></Link>
                            </td>
                            <td
                              className="align-middle"
                              style={{ fontSize: '20px' }}
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                      <button
                        className={`btn me-4 ${style.btnHover}`}
                        style={{ backgroundColor: '#e96d3f', color: 'white' }}
                      >
                        同意
                      </button>
                      <button
                        className={`btn ${style.btnHover}`}
                        style={{ backgroundColor: '#8e2626', color: 'white' }}
                      >
                        婉拒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Barter End */}
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
