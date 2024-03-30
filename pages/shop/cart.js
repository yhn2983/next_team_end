import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page
import Footer from '@/components/common/footer/footer'
import goToTopButton from '@/components/common/go-to-top-button'
// style-----
import style from './cart.module.css'
// react bootstrap
// react icons-----
import {
  FaPersonBreastfeeding,
  FaSeedling,
  FaMinus,
  FaPlus,
  FaTrashCan,
  FaAnglesUp,
} from 'react-icons/fa6'
// hook------

export default function Cart() {
  return (
    <>
      <Head>
        <title>購物車 | DEAL-2ND HAND SHOP</title>
      </Head>
      <div className="container-fluid" id="top">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid d-flex justify-content-center">
                <h5 className="slogan align-middle mt-3">
                  <FaSeedling style={{ color: '#51c332' }} />
                  <Link
                    className="colorSlogan text-decoration-none"
                    href=""
                    style={{ color: '#8e2626' }}
                  >
                    <strong style={{ fontSize: '25px' }}>
                      {' '}
                      \ 歡慶DEAL線上開通試營運 企業親子二手市集活動 /{' '}
                    </strong>
                  </Link>
                  <FaPersonBreastfeeding style={{ color: '#2055b1' }} />
                </h5>
              </div>
            </nav>
          </div>
        </div>
        {/* Breadcrumb Start */}
        <div className={`container-fluid mt-5 ${style.breadcrumbArea}`}>
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
                  購物車
                </span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Cart Start */}
        <div className="container-fluid mt-3">
          <div className="row px-xl-5">
            <div className="col-lg-8 table-responsive mb-5">
              <table className="table table-light table-borderless table-hover">
                <thead className="text-center table-dark">
                  <tr className="fw-5" style={{ fontSize: '20px' }}>
                    <th>商品</th>
                    <th>商品名稱</th>
                    <th>價格</th>
                    <th>數量</th>
                    <th>金額</th>
                    <th>移除</th>
                  </tr>
                </thead>
                <tbody className="align-middle text-center">
                  <tr>
                    <td>
                      <Link href="">
                        <Image src="/pot.jpg" alt="" width={150} height={150} />
                      </Link>
                    </td>
                    <td className="align-middle" style={{ fontSize: '20px' }}>
                      <Link
                        href=""
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
                            className="btn btn-sm btn-minus"
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
                            className="btn btn-sm btn-plus"
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
                    <td className="align-middle">
                      <button className="btn btn-sm">
                        <FaTrashCan
                          className="mb-1"
                          style={{ fontSize: '20px', color: '#8e2626' }}
                        />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-4">
              <form className="mt-2" action="">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="輸入折扣碼"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn"
                      style={{ backgroundColor: '#e96d3f', color: 'white' }}
                    >
                      使用折扣碼
                    </button>
                  </div>
                </div>
              </form>
              <div className="d-flex mt-5 mb-3">
                <h3 className="mb-2" style={{ color: '#8e2626' }}>
                  <strong>購物車詳情</strong>
                </h3>
                <span className={style.titleArea}></span>
              </div>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>$160</h5>
                  </div>
                  <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cart End */}
        {/* Back to Top */}
        <Link href="#top" className="btn">
          <FaAnglesUp
            className={style.backToTop}
            style={{ fontSize: '40px' }}
          />
        </Link>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}
