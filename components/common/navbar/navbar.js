import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './navbar.module.css'
import cartstyle from '@/components/cart/cart.module.css'
// react bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from 'react-bootstrap/Modal'
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
import { useAuth } from '@/context/auth-context'
//import { useCart } from '@/hooks/use-cart'
//import Cart from '@/components/cart/cart'

export default function Navbar({ pageName = '' }) {
  const { auth, logout } = useAuth()
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

  return (
    <>
      {/* topbar start */}
      <div id="top" className="container-fluid">
        <div className={style.row}>
          <div className={style.colA}>
            <div className="">
              <Link className={(style.textBody, style.rowA)} href="">
                <strong>認識DEAL</strong>
              </Link>
              <Link className={style.textBody} href="">
                <strong>幫助中心</strong>
              </Link>
              <Link className={style.textBody} href="">
                <strong>隱私條款</strong>
              </Link>
              <Link className={style.textBody} href="">
                <strong>使用條款</strong>
              </Link>
            </div>
          </div>
          <div className={style.colB}>
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
                  {auth.id ? (
                    <>
                      <Dropdown.Item href="#/action-1">
                        <FaCircleUser className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>會員中心</strong>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <FaClipboardList className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>訂購紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        <FaTreeCity className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>小碳點紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-4">
                        <RiCoupon3Fill className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>優惠券紀錄</strong>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-5">
                        <RiLogoutBoxRFill className={(style.fs20, style.mr2)} />
                        &nbsp;<strong>登出</strong>
                      </Dropdown.Item>
                    </>
                  ) : (
                    <>
                      <Dropdown.Item href="#/action-1" onClick={handleShow}>
                        <IoLogIn
                          className={style.mr2}
                          style={{ fontSize: '25px' }}
                        />
                        &nbsp;<strong>登入</strong>
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        <GiArchiveRegister
                          className={style.mr2}
                          style={{
                            color: '#2f4f4f',
                            fontSize: '22px',
                          }}
                        />
                        &nbsp;<strong>註冊</strong>
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
                  <Dropdown.Item href="#/action-1">
                    &nbsp;<strong>．中文</strong>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    &nbsp;<strong>．English</strong>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <Link href="" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: '2px' }}
                >
                  0
                </span>
              </Link>
              <Link href="" className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark"></i>
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: '2px' }}
                >
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center px-xl-4 d-none d-lg-flex"
          style={{ height: '160px' }}
        >
          <div className="col-2">
            <Link href="" className="text-decoration-none">
              <Image
                className={style.logo}
                src="/logo9.png"
                alt=""
                width={500}
                height={500}
              />
            </Link>
          </div>
          <div className="col-lg-7 text-left d-flex">
            <select
              aria-label="Default select example"
              className="form-select shadow-lg overflow-auto form-control"
              style={{ marginRight: '20px', height: '38px' }}
            >
              <option selected disabled>
                想要就近省運費!
              </option>
              <option value="1">台北市</option>
              <option value="2">新北市</option>
              <option value="3">桃園市</option>
              <option value="4">台中市</option>
              <option value="5">台南市</option>
              <option value="6">高雄市</option>
              <option value="7">基隆市</option>
              <option value="8">新竹市</option>
              <option value="9">新竹縣</option>
              <option value="10">苗栗縣</option>
              <option value="11">彰化縣</option>
              <option value="12">南投縣</option>
              <option value="13">雲林縣</option>
              <option value="14">嘉義市</option>
              <option value="15">嘉義縣</option>
              <option value="16">屏東縣</option>
              <option value="17">宜蘭縣</option>
              <option value="18">花蓮縣</option>
              <option value="19">台東縣</option>
              <option value="20">澎湖縣</option>
              <option value="21">金門縣</option>
              <option value="22">連江縣</option>
            </select>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="挖掘寶物吧！"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button
                id="button-addon2"
                style={{ backgroundColor: '#e96d3f', border: '#e96d3f' }}
              >
                搜尋
              </Button>
            </InputGroup>
          </div>
          <div className="col-lg-3 col-6" style={{ paddingLeft: '300px' }}>
            <div
              className=""
              style={{
                border: '3px dotted #8e2626',
                borderRadius: '20px',
                padding: '10px 5px',
              }}
            >
              <h4 style={{ paddingLeft: '5px' }}>
                <strong>不知道從哪裡開始？</strong>
              </h4>
              <span style={{ paddingLeft: '20px' }}>
                試試這個&nbsp;
                <FaHandPointRight style={{ color: '#8e2626' }} />
                &nbsp;
                <Link href="">
                  <button
                    type="button"
                    className={`btn btn-sm ${style.searchBtn}`}
                    href=""
                    style={{ backgroundColor: '#e96d3f', color: 'white' }}
                  >
                    隨機探索
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div
        className="container-fluid mb-30 navbarArea"
        style={{ heigth: '300px', backgroundColor: '#8e2626' }}
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
              <Dropdown.Menu style={{ width: 'calc(100% - 20px)' }}>
                <Dropdown.Item href="#/action-1">免費禮物</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-dark py-3 py-lg-0 px-0">
              <Link href="" className="text-decoration-none d-block d-lg-none">
                <Image
                  className="logo rounded-circle"
                  src="/logo-sm.png"
                  alt=""
                  width={50}
                  height={50}
                />
                &nbsp;&nbsp;
                <span style={{ color: 'white' }}>DEAL - 2ND HAND SHOP</span>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
                style={{ paddingTop: '10px', marginLeft: '50px' }}
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link
                    href="/"
                    className={`nav-item nav-link me-5 ${
                      pageName === 'home' ? 'active' : ''
                    }`}
                  >
                    <strong>
                      <span style={{ fontSize: '19px' }}>首頁</span>
                    </strong>
                  </Link>
                  <Link
                    href="#"
                    className={`nav-item nav-link me-5 ${
                      pageName === 'prodSearch' ? 'active' : ''
                    }`}
                  >
                    <strong>
                      <span style={{ fontSize: '19px' }}>探索商品</span>
                    </strong>
                  </Link>
                  <Link
                    href="#"
                    className={`nav-item nav-link me-5 ${
                      pageName === 'randomSearch' ? 'active' : ''
                    }`}
                  >
                    <strong>
                      <span style={{ fontSize: '19px' }}>隨機探索</span>
                    </strong>
                  </Link>
                  <Link
                    href="#"
                    className={`nav-item nav-link me-5 ${
                      pageName === 'coupon' ? 'active' : ''
                    }`}
                  >
                    <strong>
                      <span style={{ fontSize: '19px' }}>領取優惠券</span>
                    </strong>
                  </Link>
                  <Link
                    href="#"
                    className={`nav-item nav-link ${
                      pageName === 'contact' ? 'active' : ''
                    }`}
                  >
                    <strong>
                      <span style={{ fontSize: '19px' }}>聯絡我們</span>
                    </strong>
                  </Link>
                </div>
                <div className="">
                  <div className="">
                    <Link href="" className="btn px-0">
                      <FaHeart style={{ color: 'white' }} />
                      <span
                        className="badge text-secondary border border-secondary rounded-circle"
                        style={{ paddingBottom: '2px' }}
                      >
                        0
                      </span>
                    </Link>
                    <Link
                      href="/cs-0308/checkout/cart"
                      className={cartstyle['button']}
                    >
                      <FaShoppingCart />
                      <span
                        className="badge text-secondary border border-secondary rounded-circle"
                        style={{ paddingBottom: '2px' }}
                      >
                        0
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
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
      <Link href="#top" className="btn">
        <FaAnglesUp className={style.backToTop} style={{ fontSize: '40px' }} />
      </Link>
    </>
  )
}
