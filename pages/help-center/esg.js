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

export default function ESG() {
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
      <DefaultLayout pageName="esgInfor">
        <Head>
          <title>認識ESG | DEAL-2ND HAND SHOP</title>
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
                <span className="breadcrumb-item active">認識ESG</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* ESG content start */}
        <div className="container-fluid px-lg-5 mb-5">
          <div className="row px-lg-5">
            <div className="col-lg-12 px-lg-5 d-flex flex-column  justify-content-center text-center">
              <h2 style={{ color: '#8e2626' }}>
                <strong>DEAL小學堂：認識ESG</strong>
              </h2>
              <h5 className="mt-3">
                <strong>
                  ESG這個議題其實已經出現相當之久，但近年的企業界越來越獲重視！那麼ESG到底是什麼呢？
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  ESG是由環境（Environmental）、社會（Social）和公司治理（Governance）取其英文第一字所組成，指的是企業在環境保護、社會責任和公司治理方面的經營表現。環境保護層面的指標主要包括企業的環境保護措施、資源利用效率、能源碳排、環境風險管理等；社會責任層面的指標主要包括企業對員工的管理與福利、企業與消費者之間的關係以及企業對供應商的處理等；而公司治理層面的指標主要包括企業的治理結構、公司的透明度和責任以及管理實踐等。
                </strong>
              </h5>
              <h5 className="mt-3">
                <strong>
                  目前市面上有數間ESG評分機構，不同的ESG評分機構評估重點和方法可能略有不同。常見之ESG評分機構如：MSCI
                  ESG指標：是由摩根士丹利資本國際公司（Morgan Stanley Capital
                  International, MSCI）所提供、Sustainalytics
                  ESG指標：由晨星集團（Morningstar）所提供、S&P Global
                  ESG指標：是由標準普爾道瓊指數公司（S&P Dow Jones Indices, S&P
                  DJI）所提供、 FTSE
                  ESG指標：亦稱為富時永續指數，此指標是由富時羅素公司（FTSE
                  Russell）所提供，及ISS
                  ESG指標：是由公司機構股東服務集團(Institutional Shareholder
                  Services group of companies)所提供等等。
                </strong>
              </h5>
            </div>
            <div className="col-lg-12 px-lg-5 text-center mt-4">
              <Image
                src="/esg.png"
                alt=""
                width={300}
                height={300}
                style={{
                  objectFit: 'cover',
                  opacity: '0.8',
                  borderRadius: '50%',
                }}
              />
            </div>
          </div>
        </div>
        {/* ESG content end */}
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
