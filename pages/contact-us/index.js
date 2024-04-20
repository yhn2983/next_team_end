import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { SEND_EMAIL } from '@/configs/config-r'
// import Image from 'next/image'
// pages-----
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './contactUs.module.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// react bootstrap
// react icons-----
import { FaRegFaceSmileWink } from 'react-icons/fa6'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------

export default function ContactUs() {
  // send mail
  const notifySuccess = () => {
    MySwal.fire({
      title: `您的訊息已送出`,
      text: '請稍待3-5個工作天，我們會盡快回覆您',
      icon: 'success',
      confirmButtonText: '關閉',
      confirmButtonColor: '#3085d6',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subjuect: e.target.subjuect.value,
      message: e.target.message.value,
    }

    try {
      const r = await fetch(`${SEND_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (r.success) {
        notifySuccess()
        e.target.reset()
      } else {
        alert('郵件發送失敗')
      }
    } catch (e) {
      console.error('Error', e)
    }
  }

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
                        onSubmit={handleSubmit}
                      >
                        <div class="control-group mb-4">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
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
                            name="email"
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
                            name="subject"
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
                            name="message"
                            placeholder="您的訊息"
                            required="required"
                            data-validation-required-message="Please enter your message"
                          ></textarea>
                          <p class="help-block text-danger"></p>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button
                            class={`btn py-2 px-3 ${style.sendBtn}`}
                            type="submit"
                            id="sendMessageButton"
                            style={{
                              backgroundColor: '#e96d3f',
                              color: 'white',
                            }}
                          >
                            <span style={{ fontSize: '18px' }}>送出訊息</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-lg-5 mb-3 mt-3">
                    <img src="/logo9.png" alt="" width={500} height={500} />
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
