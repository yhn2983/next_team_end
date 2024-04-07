import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page-----
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './helpCenter.module.css'
// react bootstrap
// react icons-----
import { FaMagnifyingGlass } from 'react-icons/fa6'
// hook------

export default function ESG() {
  return (
    <>
      <DefaultLayout pageName="esgInfor">
        <Head>
          <title>認識ESG | DEAL-2ND HAND SHOP</title>
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
        {/* Breadcrumb Start */}
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
                <Link
                  className="breadcrumb-item"
                  style={{ textDecoration: 'none', fontSize: '20px' }}
                  href="/help-center"
                >
                  <span>幫助中心</span>
                </Link>
                <span className="breadcrumb-item active">認識ESG</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
      </DefaultLayout>
    </>
  )
}
