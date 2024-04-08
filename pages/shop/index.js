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
import toast, { Toaster } from 'react-hot-toast'
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
import { useCart } from '@/hooks/use-cart'
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
    searchMain: '',
    searchSub: '',
    searchPriceA: '',
    searchPriceB: '',
    searchPriceC: '',
    searchPriceD: '',
    searchPriceE: '',
    priceStart: '',
    priceEnd: '',
    searchProdStatusA: '',
    searchProdStatusB: '',
    searchDateA: '',
    searchDateB: '',
    searchDateC: '',
    searchDateD: '',
    searchDateE: '',
    searchDateF: '',
    searchDateStart: '',
    searchDateEnd: '',
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
  const [subSelect, setSubSelect] = useState(null)

  // shop search
  const onmultiSearch = (e) => {
    e.preventDefault()

    const queryParams = new URLSearchParams()

    const { currentTarget } = e

    // Category search
    const searchMain = currentTarget.searchMain?.value
      ? currentTarget.searchMain.value
      : ''
    const searchSub = currentTarget.searchSub?.value
      ? currentTarget.searchSub.value
      : ''

    // Price search
    const searchPriceA = currentTarget.searchPrice.checked
      ? currentTarget.searchPrice.value
      : ''
    const searchPriceB = currentTarget.searchPrice.checked
      ? currentTarget.searchPrice.value
      : ''
    const searchPriceC = currentTarget.searchPrice.checked
      ? currentTarget.searchPrice.value
      : ''
    const searchPriceD = currentTarget.searchPrice.checked
      ? currentTarget.searchPrice.value
      : ''
    const searchPriceE = currentTarget.searchPrice.checked
      ? currentTarget.searchPrice.value
      : ''

    // Product status search
    const searchProdStatusA = currentTarget.searchProdStatus.checked
      ? currentTarget.searchProdStatus.value
      : ''
    const searchProdStatusB = currentTarget.searchProdStatus.checked
      ? currentTarget.searchProdStatus.value
      : ''

    // Date search
    const searchDateA = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateB = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateC = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateD = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateE = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateF = currentTarget.searchDate.checked
      ? currentTarget.searchDate.value
      : ''
    const searchDateStart = currentTarget.searchDateStart.checked
      ? currentTarget.searchDateStart.value
      : ''
    const searchDateEnd = currentTarget.searchDateEnd.checked
      ? currentTarget.searchDateEnd.value
      : ''

    // Append to queryParams only if checked
    queryParams.append('searchMain', searchMain)
    queryParams.append('searchSub', searchSub)
    queryParams.append('searchPriceA', searchPriceA)
    queryParams.append('searchPriceB', searchPriceB)
    queryParams.append('searchPriceC', searchPriceC)
    queryParams.append('searchPriceD', searchPriceD)
    queryParams.append('searchPriceE', searchPriceE)
    queryParams.append('searchProdStatusA', searchProdStatusA)
    queryParams.append('searchProdStatusB', searchProdStatusB)
    queryParams.append('searchDateA', searchDateA)
    queryParams.append('searchDateB', searchDateB)
    queryParams.append('searchDateC', searchDateC)
    queryParams.append('searchDateD', searchDateD)
    queryParams.append('searchDateE', searchDateE)
    queryParams.append('searchDateF', searchDateF)
    queryParams.append('searchDateStart', searchDateStart)
    queryParams.append('searchDateEnd', searchDateEnd)

    router.push(`/shop?${queryParams}`)
  }

  // cart
  const { addItem } = useCart()
  const notify = (productName) => {
    const msgBox = (
      <div>
        <p>{productName + ' 已成功加入購物車'}</p>
        <button
          onClick={() => {
            router.push('/shop/cart')
          }}
        >
          加入購物車
        </button>
      </div>
    )
    toast.success(msgBox)
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
              <form role="search" onSubmit={onmultiSearch}>
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
                            name="searchMain"
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
                    onChange={(e) => setSubSelect(+e.target.value)}
                    value={subSelect}
                    defaultValue={router.query.searchSub}
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
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="searchPrice"
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
                      name="searchPrice"
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
                      name="searchPrice"
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
                      name="searchPrice"
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
                      name="searchPrice"
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
                      name="searchPrice"
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
                    <div className="form-check d-flex align-items-center justify-content-center mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="searchPrice"
                        name="searchPrice"
                      />
                      <label
                        className="form-check-label mx-auto"
                        htmlFor="searchPrice"
                      >
                        <strong style={{ fontSize: '16px' }}>自訂區間</strong>
                      </label>
                      <div className="d-flex">
                        <GoDash />
                        <GoDash />
                        <GoDash />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mx-auto">
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
                {/* Price End */}

                {/* new & old Start */}
                <div className="d-flex">
                  <h3 className="mb-2" style={{ color: '#8e2626' }}>
                    <strong>商品狀態篩選</strong>
                  </h3>
                </div>
                <div className="bg-light p-3 mb-4">
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="searchProdStatus"
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
                      name="searchProdStatus"
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
                      name="searchProdStatus"
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
                </div>
                {/* new & old  End */}
                {/* created_at Start */}
                <div className="d-flex">
                  <h3 className="mb-2" style={{ color: '#8e2626' }}>
                    <strong>上架時間篩選</strong>
                  </h3>
                </div>
                <div className="bg-light p-3 mb-30">
                  <div className="form-check d-flex align-items-center justify-content-between mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="searchDate"
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
                      name="searchDate"
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
                      name="searchDate"
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
                      name="searchDate"
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
                      name="searchDate"
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
                      name="searchDate"
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
                      name="searchDate"
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
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="searchPrice"
                        name="searchDate"
                      />
                      <label
                        className="form-check-label mx-auto"
                        htmlFor="searchPrice"
                      >
                        <strong style={{ fontSize: '16px' }}>自訂區間</strong>
                      </label>
                      <div className="d-flex">
                        <GoDash />
                        <GoDash />
                        <GoDash />
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
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
              </form>
            </div>
            {/* Shop Sidebar End */}

            {/* Shop Product Start*/}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3 mt-5">
                {data.rows.map((v, i) => {
                  return (
                    <div key={i} className="col-lg-4 col-md-12 col-sm-12 pb-1">
                      <div
                        className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
                        style={{ marginBottom: '60px' }}
                      >
                        <div className="overflow-hidden ">
                          <div
                            className="position-relative"
                            style={{ overflow: 'hidden', height: '266px' }}
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
                            <div className={style.productAction}>
                              <button
                                className="btn"
                                onClick={() => {
                                  addItem(v)
                                  notify(v.product_name)
                                }}
                              >
                                <BsFillCartFill className={style.iconAInner} />
                              </button>
                              <button className="btn" onClick={() => {}}>
                                <AiOutlineHeart className={style.iconBInner} />
                              </button>
                              <button className="btn" onClick={() => {}}>
                                <IoSearch
                                  className={style.iconCInner}
                                  onClick={() => {}}
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={`/shop/detail?pid=${v.id}`}
                          style={{ textDecoration: 'none', color: 'black' }}
                        >
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
                        </Link>
                      </div>
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
            <Toaster />
          </div>
        </div>
        {/* Shop End */}
      </DefaultLayout>
    </>
  )
}
