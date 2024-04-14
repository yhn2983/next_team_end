import React, { useState } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
// style-----
import style from './ad.module.css'
// react bootstrap
// react icons-----
import { MdOutlineVolunteerActivism } from 'react-icons/md'
import { AiOutlineSmallDash } from 'react-icons/ai'
import { FaHandPointRight } from 'react-icons/fa'
// hook------

export default function Ad() {
  return (
    <>
      {/* Activity Start */}
      <div
        className="container-fluid pt-5 mt-5 pb-5 px-lg-5"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-3">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash />
              <AiOutlineSmallDash className="me-2" />
              <MdOutlineVolunteerActivism className="mb-2" />
              DEAL近期大活動
              <AiOutlineSmallDash className="ms-2" />
              <AiOutlineSmallDash />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5 text-center mb-2">
          <div className="col-12">
            <h4 style={{ color: '#e96d3f' }}>
              <strong>歡慶DEAL開幕試營運 企業親子二手市集活動</strong>
            </h4>
            <FaHandPointRight
              className={style.iconMove}
              style={{ color: '#8e2626' }}
            />
            &nbsp;&nbsp;
            <Link href="/activity">
              <button type="button" className={style.moreBtn} href="">
                <strong>了解詳情</strong>
              </button>
            </Link>
          </div>
        </div>
        <div className="row px-xl-5">
          <div className={`col-lg-6 col-md-12`}>
            <div
              className={`d-flex justify-content-center flex-column mx-3 my-3 py-2 ${style.vender}`}
            >
              <h4 className="mt-3 mx-auto">
                <strong>歡迎廠商攤販進駐</strong>
              </h4>
              <img
                className={style.venderImg}
                src="/vendor.png"
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={`col-lg-6 col-md-12`}>
            <div
              className={`d-flex justify-content-center flex-column mx-3 my-3 py-2 ${style.family}`}
            >
              <h4 className="mt-3 mx-auto">
                <strong>誠邀父母小孩一起共享盛事</strong>
              </h4>
              <img
                className={style.familyImg}
                src="/family.png"
                alt=""
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Activity End*/}
    </>
  )
}
