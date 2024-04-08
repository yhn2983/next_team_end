import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './detail.module.css'
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
// hook------

export default function Detail() {
  // Router-----
  const router = useRouter()
  const { pid } = router.query

  const [show, setShow] = useState(false)

  // Products-----
  const [data, setData] = useState({
    success: false,
    rows: [],
    rowsRandom: [],
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
  }, [router, pid])

  // const [product, setProduct] = useState({
  //   id: '',
  //   s: '',
  //   m: '',
  //   mc: '',
  //   seller_id: '',
  //   product_photos: [],
  //   product_name: '',
  //   product_price: '',
  //   product_qty: '',
  //   product_status: '',
  //   product_intro: '',
  //   created_at: '',
  //   edited_at: '',
  //   status: '',
  //   sellerName: '',
  //   sellerPic: '',
  // })

  const qs = { ...router.query }

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
          {data.rows.map((v, i) => {
            if (+pid === +v.id) {
              return (
                <>
                  <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                      <Carousel fade style={{ height: '552px' }}>
                        <Carousel.Item>
                          <Image
                            src={
                              v.product_photos.includes(',')
                                ? `/${v.product_photos.split(',')[0]}`
                                : `/${v.product_photos}`
                            }
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
                      </Carousel>
                    </div>
                    <div className="col-lg-7 h-auto">
                      <div className="h-100 bg-light py-4 px-4">
                        <h2 style={{ fontWeight: '900' }}>
                          <strong style={{ color: '#8e2626' }}>
                            商品名稱：{v.product_name}
                          </strong>
                        </h2>
                        <div className="row">
                          <div className="col-lg-12">
                            <p
                              className="mb-4 mt-3"
                              style={{ fontSize: '20px' }}
                            >
                              <strong style={{ color: '#8e2626' }}>
                                賣家：{v.seller_id}
                              </strong>
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <p className="mb-4" style={{ fontSize: '20px' }}>
                              <strong style={{ color: '#8e2626' }}>
                                商品價格：{v.product_price}
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
                                商品數量：{v.product_qty}
                              </strong>
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <p className="mb-4" style={{ fontSize: '20px' }}>
                              <strong style={{ color: '#8e2626' }}>
                                商品主分類：{v.m}
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
                                商品子分類：{v.s}
                              </strong>
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <p className="mb-4" style={{ fontSize: '20px' }}>
                              <strong style={{ color: '#8e2626' }}>
                                商品狀態：{v.product_status}
                              </strong>
                            </p>
                          </div>
                          <div className="col-lg-6">
                            <p className="mb-4" style={{ fontSize: '20px' }}>
                              <strong style={{ color: '#8e2626' }}>
                                商品上架時間：{v.created_at}
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
                                上下架狀態：{v.status}
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
                                商品更新時間：{v.created_at}
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
                                  className={`btn btn-plus ${style.btnHover}`}
                                  style={{ backgroundColor: '#8e2626' }}
                                >
                                  <FaPlus style={{ color: 'white' }} />
                                </button>
                              </div>
                            </div>
                            <button
                              className={`btn px-3 ms-4 ${style.btnHover}`}
                              style={{ backgroundColor: '#e96d3f' }}
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
                              }}
                            >
                              <ImHammer2 style={{ fontSize: '20px' }} /> 議價
                            </button>
                            <button
                              className={`btn px-3 ms-4 ${style.btnHover}`}
                              style={{
                                backgroundColor: '#0f5808',
                                color: 'white',
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
                            <strong style={{ fontSize: '20px' }}>
                              商品描述
                            </strong>
                          </Link>
                        </div>
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="tab-pane-1"
                          >
                            <p
                              className="px-4 pb-4"
                              style={{ fontSize: '18px' }}
                            >
                              {v.product_intro}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
          })}
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
              <div className="col-6">
                <div className="barterTitleLeft">
                  <h5 className="ms-3">
                    <strong>member1的商品</strong>
                  </h5>
                </div>
                <div
                  className={`border border-2 border-secondary rounded overflow-auto ${style.barterLeft}`}
                >
                  <div className="row mt-2 px-4">
                    <div className="col-md-4 col-sm-12">
                      <div
                        className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                      >
                        <div className="barterProdPic d-flex justify-content-center">
                          <Image
                            className={style.prodPic}
                            src="/beauty.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="boxName d-flex justify-content-center">
                          <div className="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div className="text-truncate">
                            <strong>產品名稱</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div
                        className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                      >
                        <div className="barterProdPic d-flex justify-content-center">
                          <Image
                            className={style.prodPic}
                            src="/beauty.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="boxName d-flex justify-content-center">
                          <div className="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div className="text-truncate">
                            <strong>產品名稱</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="barterTitleRight">
                  <h5 className="ms-3">
                    <strong>您的商品</strong>
                  </h5>
                </div>
                <div
                  className={`border border-2 border-secondary rounded overflow-auto ${style.barterRight}`}
                >
                  <div className="row mt-2 px-4">
                    <div className="col-md-4 col-sm-12">
                      <div
                        className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                      >
                        <div className="barterProdPic d-flex justify-content-center">
                          <Image
                            className={style.prodPic}
                            src="/beauty.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="boxName d-flex justify-content-center">
                          <div className="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div className="text-truncate">
                            <strong>產品名稱</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-12">
                      <div
                        className={`d-flex flex-column border border-1 border-secondary ${style.prod}`}
                      >
                        <div className="barterProdPic d-flex justify-content-center">
                          <Image
                            className={style.prodPic}
                            src="/beauty.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="boxName d-flex justify-content-center">
                          <div className="form-check">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                          </div>
                          <div className="text-truncate">
                            <strong>產品名稱</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className={`btn ${style.barterBtn}`}>
              送出申請
            </button>
          </Modal.Footer>
        </Modal>
        {/* Barter Modal end */}
      </DefaultLayout>
    </>
  )
}
