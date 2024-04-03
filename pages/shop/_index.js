import { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
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
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
//import { useAuth } from '@/context/auth-context'

export default function Shop() {
  // Router-----
  const router = useRouter()
  // Auth-----
  //const { auth, getAuthHeader } = useAuth()
  // Date-----
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  // Loading bar-----
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 100)
    }
  }, [isLoading])
  // Products-----
  const [data, setData] = useState({
    success: false,
    page: 0,
    totalPages: 0,
    rows: [],
    cate: [],
  })

  useEffect(() => {
    fetch(`${PROD_LIST}${location.search}`)
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [router])

  // category
  const [mainSelect, setMainSelect] = useState(null)

  const qs = { ...router.query }

  return (
    <>
      <DefaultLayout pageName="productSearch">
        <Head>
          <title>探索商品 | DEAL-2ND HAND SHOP</title>
        </Head>
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
                <span className="breadcrumb-item active">探索商品</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Shop Start */}
        <div className="container-fluid ps-lg-5">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4 mt-5">
              {/* main-category start */}
              <div className="d-flex">
                <h3 className="mb-2" style={{ color: '#8e2626' }}>
                  <strong>商品分類篩選</strong>
                </h3>
              </div>
              <div className="mb-4 bg-light px-3 py-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  name=""
                  value={mainSelect}
                  onChange={(e) => setMainSelect(+e.target.value)}
                >
                  <option selected disabled value="disable">
                    開始搜尋吧！
                  </option>
                  {data.cate.map((v) => {
                    if (v.parent_id == 0) {
                      return (
                        <option
                          key={v.id}
                          style={{ color: '#8e2626' }}
                          value={v.id}
                        >
                          {v.category_name}
                        </option>
                      )
                    }
                  })}
                </select>
              </div>
              {/* main-category end */}
              {/* sub-category start */}
              <div className="d-flex">
                <h3 className="mb-2" style={{ color: '#8e2626' }}>
                  <strong>商品子分類篩選</strong>
                </h3>
              </div>
              <div className="mb-4 bg-light px-3 py-3">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected disabled value="disable">
                    開始搜尋吧！
                  </option>
                  {data.cate.map((v) =>
                    v.nodes.map((node) => {
                      if (node.parent_id === mainSelect) {
                        return (
                          <option
                            key={node.id}
                            style={{ color: '#8e2626' }}
                            value={node.id}
                          >
                            {node.category_name}
                          </option>
                        )
                      }
                    })
                  )}
                </select>
              </div>
              {/* sub-category end */}
              {/* Price Start */}
              <div className="d-flex">
                <h3 className="mb-2" style={{ color: '#8e2626' }}>
                  <strong>價格篩選</strong>
                </h3>
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
                      <strong style={{ fontSize: '18px' }}>全部商品</strong>
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
                      <strong style={{ fontSize: '18px' }}>$0 - $500</strong>
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
                      <strong style={{ fontSize: '18px' }}>$501 - $1000</strong>
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
                    <label className="custom-control-label" htmlFor="price-3">
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
                    <label className="custom-control-label" htmlFor="price-4">
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
                    <label className="custom-control-label" htmlFor="price-5">
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
                    <label className="custom-control-label" htmlFor="price-5">
                      <strong style={{ fontSize: '16px' }}>自訂</strong>
                    </label>
                    <input
                      type="text"
                      aria-label="lowest price"
                      className="form-control"
                      style={{ width: '40%' }}
                      placeholder="價格下限"
                    />
                    <span>
                      <strong>-</strong>
                    </span>
                    <input
                      type="text"
                      aria-label="highest price"
                      className="form-control"
                      style={{ width: '40%' }}
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
                      <strong style={{ fontSize: '18px' }}>全部商品</strong>
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
                      <strong style={{ fontSize: '18px' }}>二手商品</strong>
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
                      <strong style={{ fontSize: '18px' }}>全新商品</strong>
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
              </div>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="size-all"
                    />
                    <label className="custom-control-label" htmlFor="size-all">
                      <strong style={{ fontSize: '18px' }}>全部商品</strong>
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
                    <label className="custom-control-label" htmlFor="size-1">
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
                    <label className="custom-control-label" htmlFor="size-2">
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
                    <label className="custom-control-label" htmlFor="size-3">
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
                    <label className="custom-control-label" htmlFor="size-4">
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
                    <label className="custom-control-label" htmlFor="size-5">
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
                    <label className="custom-control-label" htmlFor="size-6">
                      <strong style={{ fontSize: '18px' }}>
                        2024/01-2024/12
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
                    <label className="custom-control-label" htmlFor="price-5">
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
                className="btn mt-3 ms-2"
                type="submit"
                style={{
                  backgroundColor: '#e96d3f',
                  color: 'white',
                }}
              >
                開始搜尋
              </button>
            </div>
            {/* Shop Sidebar End */}

            {/* Shop Product Start*/}
            <div className="col-lg-9 col-md-8 ps-5">
              <div className="row pb-3 mt-5">
                {data.rows.map((v) => {
                  return (
                    <div
                      key={v.id}
                      className="col-lg-4 col-md-12 col-sm-12 pb-1"
                    >
                      <div
                        className={`product-item bg-light ${style.productItem}`}
                        style={{ marginBottom: '60px' }}
                      >
                        <div className="overflow-hidden">
                          <Link
                            href=""
                            style={{ textDecoration: 'none', color: 'black' }}
                          >
                            <div
                              className=""
                              style={{ overflow: 'hidden', height: '360px' }}
                            >
                              <Image
                                className={`img-fluid w-100 ${style.imgAct}`}
                                src={
                                  v.product_photos.includes(',')
                                    ? `/${v.product_photos.split(',')[0]}`
                                    : `/${v.product_photos}`
                                }
                                alt=""
                                width={261}
                                height={100}
                                style={{ height: '100%', objectFit: 'cover' }}
                                accessKey=""
                              />
                            </div>
                          </Link>
                          <div className={style.productAction}>
                            <Link href="" className="">
                              <BsFillCartFill className={style.iconAInner} />
                            </Link>
                            <Link href="" className="">
                              <AiOutlineHeart className={style.iconBInner} />
                            </Link>
                          </div>
                        </div>
                        <Link
                          href=""
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
                          <div className="w-100 d-flex justify-content-start align-items-cneter ps-3 pe-2 mt-3">
                            <div className="">
                              <Image
                                className="mt-3 mb-1 rounded-circle"
                                src={`/${v.photo}`}
                                alt=""
                                width={70}
                                height={70}
                                title={v.nickname}
                                style={{ objectFit: 'cover' }}
                              ></Image>
                            </div>
                            <div className="text ms-3">
                              <div
                                className="text-decoration-none text-wrap text-truncate"
                                style={{
                                  fontSize: '18px',
                                  width: '250px',
                                  height: '100px',
                                  overflow: 'wrap',
                                }}
                              >
                                <strong>{v.product_name}</strong>
                              </div>
                              <div className="d-flex">
                                <div
                                  className="mt-2"
                                  style={{
                                    fontSize: '18px',
                                    color:
                                      v.product_status == '1'
                                        ? 'green'
                                        : '#e96d3f',
                                  }}
                                >
                                  <strong>
                                    {v.product_status == '1' ? '二手' : '全新'}
                                  </strong>
                                </div>
                                <span
                                  className="mt-2 ms-5"
                                  style={{ fontSize: '18px' }}
                                >
                                  <strong>${v.product_price}</strong>
                                </span>
                                <span
                                  className="mt-2 ms-5"
                                  style={{ fontSize: '18px' }}
                                >
                                  <strong style={{ color: '#8e2626' }}>
                                    {v.mc !== 0 ? v.mc : v.sc}c
                                  </strong>
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  )
                })}
                <div className="col-12">
                  <nav style={{ marginRight: '25px' }}>
                    <ul className="pagination pagination-lg justify-content-center">
                      <li className="page-item">
                        <Link className="page-link" href={`?page=1`}>
                          <FaAngleDoubleLeft style={{ color: '#e96d3f' }} />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          href={`?page=${Math.max(data.page - 1, 1)}`}
                        >
                          <FaAngleLeft style={{ color: '#e96d3f' }} />
                        </Link>
                      </li>
                      {Array.from({ length: 5 }, (v, i) => {
                        const p = data.page - 2 + i
                        if (p < 1 || p > data.totalPages) return null
                        const active = p === data.page ? 'active' : ''
                        const usp = new URLSearchParams({ ...qs, page: p })
                        return (
                          <li className={`page-item ${active}`} key={p}>
                            <Link
                              className="page-link"
                              style={{ color: active ? 'white' : '#e96d3f' }}
                              href={`?${usp}`}
                            >
                              {p}
                            </Link>
                          </li>
                        )
                      })}
                      <li className="page-item">
                        <Link
                          className="page-link"
                          href={`?page=${Math.min(
                            data.page + 1,
                            data.totalPages
                          )}`}
                        >
                          <FaAngleRight style={{ color: '#e96d3f' }} />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          href={`?page=${data.totalPages}`}
                        >
                          <FaAngleDoubleRight style={{ color: '#e96d3f' }} />
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
      </DefaultLayout>
    </>
  )
}
