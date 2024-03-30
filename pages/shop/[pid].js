import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './detail.module.css'
// react bootstrap
import Carousel from 'react-bootstrap/Carousel'
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { ImHammer2 } from 'react-icons/im'
import { TbArrowsExchange2 } from 'react-icons/tb'
// hook------

export default function Detail() {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>商品詳細內容 | DEAL-2ND HAND SHOP</title>
        </Head>
        {/* Breadcrumb Start */}
        <div className={`container-fluid ${style.breadcrumbArea}`}>
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb mb-30" style={{ fontSize: '20px' }}>
                <Link
                  className="breadcrumb-item"
                  style={{ textDecoration: 'none' }}
                  href="/"
                >
                  <span>首頁</span>
                </Link>
                <Link
                  className="breadcrumb-item"
                  style={{ textDecoration: 'none' }}
                  href="/shop/product-search"
                >
                  <span>探索商品</span>
                </Link>
                <span className="breadcrumb-item active">商品詳細內容</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Shop Detail Start */}
        <div className="container-fluid pb-5 mt-4">
          <div className="row px-xl-5">
            <div className="col-lg-5 mb-30">
              <Carousel fade>
                <Carousel.Item>
                  <Image
                    src="/pot.jpg"
                    alt=""
                    width={1000}
                    height={600}
                    style={{ objectFit: 'cover', opacity: '0.9' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-lg-7 h-auto">
              <div className="h-100 bg-light p-5">
                <h2 style={{ fontWeight: '900' }}>
                  <strong style={{ color: '#8e2626' }}>商品名稱</strong>
                </h2>
                <p className="mb-4 ms-2 mt-3" style={{ fontSize: '20px' }}>
                  <strong style={{ color: '#8e2626' }}>賣家：</strong>
                </p>
                <div className="d-flex">
                  <p className="mb-4 ms-2" style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#8e2626' }}>商品價格：</strong>
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: '20px',
                      marginLeft: '420px',
                    }}
                  >
                    <strong style={{ color: '#8e2626' }}>商品數量：</strong>
                  </p>
                </div>
                <div className="d-flex">
                  <p className="mb-4 ms-2" style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#8e2626' }}>商品主分類：</strong>
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: '20px',
                      marginLeft: '400px',
                    }}
                  >
                    <strong style={{ color: '#8e2626' }}>商品子分類：</strong>
                  </p>
                </div>
                <div className="d-flex">
                  <p className="mb-4 ms-2" style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#8e2626' }}>商品狀態：</strong>
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: '20px',
                      marginLeft: '420px',
                    }}
                  >
                    <strong style={{ color: '#8e2626' }}>上下架狀態：</strong>
                  </p>
                </div>
                <div className="d-flex">
                  <p className="mb-4 ms-2" style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#8e2626' }}>商品上架時間：</strong>
                  </p>
                  <p
                    className="mb-4"
                    style={{
                      fontSize: '20px',
                      marginLeft: '380px',
                    }}
                  >
                    <strong style={{ color: '#8e2626' }}>商品更新時間：</strong>
                  </p>
                </div>
                <hr />
                <div className="d-flex align-items-center mb-4 pt-2 ms-2 mt-5">
                  <div
                    className="input-group quantity mr-3"
                    style={{ width: '130px' }}
                  >
                    <div className="input-group-btn">
                      <button
                        className="btn btn-minus"
                        style={{ backgroundColor: '#8e2626' }}
                      >
                        <FaMinus style={{ color: 'white' }} />
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control bg-light border-1 text-center"
                      value="1"
                    />
                    <div className="input-group-btn">
                      <button
                        className="btn btn-plus"
                        style={{ backgroundColor: '#8e2626' }}
                      >
                        <FaPlus style={{ color: 'white' }} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn px-3 ms-4"
                    style={{ backgroundColor: '#e96d3f' }}
                  >
                    <BsFillCartFill
                      className=""
                      style={{ color: 'white', fontSize: '20px' }}
                    />{' '}
                    <span style={{ color: 'white' }}>加入購物車</span>
                  </button>
                </div>
                <div className="d-flex">
                  <button
                    className="btn px-3 ms-2"
                    style={{ backgroundColor: '#195a98', color: 'white' }}
                  >
                    <ImHammer2 style={{ fontSize: '20px' }} /> 議價
                  </button>
                  <button
                    className="btn px-3 ms-4"
                    style={{ backgroundColor: '#0f5808', color: 'white' }}
                  >
                    <TbArrowsExchange2 style={{ fontSize: '20px' }} /> 以物易物
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row px-xl-5 mt-5">
            <div className="col">
              <div className="bg-light p-30">
                <div className="nav nav-tabs mb-4">
                  <Link
                    className="nav-item nav-link text-dark active"
                    data-toggle="tab"
                    href="#tab-pane-1"
                  >
                    <strong style={{ fontSize: '20px' }}>商品描述</strong>
                  </Link>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <p className="px-4 pb-4" style={{ fontSize: '18px' }}>
                      Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                      sea. Consetetur vero aliquyam invidunt duo dolores et duo
                      sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                      consetetur invidunt sed sed et, lorem duo et eos elitr,
                      sadipscing kasd ipsum rebum diam. Dolore diam stet rebum
                      sed tempor kasd eirmod. Takimata kasd ipsum accusam
                      sadipscing, eos dolores sit no ut diam consetetur duo
                      justo est, sit sanctus diam tempor aliquyam eirmod nonumy
                      rebum dolor accusam, ipsum kasd eos consetetur at sit
                      rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr
                      sanctus eirmod takimata dolor ea invidunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Shop Detail End */}
        <hr className="mx-5" />
        {/* Products Start */}
        <div className="container-fluid py-5 ms-2">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="pr-3" style={{ color: '#8e2626' }}>
              <strong>您可能也有興趣...</strong>
            </span>
          </h2>
          <div className="row px-xl-5">
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div
                  className={`product-item bg-light ${style.productItem}`}
                  style={{ marginBottom: '60px' }}
                >
                  <div className="overflow-hidden">
                    <div style={{ overflow: 'hidden' }}>
                      <Image
                        className={`img-fluid w-100 ${style.imgAct}`}
                        src="/pot.jpg"
                        alt=""
                        width={261}
                        height={180}
                      />
                    </div>
                    <div className={style.productAction}>
                      <Link href="" className="">
                        <BsFillCartFill className={style.iconAInner} />
                      </Link>
                      <Link href="" className="">
                        <AiOutlineHeart className={style.iconBInner} />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                    <div className="memberInfor">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={60}
                        height={60}
                      ></Image>
                      <div className="userId mt-2">Nickname</div>
                    </div>
                    <div className="mt-3">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        href=""
                        style={{ fontSize: '20px' }}
                      >
                        <strong>商品名稱</strong>
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-3">
                        <h5 className="" style={{ fontSize: '18px' }}>
                          $價格
                        </h5>
                      </div>
                    </div>
                    <div className="">
                      <span>全新or二手</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div
                  className={`product-item bg-light ${style.productItem}`}
                  style={{ marginBottom: '60px' }}
                >
                  <div className="overflow-hidden">
                    <div style={{ overflow: 'hidden' }}>
                      <Image
                        className={`img-fluid w-100 ${style.imgAct}`}
                        src="/pot.jpg"
                        alt=""
                        width={261}
                        height={180}
                      />
                    </div>
                    <div className={style.productAction}>
                      <Link href="" className="">
                        <BsFillCartFill className={style.iconAInner} />
                      </Link>
                      <Link href="" className="">
                        <AiOutlineHeart className={style.iconBInner} />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                    <div className="memberInfor">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={60}
                        height={60}
                      ></Image>
                      <div className="userId mt-2">Nickname</div>
                    </div>
                    <div className="mt-3">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        href=""
                        style={{ fontSize: '20px' }}
                      >
                        <strong>商品名稱</strong>
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-3">
                        <h5 className="" style={{ fontSize: '18px' }}>
                          $價格
                        </h5>
                      </div>
                    </div>
                    <div className="">
                      <span>全新or二手</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div
                  className={`product-item bg-light ${style.productItem}`}
                  style={{ marginBottom: '60px' }}
                >
                  <div className="overflow-hidden">
                    <div style={{ overflow: 'hidden' }}>
                      <Image
                        className={`img-fluid w-100 ${style.imgAct}`}
                        src="/pot.jpg"
                        alt=""
                        width={261}
                        height={180}
                      />
                    </div>
                    <div className={style.productAction}>
                      <Link href="" className="">
                        <BsFillCartFill className={style.iconAInner} />
                      </Link>
                      <Link href="" className="">
                        <AiOutlineHeart className={style.iconBInner} />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                    <div className="memberInfor">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={60}
                        height={60}
                      ></Image>
                      <div className="userId mt-2">Nickname</div>
                    </div>
                    <div className="mt-3">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        href=""
                        style={{ fontSize: '20px' }}
                      >
                        <strong>商品名稱</strong>
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-3">
                        <h5 className="" style={{ fontSize: '18px' }}>
                          $價格
                        </h5>
                      </div>
                    </div>
                    <div className="">
                      <span>全新or二手</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="">
                <div
                  className={`product-item bg-light ${style.productItem}`}
                  style={{ marginBottom: '60px' }}
                >
                  <div className="overflow-hidden">
                    <div style={{ overflow: 'hidden' }}>
                      <Image
                        className={`img-fluid w-100 ${style.imgAct}`}
                        src="/pot.jpg"
                        alt=""
                        width={261}
                        height={180}
                      />
                    </div>
                    <div className={style.productAction}>
                      <Link href="" className="">
                        <BsFillCartFill className={style.iconAInner} />
                      </Link>
                      <Link href="" className="">
                        <AiOutlineHeart className={style.iconBInner} />
                      </Link>
                    </div>
                  </div>
                  <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                    <div className="memberInfor">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={60}
                        height={60}
                      ></Image>
                      <div className="userId mt-2">Nickname</div>
                    </div>
                    <div className="mt-3">
                      <Link
                        className="h6 text-decoration-none text-truncate"
                        href=""
                        style={{ fontSize: '20px' }}
                      >
                        <strong>商品名稱</strong>
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-3">
                        <h5 className="" style={{ fontSize: '18px' }}>
                          $價格
                        </h5>
                      </div>
                    </div>
                    <div className="">
                      <span>全新or二手</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Products End */}
      </DefaultLayout>
    </>
  )
}
