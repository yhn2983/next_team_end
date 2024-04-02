import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './prodA.module.css'
// react bootstrap
// react icons-----
import { AiOutlineSmallDash, AiOutlineHeart } from 'react-icons/ai'
import { BsFillCartFill, BsSearchHeart } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
// hook------

export default function ProdA() {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 mt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash className="me-2" />
              <BsSearchHeart className="mb-2" />
              探索商品
              <AiOutlineSmallDash className="ms-2" />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden ">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                  <Link href="" className="">
                    <IoSearch className={style.iconCInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
            >
              <div className="overflow-hidden">
                <div
                  className="position-relative"
                  style={{ overflow: 'hidden' }}
                >
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={266}
                    height={266}
                  />
                </div>
                <div className={style.productAction}>
                  <Link href="" className="w-50">
                    <BsFillCartFill className={style.iconAInner} />
                  </Link>
                  <Link href="" className="w-50">
                    <AiOutlineHeart className={style.iconBInner} />
                  </Link>
                </div>
              </div>
              <div class="text-center py-4">
                <Link class="h6 text-decoration-none text-truncate" href="">
                  <h5>
                    <strong>商品名稱</strong>
                  </h5>
                </Link>
                <h6 className="mt-3">$商品價格</h6>
                <h6>全新or二手</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row px-xl-5 text-center">
          <div className="col-12">
            <Link href="">
              <button type="button" className={style.moreBtn} href="">
                <strong>探索更多</strong>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* Products End */}
    </>
  )
}
