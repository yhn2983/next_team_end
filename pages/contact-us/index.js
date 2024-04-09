import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// pages-----
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './contactUs.module.css'
// react bootstrap
// react icons-----
import { FaRegFaceSmileWink } from 'react-icons/fa6'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------

export default function ContactUs() {
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
      <DefaultLayout pageName="contactUs">
        <Head>
          <title>聯絡我們 | DEAL-2ND HAND SHOP</title>
        </Head>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {/*  Breadcrumb Start */}
              <div className={`container-fluid ${style.breadcrumbArea}`}>
                <div className="row px-xl-5">
                  <div className="col-12">
                    <nav className="breadcrumb mb-30">
                      <Link
                        className="breadcrumb-item"
                        style={{ textDecoration: 'none' }}
                        href="/"
                      >
                        <span>首頁</span>
                      </Link>
                      <span className="breadcrumb-item active">聯絡我們</span>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Breadcrumb End */}
              {/* Contact Start */}
              <div class="container-fluid mt-3 px-5">
                <div className="d-flex justify-content-center">
                  <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span class="pr-3" style={{ color: '#8e2626' }}>
                      <strong>
                        聯絡我們：留下您的訊息
                        <FaRegFaceSmileWink className="ms-2 mb-2" />
                      </strong>
                    </span>
                  </h2>
                </div>
                <div class="row px-xl-5 mt-4">
                  <div class="col-lg-7 mb-5" style={{ paddingLeft: '120px' }}>
                    <div class="contact-form bg-light p-5 ">
                      <div id="success"></div>
                      <form
                        name="sentMessage"
                        id="contactForm"
                        novalidate="novalidate"
                      >
                        <div class="control-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="您的姓名"
                            required="required"
                            data-validation-required-message="Please enter your name"
                          />
                          <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group mb-4">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="您的信箱"
                            required="required"
                            data-validation-required-message="Please enter your email"
                          />
                          <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            placeholder="訊息主旨"
                            required="required"
                            data-validation-required-message="Please enter a subject"
                          />
                          <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group mb-4">
                          <textarea
                            class="form-control"
                            rows="8"
                            id="message"
                            placeholder="您的訊息"
                            required="required"
                            data-validation-required-message="Please enter your message"
                          ></textarea>
                          <p class="help-block text-danger"></p>
                        </div>
                        <div>
                          <button
                            class={`btn py-2 px-3 ${style.sendBtn}`}
                            type="submit"
                            id="sendMessageButton"
                            style={{
                              backgroundColor: '#e96d3f',
                              color: 'white',
                            }}
                          >
                            <span style={{ fontSize: '20px' }}>送出訊息</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-5 mb-3 mt-3">
                    <Image src="/logo9.png" alt="" width={500} height={500} />
                  </div>
                </div>
              </div>
              {/* Contact End */}
            </div>
          </div>
        </div>
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
