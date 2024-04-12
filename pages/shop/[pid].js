import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './detail.module.css'
import toast, { Toaster } from 'react-hot-toast'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
// react bootstrap
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
import { IoSearch } from 'react-icons/io5'
import { FaMinus, FaPlus } from 'react-icons/fa6'
import { ImHammer2 } from 'react-icons/im'
import { TbArrowsExchange2 } from 'react-icons/tb'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
// hook------
import { useCart } from '@/hooks/use-cart'

export default function Detail() {
  // Router-----
  const router = useRouter()

  const [show, setShow] = useState(false)

  // Products-----
  const [data, setData] = useState({
    success: false,
    rows: [],
    rowsRandom: [],
    searchSub: '',
    barterProds: [],
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
  }, [router.query])

  const [product, setProduct] = useState({
    data: {
      id: 0,
      product_photos: '',
      product_name: '',
      sellerName: '',
      product_price: 0,
      product_qty: 0,
      m: '',
      s: '',
      product_status: 0,
      created_at: '',
      status: 0,
      product_intro: '',
    },
  })

  useEffect(() => {
    fetchProductData()
  }, [router.query.pid])

  const fetchProductData = () => {
    const { pid } = router.query
    if (pid) {
      fetch(`${PROD_LIST}/${pid}`)
        .then((r) => r.json())
        .then((dataObj) => {
          setProduct(dataObj)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  }

  const productPhotos = product.data.product_photos

  // cart
  const { incrementItemById, decrementItemById } = useCart()

  const { addItem } = useCart()
  const notify = (productName) => {
    const msgBox = (
      <div>
        <p>
          <strong>{productName + ' 已成功加入購物車'}</strong>
        </p>
        <button
          className={`btn mx-auto ${style.conneBtn}`}
          style={{ backgroundColor: '#e96d3f', color: 'white' }}
          onClick={() => {
            router.push('/shop/cart')
          }}
        >
          連至 購物車
        </button>
      </div>
    )
    toast.success(msgBox)
  }

  const notifyNoAdd = (productName) => {
    const msgBox2 = (
      <div>
        <span>
          <strong>{productName + ' 已下架，不可加入購物車'}</strong>
        </span>
      </div>
    )
    toast.error(msgBox2)
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
      }, 300)
    }
  }, [isLoading])

  const display = (
    <>
      <DefaultLayout pageName="productSearch">
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
                  href="/shop"
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
              <Carousel fade style={{ height: '552px' }}>
                {productPhotos.includes(',') ? (
                  productPhotos.split(',').map((fileName, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <img
                          src={`/${fileName}`}
                          alt=""
                          width={600}
                          height={552}
                          style={{
                            width: '100%',
                            objectFit: 'cover',
                            opacity: '0.9',
                          }}
                        />
                      </Carousel.Item>
                    )
                  })
                ) : (
                  <Carousel.Item>
                    <img
                      src={`/${productPhotos}`}
                      alt=""
                      width={600}
                      height={552}
                      style={{
                        width: '100%',
                        objectFit: 'cover',
                        opacity: '0.9',
                      }}
                    />
                  </Carousel.Item>
                )}
              </Carousel>
            </div>
            <div className="col-lg-7 h-auto">
              <div className="h-100 bg-light py-4 px-4">
                <h2 style={{ fontWeight: '900' }}>
                  <strong style={{ color: '#8e2626' }}>
                    {product.data.product_name}
                  </strong>
                </h2>
                <div className="row">
                  <div className="col-lg-12">
                    <p className="mb-4 mt-3" style={{ fontSize: '20px' }}>
                      <strong style={{ color: '#8e2626' }}>
                        賣家：
                        <span style={{ color: 'black' }}>
                          {product.data.sellerName}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-4" style={{ fontSize: '20px' }}>
                      <strong style={{ color: '#8e2626' }}>
                        商品價格：
                        <span style={{ color: 'black' }}>
                          ${product.data.product_price.toLocaleString()}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      <strong style={{ color: '#8e2626' }}>
                        商品數量：
                        <span style={{ color: 'black' }}>
                          {product.data.product_qty}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-4" style={{ fontSize: '20px' }}>
                      <strong style={{ color: '#8e2626' }}>
                        商品主分類：
                        <span style={{ color: 'black' }}>{product.data.m}</span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      <strong style={{ color: '#8e2626' }}>
                        商品子分類：
                        <span style={{ color: 'black' }}>{product.data.s}</span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-4" style={{ fontSize: '20px' }}>
                      <strong style={{ color: '#8e2626' }}>
                        商品狀態：
                        <span style={{ color: 'black' }}>
                          {product.data.product_status == '1' ? '二手' : '全新'}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p className="mb-4" style={{ fontSize: '20px' }}>
                      <strong style={{ color: '#8e2626' }}>
                        商品上架時間：
                        <span style={{ color: 'black' }}>
                          {product.data.created_at}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      <strong style={{ color: '#8e2626' }}>
                        上下架狀態：
                        <span style={{ color: 'black' }}>
                          {product.data.status == '1' ? '上架中' : '已下架'}
                        </span>
                      </strong>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p
                      className="mb-4"
                      style={{
                        fontSize: '20px',
                      }}
                    >
                      <strong style={{ color: '#8e2626' }}>
                        商品更新時間：
                        <span style={{ color: 'black' }}>
                          {product.data.created_at}
                        </span>
                      </strong>
                    </p>
                  </div>
                </div>
                <hr />
                <div className="row mb-4 pt-2 mt-5">
                  <div className="col-lg-12 d-flex">
                    <div
                      className="input-group quantity mr-3"
                      style={{ width: '130px' }}
                    >
                      <div className="input-group-btn">
                        <button
                          className={`btn btn-minus ${style.btnHover}`}
                          style={{ backgroundColor: '#8e2626', border: 'none' }}
                          onClick={() => {
                            const nextQty = product.data.product_qty - 1
                            if (nextQty === 0) {
                              return
                            } else {
                              decrementItemById(product.data.id)
                            }
                          }}
                        >
                          <FaMinus style={{ color: 'white' }} />
                        </button>
                      </div>
                      <input
                        type="text"
                        style={{ borderRadius: '5px' }}
                        className="form-control bg-light border-1 text-center"
                        value={product.data.product_qty}
                        defaultValue="1"
                      />
                      <div className="input-group-btn">
                        <button
                          className={`btn btn-plus ${style.btnHover}`}
                          style={{ backgroundColor: '#8e2626', border: 'none' }}
                          onClick={() => {
                            incrementItemById(product.data.id)
                          }}
                        >
                          <FaPlus style={{ color: 'white' }} />
                        </button>
                      </div>
                    </div>
                    <button
                      className={`btn px-3 ms-4 ${style.btnHover}`}
                      style={{ backgroundColor: '#e96d3f', border: 'none' }}
                      onClick={() => {
                        if (product.data.status == '1') {
                          addItem(product.data)
                          notify(product.data.product_name)
                        } else {
                          notifyNoAdd(product.data.product_name)
                        }
                      }}
                    >
                      <BsFillCartFill
                        className=""
                        style={{ color: 'white', fontSize: '20px' }}
                      />{' '}
                      <span style={{ color: 'white' }}>加入購物車</span>
                    </button>
                  </div>
                </div>
                <div className="row d-flex">
                  <div className="col-lg-12">
                    <button
                      className={`btn px-3 ${style.btnHover}`}
                      style={{
                        backgroundColor: '#195a98',
                        color: 'white',
                        border: 'none',
                      }}
                    >
                      <ImHammer2 style={{ fontSize: '20px' }} /> 議價
                    </button>
                    <button
                      className={`btn px-3 ms-4 ${style.btnHover}`}
                      style={{
                        backgroundColor: '#0f5808',
                        color: 'white',
                        border: 'none',
                      }}
                      onClick={() => setShow(true)}
                    >
                      <TbArrowsExchange2 style={{ fontSize: '20px' }} />{' '}
                      以物易物
                    </button>
                  </div>
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
                      {product.data.product_intro}
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
        <div className="container-fluid py-5 px-5">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="pr-3" style={{ color: '#8e2626' }}>
              <strong>您可能也有興趣...</strong>
            </span>
          </h2>
          <div className="row px-xl-5">
            {data.rowsRandom.slice(0, 4).map((v, i) => {
              return (
                <div key={i} className="col-lg-3 col-md-6 col-sm-12 pb-1">
                  <div
                    className={`product-item bg-light mb-5 mx-auto ${style.productItem}`}
                    style={{ marginBottom: '60px' }}
                  >
                    <div className="overflow-hidden ">
                      <div
                        className="position-relative"
                        style={{ overflow: 'hidden', height: '266px' }}
                      >
                        <img
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
                              if (v.status == '1') {
                                addItem(v)
                                notify(v.product_name)
                              } else {
                                notifyNoAdd(v.product_name)
                              }
                            }}
                          >
                            <BsFillCartFill className={style.iconAInner} />
                          </button>
                          <button className="btn">
                            <AiOutlineHeart className={style.iconBInner} />
                          </button>
                          <Link href={`/shop?searchSub=${v.s}`} className="btn">
                            <IoSearch className={style.iconCInner} />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link
                      href={`/shop/${v.id}`}
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
                                v.product_status == '1' ? 'green' : '#e96d3f',
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
        </div>
        <Toaster />
        {/* Products End */}
        {/* Barter Modal start */}
        <Modal
          size="xl"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title
              id="example-custom-modal-styling-title"
              className="px-3"
              style={{ color: '#8e2626' }}
            >
              <strong style={{ fontSize: '30px' }}>提出以物易物申請</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <h5 className="ms-3">
                  <strong>{product.data.sellerName}的商品</strong>
                </h5>
                <div
                  className={`border border-2 border-secondary rounded overflow-auto ${style.barterRight}`}
                >
                  <div className="row mt-3 px-4">
                    <div className="col-lg-4 col-sm-12 mb-3">
                      <div
                        className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                      >
                        <div className="d-flex justify-content-center">
                          <img
                            className={style.prodPic}
                            src={
                              product.data.product_photos.includes(',')
                                ? `/${
                                    product.data.product_photos.split(',')[0]
                                  }`
                                : `/${product.data.product_photos}`
                            }
                            alt={product.data.product_name}
                            width={150}
                            height={120}
                            title={product.data.product_name}
                          />
                        </div>
                        <div className="d-flex justify-content-center px-2">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div className="text-truncate">
                            {product.data.product_name}
                          </div>
                        </div>
                      </div>
                    </div>
                    {data.rows.map((v, i) => {
                      if (product.data.sellerName == v.sellerName) {
                        return (
                          <>
                            <div className="col-lg-4 col-sm-12 mb-3">
                              <div
                                className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                              >
                                <div className="d-flex justify-content-center">
                                  <img
                                    className={style.prodPic}
                                    src={
                                      v.product_photos.includes(',')
                                        ? `/${v.product_photos.split(',')[0]}`
                                        : `/${v.product_photos}`
                                    }
                                    alt={v.product_name}
                                    width={150}
                                    height={120}
                                    title={v.product_name}
                                  />
                                </div>
                                <div className="d-flex justify-content-center px-2">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                  </div>
                                  <div className="text-truncate">
                                    {v.product_name}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="text">
                  <h5 className="ms-3">
                    <strong>您的商品集</strong>
                  </h5>
                </div>
                <div
                  className={`border border-2 border-secondary rounded overflow-auto ${style.barterRight}`}
                >
                  <div className="row mt-3 px-4">
                    {data.barterProds.map((v3, i3) => (
                      <>
                        <div className="col-lg-4 col-sm-12 mb-3">
                          <div
                            className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                          >
                            <div className="barterProdPic d-flex justify-content-center">
                              <img
                                className={style.prodPic}
                                src={
                                  v3.product_photos.includes(',')
                                    ? `/${v3.product_photos.split(',')[0]}`
                                    : `/${v3.product_photos}`
                                }
                                alt={v3.product_name}
                                width={150}
                                height={120}
                                title={v3.product_name}
                              />
                            </div>
                            <div className="d-flex justify-content-center px-2 pt-1">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </div>
                              <div className="text-truncate">
                                {v3.product_name}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className={`btn ${style.barterBtn}`}>
              送出申請
            </button>
          </Modal.Footer>
        </Modal>
        {/* Barter Modal end */}
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
