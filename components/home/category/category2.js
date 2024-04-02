import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './category.module.css'
// react bootstrap
// react icons-----
import { AiTwotoneGift, AiOutlineSmallDash } from 'react-icons/ai'
// hook------
// config-----
import { API_SERVER } from '@/configs/config-r'

export default function Category() {
  return (
    <>
      {/* Categories Start */}
      <div
        className="container-fluid pt-5 mt-5"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash className="me-2" />
              <AiTwotoneGift className="mb-2" />
              商品分類
              <AiOutlineSmallDash className="ms-2" />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{
                    width: '100px',
                    height: '100px',
                  }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/gift.jpg"
                    alt=""
                    width={100}
                    height={100}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>免費禮物</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/computer.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>電腦科技</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/phone.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>手機配件</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/man.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>男裝服飾</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/woman-sm.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>女裝服飾</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/beauty.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>美妝保養</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/luxury.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>名牌精品</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/game.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>電玩遊戲</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/earphone.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>耳機錄音</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/camera.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>相機拍攝</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/home.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>家具家居</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/tv.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>電視電器</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/baby.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>嬰兒孩童</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/health.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>健康營養品</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/sport.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>運動用品</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/food.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>食物飲料</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/pet.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>寵物用品</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/ticket.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>門票票券</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/car.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>機車汽車</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <Link
              className="text-decoration-none"
              style={{ color: '#8e2626' }}
              href=""
            >
              <div
                className={`cat-item img-zoom d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                style={{ width: '80%' }}
              >
                <div
                  className="overflow-hidden rounded"
                  style={{ width: '100px', height: '100px' }}
                >
                  <Image
                    className={`img-fluid w-100 h-100 rounded ${style.item}`}
                    src="/other.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-fill pl-3 ms-3 mt-1">
                  <h5>
                    <strong>其他其他</strong>
                  </h5>
                  <small className={style.textBody}>100 Products</small>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Categories End */}
    </>
  )
}
