import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import footerStyle from './footer.module.css'
// react bootstrap
// react icons-----
// hook------

export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div
        className={`container-fluid text-secondary mt-5 pt-5 ${footerStyle.footerArea}`}
      >
        <div className="row px-xl-5">
          <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
            <h5 className="text-secondary text-uppercase mb-4">
              <strong>
                <i className="fa-solid fa-user-group"></i>
                <span className={footerStyle.footerContent}>廣告合作夥伴</span>
              </strong>
            </h5>
            <div className="adboxTop d-flex">
              <div
                className={`me-5 d-flex align-items-center justify-content-center ${footerStyle.adbox}`}
              >
                <Link href=""></Link>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${footerStyle.adbox}`}
              >
                <Link href=""></Link>
              </div>
            </div>
            <div className="adboxBottom d-flex mt-4">
              <div
                className={`me-5 d-flex align-items-center justify-content-center ${footerStyle.adbox}`}
              >
                <Link href=""></Link>
              </div>
              <div
                className={`d-flex align-items-center justify-content-center ${footerStyle.adbox}`}
              >
                <Link href=""></Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <i className="fa-regular fa-hand-point-down"></i>
                    <span className={footerStyle.footerContent}>探索DEAL</span>
                  </strong>
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-3" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>探索商品</span>
                  </Link>
                  <Link className="text-secondary mb-3" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>隨機探索</span>
                  </Link>
                  <Link className="text-secondary mb-3" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>
                      領取優惠券
                    </span>
                  </Link>
                  <Link className="text-secondary mb-3" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>
                      小碳點等級
                    </span>
                  </Link>
                  <Link className="text-secondary mb-3" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>加入DEAL</span>
                  </Link>
                  <Link className="text-secondary" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>廣告合作</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <i className="fa-solid fa-hand-point-down"></i>
                    <span className={footerStyle.footerContent}>了解DEAL</span>
                  </strong>
                </h5>
                <div className="d-flex flex-column justify-content-start">
                  <Link className="text-secondary mb-3 ps-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>DEAL介紹</span>
                  </Link>
                  <Link className="text-secondary mb-3 ps-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>ESG介紹</span>
                  </Link>
                  <Link className="text-secondary mb-3 ps-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>隱私條款</span>
                  </Link>
                  <Link className="text-secondary mb-3 ps-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>使用條款</span>
                  </Link>
                  <Link className="text-secondary mb-3 ps-2" href="#">
                    <i className="fa fa-angle-right mr-2"></i>
                    <span className={footerStyle.selectOptions}>幫助中心</span>
                  </Link>
                  <Link className="text-secondary" href="#">
                    <i className="fa fa-angle-right mr-2 ps-2"></i>
                    <span className={footerStyle.selectOptions}>聯繫我們</span>
                  </Link>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <h5 className="text-secondary text-uppercase mb-4">
                  <strong>
                    <i className="fa-solid fa-hands-asl-interpreting"></i>
                    <span className={footerStyle.footerContent}>
                      成為DEAL會員
                    </span>
                  </strong>
                </h5>
                <span className={footerStyle.selectOptions2}>
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
                  <span style={{ color: 'white' }}>Follow Us</span>
                </h6>
                <div className="d-flex">
                  <Link className="btn btn-primary btn-square mr-2" href="#">
                    <i className="fab fa-twitter text-secondary"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square mr-2" href="#">
                    <i className="fab fa-facebook-f text-secondary"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square mr-2" href="#">
                    <i className="fab fa-linkedin-in text-secondary"></i>
                  </Link>
                  <Link className="btn btn-primary btn-square" href="#">
                    <i className="fab fa-instagram text-secondary"></i>
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
          <div className="col d-flex align-items-center justify-content-around ">
            <div className="d-flex">
              <div className="logo-pic me-1">
                <Image
                  className="rounded-circle"
                  src="/logo-sm.png"
                  alt=""
                  width={50}
                  height={50}
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
                  href="help.html"
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
                  href=""
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
                  href=""
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
                  href=""
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
                  href=""
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
                  href=""
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
                <div className="country ms-2">
                  <Image
                    className="rounded-circle"
                    src="/us.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-2">
                  <Image
                    className="rounded-circle"
                    src="/japan.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-2">
                  <Image
                    className="rounded-circle"
                    src="/south-korea.png"
                    alt=""
                    width={512}
                    height={512}
                    style={{ width: '50px', height: '50px' }}
                  />
                </div>
                <div className="country ms-2">
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
              <div className="lanselect ms-3">
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
    </>
  )
}
