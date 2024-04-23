import React, { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
// style-----
import style from './offer.module.css'
// react bootstrapd
// react icons-----
import { AiOutlineSmallDash } from 'react-icons/ai'
import { BsActivity } from 'react-icons/bs'
// hook------

export default function Offer() {
  return (
    <>
      {/* Offer Start */}
      <div className="container-fluid pt-lg-5 mt-5 pt-sm-2 pb-3 px-lg-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash className="me-2" />
              <BsActivity className="mb-2" />
              企業運營與環境永續
              <AiOutlineSmallDash className="ms-2" />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-6 col-md-12 mb-md-3 mb-sm-3">
            <div
              className={`rounded me-lg-3 mb-3 ${style.productOffer}`}
              style={{ height: '400px' }}
            >
              <img
                className={`img-fluid ${style.offerImg}`}
                src="/offer1.png"
                alt=""
                width={550}
                height={400}
                style={{ height: '400px' }}
              />
              <div className={style.offerText}>
                <h3 className="text-white">
                  <strong>認識DEAL</strong>
                </h3>
                <h4 className="text-white mb-3">DEAL緣起</h4>
                <Link
                  href="/help-center/deal"
                  className={`btn ${style.moreBtn}`}
                  style={{
                    backgroundColor: '#8e2626',
                    color: 'white',
                    boxShadow: '0 0 10px #adadaeb4',
                    marginLeft: '40%',
                  }}
                >
                  <strong>了解更多</strong>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div
              className={`mb-30 ms-lg-2 rounded ${style.productOffer}`}
              style={{ height: '400px' }}
            >
              <img
                className={`img-fluid ${style.offerImg}`}
                src="/offer2.png"
                alt=""
                width={550}
                height={400}
                style={{ height: '400px' }}
              />
              <div className={style.offerTextB}>
                <h3 className="text-white text-uppercase mt-2">
                  <strong>認識ESG</strong>
                </h3>
                <h4 className="text-white mb-3">致力於三面平衡</h4>
                <Link
                  href="/help-center/esg"
                  className={`btn mt-1 ${style.moreBtn}`}
                  style={{
                    backgroundColor: '#8e2626',
                    color: 'white',
                    boxShadow: '0 0 10px #adadaeb4',
                    marginRight: '40%',
                  }}
                >
                  <strong>了解更多</strong>
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
