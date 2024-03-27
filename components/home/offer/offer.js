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
        style={{ padding: '0 140px', marginTop: '80px' }}
      >
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
                <h6 className="text-white text-uppercase">認識DEAL</h6>
                <h3 className="text-white mb-3">DEAL緣起</h3>
                <Link href="" className="btn btn-primary">
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
              <div className={style.offerText}>
                <h6 className="text-white text-uppercase">認識ESG</h6>
                <h3 className="text-white mb-3">致力於三面平衡</h3>
                <Link href="" className="btn btn-primary">
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
