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

export default function UsingRule() {
  return (
    <>
      <DefaultLayout pageName="privacyRule">
        <Head>
          <title>隱私條款 | DEAL-2ND HAND SHOP</title>
        </Head>
        {/* Banner start */}
        <div className={style.banner}>
          <div
            className={`text-center d-flex align-items-center justify-content-center ${style.area1}`}
          >
            <h1 className="" style={{ color: 'white', fontSize: '50px' }}>
              <strong>DEAL HELP CENTER</strong>
            </h1>
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
                <span className="breadcrumb-item active">隱私條款</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
      </DefaultLayout>
    </>
  )
}
