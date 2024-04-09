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

export default function AdPartner() {
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
      <DefaultLayout pageName="adPartner">
        <Head>
          <title>成為廣告夥伴 | DEAL-2ND HAND SHOP</title>
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
                <span className="breadcrumb-item active">成為廣告夥伴</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Ad-partner content start */}
        <div className="container-fluid px-lg-5 mb-5">
          <div className="row px-lg-5">
            <div className="col-lg-12 px-lg-5 d-flex flex-column  justify-content-center text-center">
              <h2 style={{ color: '#8e2626' }}>
                <strong>成為DEAL的合作夥伴</strong>
              </h2>
              <h5 className="mt-3">
                <strong>快來成為DEAL的廣告合作夥伴吧！</strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  除了DEAL 2ND HAND
                  SHOP的服務外，我們也致力於與他人的合作，希望透過互惠的過程，找到更多美好的可能性。
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  看看廣告合作夥伴1號：全方面綜合運動健康中心！想保持好身材嗎？來這裡就對了！
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  看看廣告合作夥伴2號：想玩桌遊哪需要現場排隊！快來線上預約，不怕風吹雨打、不須出門就能盡享遊樂。
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  看看廣告合作夥伴3號：給浪浪一個溫暖的家！他們是可愛又淘氣的小傢伙們，您的愛心可以給他們全世界！
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  看看廣告合作夥伴4號：還沒有認識DEAL嗎？快來試試DEAL 2ND HAND
                  SHOP的功能吧！
                </strong>
              </h5>
            </div>
            <div className="col-lg-12 px-lg-5 text-center mt-4">
              <div className="row d-flex px-lg-5">
                <div className="col-lg-6 col-md-6 col-xs-12 d-flex align-items-center justify-content-center pb-2">
                  <Link href="/help-center/ad-partner">
                    <Image
                      className={`${style.adbox}`}
                      src="/n1.png"
                      alt=""
                      width={350}
                      height={350}
                      style={{ borderRadius: '30px' }}
                    />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-xs-12 pb-2">
                  <Link href="/help-center/ad-partner">
                    <Image
                      className={`${style.adbox}`}
                      src="/n2.png"
                      alt=""
                      width={350}
                      height={350}
                      style={{ borderRadius: '30px' }}
                    />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-xs-12 mt-lg-3 pb-2">
                  <Link href="/help-center/ad-partner">
                    <Image
                      className={style.adbox}
                      src="/n3.png"
                      alt=""
                      width={350}
                      height={350}
                      style={{ borderRadius: '30px' }}
                    />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-center col-lg-6 col-md-6 col-xs-12 mt-lg-3 pb-2">
                  <Link href="/help-center/ad-partner">
                    <Image
                      className={`${style.adbox}`}
                      src="/n4.png"
                      alt=""
                      width={350}
                      height={350}
                      style={{ borderRadius: '30px' }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ad-partner end */}
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
