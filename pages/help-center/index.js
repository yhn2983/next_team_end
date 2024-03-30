import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './helpCenter.module.css'
// react bootstrap
// react icons-----
import { FaMagnifyingGlass } from 'react-icons/fa6'
// hook------

export default function HelpCenter() {
  return (
    <>
      <DefaultLayout pageName="helpCenter">
        <Head>
          <title>幫助中心 | DEAL-2ND HAND SHOP</title>
        </Head>

        {/* Banner start */}
        <div className={style.banner}>
          <div className={style.area1}>
            <div className="">
              <h2
                className="ps-3"
                style={{ marginTop: '85px', color: 'white' }}
              >
                <strong>需要什麼協助？</strong>
              </h2>
            </div>
            <div
              className="input-group mb-3 ms-3"
              style={{ width: '25%', height: '40px' }}
            >
              <input
                type="text"
                className="form-control border border-2 border-secondary"
                placeholder="搜尋"
                aria-label="搜尋"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-search border border-2 border-secondary"
                type="button"
                id="button-addon2"
                style={{ backgroundColor: '#8e2626' }}
              >
                <FaMagnifyingGlass style={{ color: 'white' }} />
              </button>
            </div>
          </div>
        </div>
        {/* Banner end */}
        {/*  Breadcrumb Start */}
        <div className={`container-fluid ${style.breadcrumbArea}`}>
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb">
                <Link
                  className="breadcrumb-item"
                  style={{ textDecoration: 'none' }}
                  href="/"
                >
                  <span>首頁</span>
                </Link>
                <span className="breadcrumb-item active">幫助中心</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Help Center start */}
        <div
          className="container-fluid mt-4"
          style={{ padding: '0 110px', marginBottom: '150px' }}
        >
          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-6">
              <Link className="text-decoration-none" href="/help-center/deal">
                <div
                  className={`card border-seconary border-4 ${style.card}`}
                  style={{ marginBottom: '80px' }}
                >
                  <Image
                    src="/deal3.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>認識DEAL</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" href="/help-center/esg">
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/esg.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>認識ESG</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                className="text-decoration-none"
                href="/help-center/ad-partner"
              >
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/parner.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>成為廣告夥伴</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                className="text-decoration-none"
                href="/help-center/using-rule"
              >
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/use.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>使用條款</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                className="text-decoration-none"
                href="/help-center/privacy-rule"
              >
                <div className={`card border-seconary border-4 ${style.card}`}>
                  <Image
                    src="/privacy.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>隱私條款</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                className="text-decoration-none"
                href="/help-center/language-setting"
              >
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/language.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>語言設定</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link className="text-decoration-none" href="/help-center/faqs">
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/password.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>常見問題</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-3">
              <Link
                className="text-decoration-none"
                href="/help-center/join-deal"
              >
                <div
                  className={`card border-seconary border-4 ms-5 ${style.card}`}
                >
                  <Image
                    src="/join.png"
                    className="card-img-top"
                    alt=""
                    width={300}
                    height={450}
                  />
                  <div className="card-body mx-auto border-top">
                    <h5 className="card-title" style={{ color: '#8e2626' }}>
                      <strong>加入DEAL</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Help Center end */}
      </DefaultLayout>
    </>
  )
}
