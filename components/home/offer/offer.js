import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './offer.module.css'
// react bootstrapd
// react icons-----
// hook------

export default function Offer() {
  return (
    <>
      {/* Offer Start */}
      <div
        className="container-fluid offerArea"
        style={{ padding: '0 100px', marginTop: '80px' }}
      >
        <div className="d-flex" style={{ padding: '30px 0', color: '#8e2626' }}>
          <h2 className="mb-4">
            <strong>企業運營與環境永續</strong>
          </h2>
          <span className={style.offerArea}></span>
        </div>
        <div className="row px-xl-5">
          <div className="col-md-6">
            <div className={`mb-30 rounded ${style.productOffer}`}>
              <Image
                className={`img-fluid ${style.offerImg}`}
                src="/offer1.png"
                alt=""
                width={900}
                height={500}
              />
              <div className={style.offerText}>
                <h2 className="text-white">認識DEAL</h2>
                <h1 className="text-white mb-3">DEAL緣起</h1>
                <Link
                  href=""
                  className="btn"
                  style={{
                    backgroundColor: '#8e2626',
                    color: 'white',
                    boxShadow: '0 0 10px #adadaeb4',
                    marginLeft: '300px',
                  }}
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`mb-30 rounded ${style.productOffer}`}>
              <Image
                className={`img-fluid ${style.offerImg}`}
                src="/offer2.png"
                alt=""
                width={900}
                height={500}
              />
              <div className={style.offerTextB}>
                <h2 className="text-white text-uppercase">認識ESG</h2>
                <h1 className="text-white mb-3">致力於三面平衡</h1>
                <Link
                  href=""
                  className={`btn ${style.moreBtn}`}
                  style={{
                    backgroundColor: '#8e2626',
                    color: 'white',
                    boxShadow: '0 0 10px #adadaeb4',
                    marginRight: '350px',
                  }}
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}
    </>
  )
}
