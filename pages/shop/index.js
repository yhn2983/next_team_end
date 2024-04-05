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
import { IoSearch } from 'react-icons/io5'
import { GoDash } from 'react-icons/go'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
import { MarkdownFill } from 'react-bootstrap-icons'
// hook------
//import { useAuth } from '@/context/auth-context'

export default function Shop() {
  // Router-----
  const router = useRouter()
  // Auth-----
  // const { auth, getAuthHeader } = useAuth()
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

  // Pages
  const startPage = Math.max(1, data.page - 2)
  const endPage = Math.min(data.totalPages, startPage + 4)

  // category
  const [mainSelect, setMainSelect] = useState(null)

  // shop search
  const onmultiSearch = (e) => {
    e.preventDefault()
    let searchMain = e.currentTarget.searchMain?.value
    let searchSub = e.currentTarget.searchSub?.value
    let searchPriceA = e.currentTarget.searchPriceA?.value
    let searchPriceB = e.currentTarget.searchPriceB?.value
    let searchPriceC = e.currentTarget.searchPriceC?.value
    let searchPriceD = e.currentTarget.searchPriceD?.value
    let searchPriceE = e.currentTarget.searchPriceE?.value
    let searchStart = e.currentTarget.searchStart?.value
    let searchEnd = e.currentTarget.searchEnd?.value
    let searchProdStatusA = e.currentTarget.searchProdStatusA?.value
    let searchProdStatusB = e.currentTarget.searchProdStatusB?.value
    let searchDateA = e.currentTarget.searchDateA?.value
    let searchDateB = e.currentTarget.searchDateB?.value
    let searchDateC = e.currentTarget.searchDateC?.value
    let searchDateD = e.currentTarget.searchDateD?.value
    let searchDateE = e.currentTarget.searchDateE?.value
    let searchDateF = e.currentTarget.searchDateF?.value
  }

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
        <div className="container-fluid">
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
                  name="searchMain"
                  value={mainSelect}
                  onChange={(e) => setMainSelect(+e.target.value)}
                  defaultValue={router.query.searchMain}
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
                            name="searchSub"
                            defaultValue={router.query.searchSub}
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
              <div className="bg-light p-3 mb-4">
                <form>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="all"
                    />
                    <label className="form-check-label mx-auto" htmlFor="all">
                      <strong style={{ fontSize: '16px' }}>全部商品</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      1000
                    </span>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchPriceA"
                      name="flexRadioDefault"
                      defaultValue={router.query.searchPriceA}
                    />
                    <label
                      className="form-check-label mx-auto"
                      htmlFor="searchPriceA"
                    >
                      <strong style={{ fontSize: '16px' }}>$0 - $500</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      150
                    </span>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchPriceB"
                      name="flexRadioDefault"
                      defaultValue={router.query.searchPriceB}
                    />
                    <label
                      className="form-check-label mx-auto"
                      htmlFor="searchPriceB"
                    >
                      <strong style={{ fontSize: '16px' }}>$501 - $1000</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      295
                    </span>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchPriceC"
                      name="flexRadioDefault"
                      defaultValue={router.query.searchPriceC}
                    />
                    <label
                      className="form-check-label mx-auto"
                      htmlFor="searchPriceC"
                    >
                      <strong style={{ fontSize: '16px' }}>
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
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchPriceD"
                      name="flexRadioDefault"
                      defaultValue={router.query.searchPriceD}
                    />
                    <label
                      className="form-check-label mx-auto"
                      htmlFor="searchPriceD"
                    >
                      <strong style={{ fontSize: '16px' }}>
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
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchPriceE"
                      name="flexRadioDefault"
                      defaultValue={router.query.searchPriceE}
                    />
                    <label
                      className="form-check-label mx-auto"
                      htmlFor="searchPriceE"
                    >
                      <strong style={{ fontSize: '16px' }}>$5001↑</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      168
                    </span>
                  </div>
                  <div className="custom-control">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-check d-flex align-items-center justify-content-center mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="searchPrice"
                            name="flexRadioDefault"
                          />
                          <label
                            className="form-check-label mx-auto"
                            htmlFor="searchPrice"
                          >
                            <strong style={{ fontSize: '16px' }}>
                              自訂區間
                            </strong>
                          </label>
                          <div className="d-flex">
                            <GoDash />
                            <GoDash />
                            <GoDash />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center justify-content-between mx-auto">
                        <input
                          type="text"
                          aria-label="lowest price"
                          className="form-control"
                          style={{ width: '48%' }}
                          placeholder="價格下限"
                          name="priceStart"
                          defaultValue={router.query.priceStart}
                        />
                        <span>
                          <strong>-</strong>
                        </span>
                        <input
                          type="text"
                          aria-label="highest price"
                          className="form-control"
                          style={{ width: '48%' }}
                          placeholder="價格上限"
                          name="priceEnd"
                          defaultValue={router.query.priceEnd}
                        />
                      </div>
                    </div>
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
              <div className="bg-light p-3 mb-4">
                <form>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault2"
                      id="all"
                    />
                    <label className="form-check-label mx-auto" htmlFor="all">
                      <strong style={{ fontSize: '16px' }}>全部商品</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      1000
                    </span>
                  </div>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="searchProdStatusA"
                      name="flexRadioDefault2"
                      defaultValue={router.query.searchProdStatusA}
                    />
                    <label
                      className="custom-control-label mx-auto"
                      htmlFor="searchProdStatusA"
                    >
                      <strong style={{ fontSize: '16px' }}>二手商品</strong>
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
                      className="form-check-input"
                      type="radio"
                      id="searchProdStatusB"
                      name="flexRadioDefault2"
                      defaultValue={router.query.searchProdStatusB}
                    />
                    <label
                      className="custom-control-label mx-auto"
                      htmlFor="searchProdStatusB"
                    >
                      <strong style={{ fontSize: '16px' }}>全新商品</strong>
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
              <div className="bg-light p-3 mb-30">
                <form>
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault3"
                      id="date-all"
                    />
                    <label className="custom-control-label" htmlFor="date-all">
                      <strong style={{ fontSize: '16px' }}>全部商品</strong>
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateA"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateA}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateA"
                    >
                      <strong style={{ fontSize: '16px' }}>
                        2010年 - 2012年
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateB"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateB}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateB"
                    >
                      <strong style={{ fontSize: '16px' }}>
                        2013年 - 2015年
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateC"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateC}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateC"
                    >
                      <strong style={{ fontSize: '16px' }}>
                        2016年 - 2018年
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateD"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateD}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateD"
                    >
                      <strong style={{ fontSize: '16px' }}>
                        2019年 - 2021年
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateE"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateE}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateE"
                    >
                      <strong style={{ fontSize: '16px' }}>
                        2022年 - 2023年
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
                      className="form-check-input"
                      type="radio"
                      id="searchDateF"
                      name="flexRadioDefault3"
                      defaultValue={router.query.searchDateF}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="searchDateF"
                    >
                      <strong style={{ fontSize: '16px' }}>2024年</strong>
                    </label>
                    <span
                      className="badge border font-weight-normal"
                      style={{ color: 'black', fontSize: '14px' }}
                    >
                      145
                    </span>
                  </div>
                  <div className="custom-control">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-check d-flex align-items-center justify-content-center mb-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            id="searchPrice"
                            name="flexRadioDefault"
                          />
                          <label
                            className="form-check-label mx-auto"
                            htmlFor="searchPrice"
                          >
                            <strong style={{ fontSize: '16px' }}>
                              自訂區間
                            </strong>
                          </label>
                          <div className="d-flex">
                            <GoDash />
                            <GoDash />
                            <GoDash />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex align-items-center justify-content-between">
                        <DatePicker
                          className="form-control"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          style={{ width: '50%' }}
                          name="searchDateStart"
                          defaultValue={router.query.searchDateStart}
                        />
                        <div className="">
                          <strong> - </strong>
                        </div>
                        <DatePicker
                          className="form-control"
                          selected={endDate}
                          onChange={(date) => setStartDate(date)}
                          style={{ width: '50%' }}
                          name="searchDateEnd"
                          defaultValue={router.query.searchDateEnd}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* created_at End */}
              <div className="text-center">
                <button
                  className={`btn mt-3 ${style.searchBtn}`}
                  type="submit"
                  style={{
                    backgroundColor: '#e96d3f',
                    color: 'white',
                  }}
                >
                  <strong>開始搜尋</strong>
                </button>
              </div>
            </div>
            {/* Shop Sidebar End */}

            {/* Shop Product Start*/}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3 mt-5">
                {data.rows.map((v, i) => {
                  return (
                    <div key={i} className="col-lg-4 col-md-12 col-sm-12 pb-1">
                      <Link
                        href=""
                        style={{ textDecoration: 'none', color: 'black' }}
                      >
                        <div
                          className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
                          style={{ marginBottom: '60px' }}
                        >
                          <div className="overflow-hidden ">
                            <div
                              className="position-relative"
                              style={{ overflow: 'hidden' }}
                            >
                              <Image
                                className={`img-fluid w-100 ${style.imgAct}`}
                                src={
                                  v.product_photos.includes(',')
                                    ? `/${v.product_photos.split(',')[0]}`
                                    : `/${v.product_photos}`
                                }
                                alt=""
                                width={266}
                                height={266}
                                style={{ height: '266px', objectFit: 'cover' }}
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
                          <div
                            className="text-center py-3 px-2"
                            style={{ height: '160px' }}
                          >
                            <div
                              className="text-wrap text-truncate"
                              style={{ height: '70%' }}
                              href=""
                            >
                              <h5>
                                <strong className="">{v.product_name}</strong>
                              </h5>
                            </div>
                            <div className="d-flex justify-content-center ">
                              <div
                                className=""
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
                              &nbsp;
                              <div className="" style={{ fontSize: '18px' }}>
                                <strong>${v.product_price}</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
              <div className="row mb-5">
                <div className="col-lg-12">
                  <nav>
                    <ul className="pagination pagination justify-content-center">
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
                      {Array.from(
                        { length: endPage - startPage + 1 },
                        (v, i) => {
                          const p = startPage + i
                          {
                            /* if (p < 1 || p > data.totalPages) return null */
                          }
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
                        }
                      )}
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
