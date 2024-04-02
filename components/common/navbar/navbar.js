import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
import { useRouter } from 'next/router'
// style-----
import style from './navbar.module.css'
import cartstyle from '@/components/cart/cart.module.css'
// react bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
import { Navbar, Nav } from 'react-bootstrap'
// react icons-----
import { TbMessage } from 'react-icons/tb'
import {
  FaUser,
  FaClipboardList,
  FaShoppingCart,
  FaHeart,
  FaHandPointRight,
} from 'react-icons/fa'
import { IoLogIn, IoLanguage } from 'react-icons/io5'
import { GiArchiveRegister } from 'react-icons/gi'
import { FaCircleUser, FaTreeCity, FaBars } from 'react-icons/fa6'
import { RiCoupon3Fill, RiLogoutBoxRFill } from 'react-icons/ri'
import { FaAnglesUp } from 'react-icons/fa6'
// hook------
//import { useAuth } from '@/context/auth-context'
//import { useCart } from '@/hooks/use-cart'
//import Cart from '@/components/cart/cart'

export default function CustomNavbar({ pageName = '' }) {
  //const { auth, logout } = useAuth()
  //const { totalItems, totalPrice } = useCart()

  // ---Hover status---
  const [isMessageHovered, setIsMessageHovered] = useState(false)
  const [isUserHovered, setIsUserHovered] = useState(false)
  const [isLanHovered, setIsLanHovered] = useState(false)
  const handleMouseEnter = (type) => {
    if (type === 'message') setIsMessageHovered(true)
    if (type === 'user') setIsUserHovered(true)
    if (type === 'language') setIsLanHovered(true)
  }
  const handleMouseLeave = (type) => {
    if (type === 'message') setIsMessageHovered(false)
    if (type === 'user') setIsUserHovered(false)
    if (type === 'language') setIsLanHovered(false)
  }

  // ---Modal---
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // ---BackToTop---
  const topRef = useRef(null)
  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // category
  const [data, setData] = useState({
    success: false,
    cate: [],
  })

  useEffect(() => {
    fetch(`${PROD_LIST}${location.search}`)
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
        console.log(dataObj)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])
  // Router-----
  const router = useRouter()
  const qs = { ...router.query }

  return (
    <>
      {/* Topbar Start*/}
      <div className="container-fluid">
        <div
          className="row py-1 px-xl-5 d-flex justify-content-between align-items-center pt-1"
          style={{ backgroundColor: '#f6f4f4' }}
        >
          <div className="col-lg-6 col-md-8">
            <div className="d-inline-flex align-items-center h-100">
              <Link className={style.textBody} href="/help-center">
                <strong>幫助中心</strong>
              </Link>
              <Link className={style.textBody} href="/help-center/deal">
                <strong>認識DEAL</strong>
              </Link>
              <Link className={style.textBody} href="/help-center/privacy-rule">
                <strong>隱私條款</strong>
              </Link>
              <Link className={style.textBody} href="/help-center/using-rule">
                <strong>使用條款</strong>
              </Link>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 text-end text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  onMouseEnter={() => handleMouseEnter('message')}
                  onMouseLeave={() => handleMouseLeave('message')}
                  style={{
                    backgroundColor: isMessageHovered ? '#d6d4d4' : '#F5F5F5',
                    border: 'none',
                    color: '#8e2626',
                  }}
                >
                  <TbMessage
                    className={style.fs20}
                    style={{ color: '#8e2626' }}
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className="textBox d-flex align-items-center justify-content-between border-bottom border-2">
                      <div className="boxLeft d-flex">
                        <div className="mt-3 position-relative">
                          <Image
                            className="border border-1 rounded-circle"
                            src="/logo-sm.png"
                            alt=""
                            width={50}
                            height={50}
                          />
                        </div>
                        <div className="mx-2">
                          <div className="boxId pt-2">
                            <p>
                              <strong>kjljkrh</strong>
                            </p>
                          </div>
                          <div className="boxContent pt-0">
                            <p>請問這個商品還有嗎?</p>
                          </div>
                        </div>
                      </div>
                      <div className="boxRight pt-3 me-2">
                        <p>時間</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={style.ml5}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  onMouseEnter={() => handleMouseEnter('user')}
                  onMouseLeave={() => handleMouseLeave('user')}
                  style={{
                    backgroundColor: isUserHovered ? '#d6d4d4' : '#F5F5F5',
                    border: 'none',
                    color: '#8e2626',
                  }}
                >
                  <FaUser style={{ color: '#8e2626' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {isUserHovered ? (
                    <>
                      <Dropdown.Item
                        href="#/action-1"
                        style={{ fontSize: '20px' }}
                      >
                        <FaCircleUser
                          className={style.mr2}
                          style={{ color: '#3939f4' }}
                        />
                        &nbsp;
                        <strong>會員中心</strong>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        style={{ fontSize: '20px' }}
                      >
                        <FaClipboardList
                          className={(style.fs20, style.mr2)}
                          style={{ color: '#5a0982' }}
                        />
                        &nbsp;<strong>訂購紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        style={{ fontSize: '20px' }}
                      >
                        <FaTreeCity
                          className={(style.fs20, style.mr2)}
                          style={{ color: '#0d8209' }}
                        />
                        &nbsp;<strong>小碳點紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-4"
                        style={{ fontSize: '20px' }}
                      >
                        <RiCoupon3Fill
                          className={(style.fs20, style.mr2)}
                          style={{ color: '#ce690b' }}
                        />
                        &nbsp;<strong>優惠券紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-5"
                        style={{ fontSize: '20px' }}
                      >
                        <RiLogoutBoxRFill className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>登出</strong>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item
                        href="#/action-1"
                        style={{ fontSize: '20px' }}
                        onClick={handleShow}
                      >
                        <IoLogIn
                          className={style.mr2}
                          style={{ fontSize: '25px' }}
                        />
                        &nbsp;<strong>登入</strong>
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        style={{ fontSize: '20px' }}
                      >
                        <GiArchiveRegister
                          className={style.mr2}
                          style={{
                            color: '#2f4f4f',
                          }}
                        />
                        &nbsp;<strong> 註冊</strong>
                      </Dropdown.Item>
                    </>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className={style.ml5}>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  onMouseEnter={() => handleMouseEnter('language')}
                  onMouseLeave={() => handleMouseLeave('language')}
                  style={{
                    backgroundColor: isLanHovered ? '#d6d4d4' : '#F5F5F5',
                    border: 'none',
                    color: '#8e2626',
                  }}
                >
                  <IoLanguage style={{ color: '#8e2626' }} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" style={{ fontSize: '20px' }}>
                    &nbsp;<strong>．中文</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" style={{ fontSize: '20px' }}>
                    &nbsp;<strong>．English</strong>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="row align-items-center px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <Link href="/" className="text-decoration-none">
              <Image
                className={`${style.logo}`}
                src="/logo9.png"
                alt=""
                width={150}
                height={150}
              />
            </Link>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <InputGroup className="ms-2 mb-3 shadow-lg ">
              <Form.Control
                placeholder="挖掘寶物吧！"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="form-control"
              />
              <Button
                id="button-addon2"
                style={{ backgroundColor: '#e96d3f', border: '#e96d3f' }}
                className={style.inputSearch}
              >
                搜尋
              </Button>
            </InputGroup>
          </div>
          <div className="col-lg-4 col-6 d-flex justify-content-end">
            {pageName === 'randomSearch' ? (
              <>
                <div className="">
                  <h5>已經有想要的商品？</h5>
                  <span>
                    前往這裡&nbsp;
                    <FaHandPointRight style={{ color: '#8e2626' }} />
                    &nbsp;
                    <Link href="/shop">
                      <button
                        type="button"
                        className={style.searchBtn}
                        href=""
                        style={{ backgroundColor: '#e96d3f', color: 'white' }}
                      >
                        探索商品
                      </button>
                    </Link>
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="">
                  <h5 className="ms-1" style={{ paddingLeft: '15px' }}>
                    <strong>不知道從哪裡開始？</strong>
                  </h5>
                  <span style={{ paddingLeft: '25px' }}>
                    試試這個&nbsp;
                    <FaHandPointRight style={{ color: '#8e2626' }} />
                    &nbsp;
                    <Link href="/shop/random-search">
                      <button
                        type="button"
                        className={style.searchBtn}
                        href=""
                        style={{ backgroundColor: '#e96d3f', color: 'white' }}
                      >
                        隨機探索
                      </button>
                    </Link>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Topbar End*/}

      {/* Navbar Start */}
      <div
        className="container-fluid mb-30"
        style={{ backgroundColor: '#8e2626' }}
      >
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-basic"
                style={{
                  width: 'calc(100% - 20px)',
                  zIndex: '999',
                  height: '65px',
                  padding: '0 30px',
                  backgroundColor: '#e96d3f',
                  border: 'none',
                }}
              >
                <strong>
                  <FaBars className="mb-1" />
                  &nbsp;<span style={{ fontSize: '19px' }}>商品分類</span>
                </strong>
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  width: 'calc(100% - 20px)',
                  height: '500px',
                  overflow: 'auto',
                }}
              >
                {data.cate.map((v) => {
                  if (v.parent_id == 0) {
                    return (
                      <Dropdown.Item
                        key={v.id}
                        href="#/action-1"
                        className="mb-2"
                        style={{ color: '#8e2626' }}
                      >
                        <strong>．{v.category_name}</strong>
                      </Dropdown.Item>
                    )
                  }
                })}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-lg-9">
            <Navbar
              expand="lg"
              className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0"
            >
              <Navbar.Brand
                href="/"
                className="text-decoration-none d-block d-lg-none"
              >
                <Image
                  className="logo rounded-circle"
                  src="/logo-sm.png"
                  alt=""
                  width={70}
                  height={70}
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarCollapse" />
              <Navbar.Collapse id="navbarCollapse">
                <div className="d-flex justify-content-between w-100">
                  <Nav
                    className="navbar-nav mr-auto py-0"
                    style={{ marginTop: '10px' }}
                  >
                    <Nav.Link
                      href="/"
                      className={`nav-item nav-link me-3 ${
                        pageName === 'home' ? 'active' : ''
                      }`}
                    >
                      <strong>
                        <span style={{ fontSize: '19px' }}>首頁</span>
                      </strong>
                    </Nav.Link>
                    <Nav.Link
                      href="/shop"
                      className={`nav-item nav-link me-3 ${
                        pageName === 'productSearch' ? 'active' : ''
                      }`}
                    >
                      <strong>
                        <span style={{ fontSize: '19px' }}>探索商品</span>
                      </strong>
                    </Nav.Link>
                    <Nav.Link
                      href="/shop/random-search"
                      className={`nav-item nav-link me-3 ${
                        pageName === 'randomSearch' ? 'active' : ''
                      }`}
                    >
                      <strong>
                        <span style={{ fontSize: '19px' }}>隨機探索</span>
                      </strong>
                    </Nav.Link>
                    <Nav.Link
                      href="#"
                      className={`nav-item nav-link me-3 ${
                        pageName === 'coupon' ? 'active' : ''
                      }`}
                    >
                      <strong>
                        <span style={{ fontSize: '19px' }}>領取優惠券</span>
                      </strong>
                    </Nav.Link>
                    <Nav.Link
                      href="/contact-us"
                      className={`nav-item nav-link ${
                        pageName === 'contactUs' ? 'active' : ''
                      }`}
                    >
                      <strong>
                        <span style={{ fontSize: '19px' }}>聯絡我們</span>
                      </strong>
                    </Nav.Link>
                  </Nav>
                  <Nav className="navbar-nav ml-auto py-0 d-none d-lg-block">
                    <div className="d-flex">
                      <Nav.Link href="" className="btn px-0">
                        <FaHeart
                          className="me-1"
                          style={{ color: 'white', fontSize: '20px' }}
                        />
                        <span className="badge text-light border border-light rounded-circle mt-3">
                          0
                        </span>
                      </Nav.Link>
                      <Nav.Link
                        href="/shop/cart"
                        className="btn px-0 ml-3 ms-3"
                      >
                        <FaShoppingCart
                          className="me-1"
                          style={{ color: 'white', fontSize: '20px' }}
                        />
                        <span className="badge text-light border border-light rounded-circle mt-3">
                          0
                        </span>
                      </Nav.Link>
                    </div>
                  </Nav>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
      <div ref={topRef}></div>
      {/* Navbar End */}
      {/* Login Modal start */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Login Modal end */}
      {/* Back to Top */}
      <Link href="" className="btn" onClick={scrollToTop}>
        <FaAnglesUp className={style.backToTop} style={{ fontSize: '40px' }} />
      </Link>
    </>
  )
}
