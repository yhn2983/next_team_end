import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './ad.module.css'
// react bootstrap
// react icons-----
// hook------

export default function Ad() {
  return (
    <>
      {/* Activity Start */}
      <div className="container-fluid py-5" style={{ padding: '0 100px' }}>
        <div className="d-flex" style={{ padding: '30px 0' }}>
          <h2 className="mb-4" style={{ color: '#8e2626' }}>
            <strong>DEAL近期大活動</strong>
          </h2>
          <span className={style.adArea}></span>
        </div>
        <div className="row px-xl-5">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div className={`bg-light p-4 ${style.act}`}>
                <Link
                  className="d-flex justify-content-center"
                  href=""
                  style={{ textDecoration: 'none', color: '#8e2626' }}
                >
                  <h2>
                    <strong>歡慶DEAL開幕試營運 企業親子二手市集活動</strong>
                  </h2>
                </Link>
                <div className="adContent d-flex justify-content-center mt-4">
                  <div
                    className={`me-5 d-flex justify-content-center flex-column ${style.vender}`}
                  >
                    <h4 className="mt-3 mx-auto">
                      <strong>歡迎廠商攤販進駐</strong>
                    </h4>
                    <Image
                      className={style.venderImg}
                      src="/vendor.png"
                      alt=""
                      width={900}
                      height={600}
                    />
                  </div>
                  <div
                    className={`d-flex justify-content-center flex-column ${style.family}`}
                  >
                    <h4 className="mt-3 mx-auto">
                      <strong>誠邀父母小孩一起共享盛事</strong>
                    </h4>
                    <Image
                      className={style.familyImg}
                      src="/family.png"
                      alt=""
                      width={900}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Activity End*/}
    </>
  )
}
