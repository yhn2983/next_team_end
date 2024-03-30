import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page-----
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './activity.module.css'
// react bootstrap
// react icons-----
import { FaMagnifyingGlass } from 'react-icons/fa6'
// hook------

export default function Activity() {
  return (
    <>
      <DefaultLayout pageName="activity">
        <Head>
          <title>近期活動 | DEAL-2ND HAND SHOP</title>
        </Head>
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
                <span className="breadcrumb-item active">近期活動</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
      </DefaultLayout>
    </>
  )
}
