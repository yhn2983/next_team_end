import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page-----
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './helpCenter.module.css'
// react bootstrap
// react icons-----
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------

export default function Deal() {
  // Loading bar-----
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 50)
    }
  }, [isLoading])

  const display = (
    <>
      <DefaultLayout pageName="dealInfor">
        <Head>
          <title>認識DEAL | DEAL-2ND HAND SHOP</title>
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
                <span className="breadcrumb-item active">認識DEAL</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* DEAL content start */}
        <div className="container-fluid px-lg-5 mb-5">
          <div className="row px-lg-5">
            <div className="col-lg-12 px-lg-5 d-flex flex-column  justify-content-center text-center">
              <h2 style={{ color: '#8e2626' }}>
                <strong>DEAL緣起</strong>
              </h2>
              <h5 className="mt-3">
                <strong>我們是一群來自不同領域，卻有著相同理念的夥伴！</strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  隨著科技快速發展，快時尚席捲全球，伴隨而來所造成的環境影響，已不容小覷。
                  希望透過DEAL 2ND HAND SHOP
                  這個平台，可以讓東西找到下一位主人，延長商品的壽命，也延續東西的故事。
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  DEAL 2ND HAND SHOP除了經典的二手買賣以外，還增加了以物易物以及
                  議價的功能，商品的流傳不一定需要透過交易，也可以透過交換，讓東西被需要的人們找到。
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  如同我們的標語：Let's make a
                  DEAL，一起找尋寶物的過程，一起愛護這個地球！
                </strong>
              </h5>
            </div>
            <div className="col-lg-12 px-lg-5 text-center mt-4">
              <Image
                src="/logo9.png"
                alt=""
                width={300}
                height={300}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        {/* DEAL content end */}
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
