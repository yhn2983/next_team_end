import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './prodSearch.module.css'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from 'react-icons/fa'
// hook------

export default function Shop() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  return (
    <>
      <DefaultLayout pageName="productSearch">
        <Head>
          <title>探索商品 | DEAL-2ND HAND SHOP</title>
        </Head>
        <div className="container-fliud">
          <div className="row">
            <div className="col">
              {/*  Breadcrumb Start */}
              <div className={`container-fluid mt-3 ${style.breadcrumbArea}`}>
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
                      <span className="breadcrumb-item active">探索商品</span>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Breadcrumb End */}

              {/* Shop Start */}
              <div className="container-fluid">
                <div className="row px-xl-5">
                  {/* Shop Sidebar Start */}
                  <div className="col-lg-3 col-md-4 mt-5">
                    {/* main-category start */}
                    <div className="d-flex">
                      <h3 className="mb-2" style={{ color: '#8e2626' }}>
                        <strong>商品分類篩選</strong>
                      </h3>
                      <span className={style.titleArea}></span>
                    </div>
                    <div className="mb-4 bg-light px-3 py-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected disabled>
                          開始搜尋吧！
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    {/* main-category end */}
                    {/* sub-category start */}
                    <div className="d-flex">
                      <h3 className="mb-2" style={{ color: '#8e2626' }}>
                        <strong>商品子分類篩選</strong>
                      </h3>
                      <span className={style.titleAreaB}></span>
                    </div>
                    <div className="mb-4 bg-light px-3 py-3">
                      <select
                        className="form-select"
                        aria-label="Default select example"
                      >
                        <option selected disabled>
                          開始搜尋吧！
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    {/* sub-category end */}
                    {/* Price Start */}
                    <div className="d-flex">
                      <h3 className="mb-2" style={{ color: '#8e2626' }}>
                        <strong>價格篩選</strong>
                      </h3>
                      <span className={style.titleAreaC}></span>
                    </div>
                    <div className="bg-light p-4 mb-4">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-all"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="price-all"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              全部商品
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            1000
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-1"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="price-1"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              $0 - $500
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            150
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-2"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="price-2"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              $501 - $1000
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            295
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-3"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              $1001 - $3000
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            246
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-4"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              $3001 - $5000
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            145
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="price-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="price-5"
                          >
                            <strong style={{ fontSize: '18px' }}>$5001↑</strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            168
                          </span>
                        </div>
                        <div className="custom-control d-flex align-items-center justify-content-between">
                          <label
                            className="custom-control-label"
                            htmlFor="price-5"
                          >
                            <strong style={{ fontSize: '18px' }}>自訂</strong>
                          </label>
                          <input
                            type="text"
                            aria-label="lowest price"
                            className="form-control"
                            style={{ width: '43%' }}
                            placeholder="價格下限"
                          />
                          <span>
                            <strong>-</strong>
                          </span>
                          <input
                            type="text"
                            aria-label="highest price"
                            className="form-control"
                            style={{ width: '43%' }}
                            placeholder="價格上限"
                          />
                        </div>
                      </form>
                    </div>
                    {/* Price End */}

                    {/* new & old Start */}
                    <div className="d-flex">
                      <h3 className="mb-2" style={{ color: '#8e2626' }}>
                        <strong>商品狀態篩選</strong>
                      </h3>
                      <span className={style.titleAreaD}></span>
                    </div>
                    <div className="bg-light p-4 mb-4">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-all"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="price-all"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              全部商品
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            1000
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-1"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="color-1"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              二手商品
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            150
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="color-2"
                          />
                          <label
                            className="custom-control-label mx-auto"
                            htmlFor="color-2"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              全新商品
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            295
                          </span>
                        </div>
                      </form>
                    </div>
                    {/* new & old  End */}
                    {/* created_at Start */}
                    <div className="d-flex">
                      <h3 className="mb-2" style={{ color: '#8e2626' }}>
                        <strong>上架時間篩選</strong>
                      </h3>
                      <span className={style.titleAreaD}></span>
                    </div>
                    <div className="bg-light p-4 mb-30">
                      <form>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-all"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-all"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              全部商品
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            1000
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-1"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-1"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2010/01 - 2012/12
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            150
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-2"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-2"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2013/01 - 2015/12
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            295
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-3"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-3"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2016/01 - 2018/12
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            246
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-4"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-4"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2019/01 - 2020/12
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            145
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-5"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-5"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2021/01 - 2023/12
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            145
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="size-6"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="size-6"
                          >
                            <strong style={{ fontSize: '18px' }}>
                              2024/01→
                            </strong>
                          </label>
                          <span
                            className="badge border font-weight-normal"
                            style={{ color: 'black', fontSize: '14px' }}
                          >
                            145
                          </span>
                        </div>
                        <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                          <label
                            className="custom-control-label"
                            htmlFor="price-5"
                          >
                            <strong style={{ fontSize: '18px' }}>自訂</strong>
                          </label>
                          <div className="d-flex" style={{ width: '90%' }}>
                            <DatePicker
                              className="form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                            <div className="mt-2">
                              <strong> - </strong>
                            </div>
                            <DatePicker
                              className="form-control"
                              selected={endDate}
                              onChange={(date) => setStartDate(date)}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* created_at End */}
                    <button
                      class="btn mt-3"
                      type="submit"
                      style={{
                        backgroundColor: '#e96d3f',
                        color: 'white',
                        marginLeft: '210px',
                      }}
                    >
                      開始搜尋
                    </button>
                  </div>
                  {/* Shop Sidebar End */}

                  {/* Shop Product Start*/}
                  <div className="col-lg-9 col-md-8">
                    <div className="row pb-3 mt-5">
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
                        <div
                          className={`product-item bg-light ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden">
                            <div className="" style={{ overflow: 'hidden' }}>
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
                      <div className="col-12">
                        <nav style={{ marginRight: '50px' }}>
                          <ul className="pagination pagination-lg justify-content-center">
                            <li className="page-item">
                              <Link className="page-link" href="#">
                                <FaAngleDoubleLeft
                                  style={{ color: '#e96d3f' }}
                                />
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" href="#">
                                <FaAngleLeft style={{ color: '#e96d3f' }} />
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" href="#">
                                <span style={{ color: '#e96d3f' }}>1</span>
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" href="#">
                                <FaAngleRight style={{ color: '#e96d3f' }} />
                              </Link>
                            </li>
                            <li className="page-item">
                              <Link className="page-link" href="#">
                                <FaAngleDoubleRight
                                  style={{ color: '#e96d3f' }}
                                />
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* Shop Product End */}
                </div>
              </div>
              {/* Shop End */}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
