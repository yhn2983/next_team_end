import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './footer.module.css'
// react bootstrap
// react icons-----
import {
  FaUserFriends,
  FaRegHandPointDown,
  FaFacebookSquare,
  FaInstagramSquare,
  FaAngleRight,
} from 'react-icons/fa'
import { FaSquareXTwitter, FaLinkedin } from 'react-icons/fa6'
import { IoCloseCircle } from 'react-icons/io5'
// hook------

export default function Footer() {
  const [isClose, setIsClose] = useState(false)
  const handleCloseBtn = () => {
    if (!isClose) setIsClose(true)
  }

  return (
    <>
      {/* Footer Start */}
      <div
        className={`container-fluid text-secondary mt-5 pt-5 ${style.footerArea}`}
      >
        <div className="row px-xl-5 pt-2">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">
              <strong>
                <FaUserFriends className={`mb-2 ${style.footerContent}`} />
                &nbsp;
                <span className={style.footerContent}>廣告合作夥伴</span>
              </strong>
            </h5>
            <div className="adboxTop d-flex">
              <div
                className={`me-5 d-flex align-items-center justify-content-center ${style.adbox}`}
              >
                <Link href="/help-center/ad-partner">
                  <Image
                    className=""
                    src="/n1.png"
                    alt=""
                    width={176}
                    height={176}
                    style={{ borderRadius: '30px' }}
                  />
                </Link>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${style.adbox}`}
              >
                <Link href="/help-center/ad-partner">
                  <Image
                    className=""
                    src="/n2.png"
                    alt=""
                    width={176}
                    height={176}
                    style={{ borderRadius: '30px' }}
                  />
                </Link>
              </div>
            </div>
            <div className="adboxBottom d-flex mt-4">
              <div
                className={`me-5 d-flex align-items-center justify-content-center ${style.adbox}`}
              >
                <Link href="/help-center/ad-partner">
                  <Image
                    className=""
                    src="/n3.png"
                    alt=""
                    width={176}
                    height={176}
                    style={{ borderRadius: '30px' }}
                  />
                </Link>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${style.adbox}`}
              >
                <Link href="/help-center/ad-partner">
                  <Image
                    className=""
                    src="/n4.png"
                    alt=""
                    width={176}
                    height={176}
                    style={{ borderRadius: '30px' }}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <FaRegHandPointDown
                      className={`mb-2 ${style.footerContent}`}
                    />
                    &nbsp;
                    <span className={style.footerContent}>探索DEAL</span>
                  </strong>
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link
                    className="mb-3"
                    href="/shop"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      探索商品
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3"
                    href="/shop/random-search"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      隨機探索
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3"
                    href="#"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      領取優惠券
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3"
                    href="#"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      小碳點等級
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3"
                    href="/help-center/joinDeal"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      加入DEAL
                    </span>
                  </Link>
                  <Link
                    className="text-secondary"
                    href="/help-center/ad-partner"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      廣告合作
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <FaRegHandPointDown
                      className={`mb-2 ${style.footerContent}`}
                    />
                    &nbsp;
                    <span className={style.footerContent}>了解DEAL</span>
                  </strong>
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link
                    className="text-secondary mb-3 ps-2"
                    href="/help-center/deal"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      認識DEAL
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3 ps-2"
                    href="/help-center/esg"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      認識ESG
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3 ps-2"
                    href="/help-center/privacy-rule"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      隱私條款
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3 ps-2"
                    href="/help-center/using-rule"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      使用條款
                    </span>
                  </Link>
                  <Link
                    className="text-secondary mb-3 ps-2"
                    href="/help-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      幫助中心
                    </span>
                  </Link>
                  <Link
                    className="text-secondary ps-2"
                    href="/contact-us"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className={style.selectOptions}>
                      <FaAngleRight
                        className="me-2"
                        style={{ fontSize: '15px' }}
                      />
                      聯絡我們
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <i className="fa-solid fa-hands-asl-interpreting"></i>
                    <span className={style.footerContent}>成為DEAL會員</span>
                  </strong>
                </h5>
                <span className={style.option}>
                  還沒成為DEAL會員嗎？快來註冊！
                </span>
                <form action="" className="mt-2">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="輸入您的email開始註冊"
                      name="email"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary rounded"
                        style={{
                          backgroundColor: '#e96d3f',
                          border: 'none',
                          height: '43px',
                        }}
                      >
                        <span>註冊</span>
                      </button>
                    </div>
                  </div>
                </form>
                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                  <span
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      paddingLeft: '4px',
                    }}
                  >
                    Follow Us
                  </span>
                </h6>
                <div className="d-flex ps-2">
                  <Link className="" href="#">
                    <FaSquareXTwitter
                      className={style.socialIcons}
                      style={{ color: 'black', backgroundColor: 'white' }}
                    />
                  </Link>
                  <Link className="" href="#">
                    <FaFacebookSquare
                      className={style.socialIcons}
                      style={{ backgroundColor: 'white' }}
                    />
                  </Link>
                  <Link className="" href="#">
                    <FaLinkedin
                      className={style.socialIcons}
                      style={{ color: '#1163cd', backgroundColor: 'white' }}
                    />
                  </Link>
                  <Link className="" href="#">
                    <FaInstagramSquare
                      className={style.socialIcons}
                      style={{
                        backgroundColor: 'white',
                        color: 'purple',
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row border-top mx-xl-5 pt-5"
          style={{ borderColor: 'rgba(256, 256, 256, .1)' }}
        >
          <div className="col d-flex align-items-center justify-content-around pt-2">
            <div className="d-flex">
              <div className="me-1">
                <Image
                  className="rounded-circle"
                  src="/logo9.png"
                  alt=""
                  width={200}
                  height={200}
                  style={{ width: '60px', height: '60px' }}
                />
              </div>
              <div className="copyright">
                <p
                  className="pt-3"
                  style={{ fontSize: '20px', color: 'white' }}
                >
                  &nbsp;&copy; 2024 DEAL
                </p>
              </div>
            </div>
            <div className="footer-txt d-flex ms-5 pt-3">
              <div className="txt">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/help-center"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      幫助中心
                    </span>
                  </strong>
                </Link>
              </div>
              <div className="txt ms-4">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/contact-us"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      聯絡我們
                    </span>
                  </strong>
                </Link>
              </div>
              <div className="txt ms-4">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/help-center/esg"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      永續發展
                    </span>
                  </strong>
                </Link>
              </div>
              <div className="txt ms-4">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/help-center/join-deal"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      公司職缺
                    </span>
                  </strong>
                </Link>
              </div>
              <div className="txt ms-4">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/help-center/using-rule"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      使用條款
                    </span>
                  </strong>
                </Link>
              </div>
              <div className="txt ms-4">
                <Link
                  className="text-decoration-none text-secondary me-3"
                  href="/help-center/privacy-rule"
                >
                  <strong>
                    <span style={{ fontSize: '22px', color: 'white' }}>
                      隱私政策
                    </span>
                  </strong>
                </Link>
              </div>
            </div>
            <div className="language d-flex">
              <div className="iconarea d-flex">
                <div className="country ">
                  <Image
                    className="rounded-circle"
                    src="/taiwan.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-3">
                  <Image
                    className="rounded-circle"
                    src="/us.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-3">
                  <Image
                    className="rounded-circle"
                    src="/japan.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-3">
                  <Image
                    className="rounded-circle"
                    src="/south-korea.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-3">
                  <Image
                    className="rounded-circle"
                    src="/china.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
              </div>
              <div className="lanselect ms-3 mt-3">
                <select
                  className="form-select form-select-sm shadow-xl"
                  aria-label=".form-select-sm example"
                >
                  <option selected>繁體中文(台灣)</option>
                  <option value="1">English</option>
                  <option value="2">Japanese</option>
                  <option value="3">Korean</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
      {/* ad start */}
      <div
        className={style.adArea}
        style={{ visibility: isClose ? 'hidden' : '' }}
      >
        <Link href="">
          <Image
            className="rounded-circle shadow-lg"
            src="/ad.png"
            alt=""
            width={200}
            height={200}
            style={{ border: '3px solid #8e2626' }}
          />
          <span
            className="badge rounded-pill px-3 py-1"
            style={{ fontSize: '20px' }}
          >
            加入我們
          </span>
        </Link>
        <button
          type="button"
          className="btn translate-middle"
          data-bs-dismiss="card"
        >
          <IoCloseCircle
            style={{
              fontSize: '30px',
              color: '#e96d3f',
              backgroundColor: 'white',
              borderRadius: '50%',
            }}
            onClick={handleCloseBtn}
          />
        </button>
      </div>
      {/* ad end */}
    </>
  )
}
