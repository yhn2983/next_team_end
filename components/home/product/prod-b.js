import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './prodB.module.css'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSmallDash, AiOutlineHeart } from 'react-icons/ai'
import { RiGameLine } from 'react-icons/ri'
import { IoSearch } from 'react-icons/io5'
// hook------

export default function ProdB() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      {/* Products2 Start */}
      <div className="container-fluid pt-5 mt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash className="me-2" />
              <RiGameLine className="mb-2" />
              交給DEAL幫您探索商品
              <AiOutlineSmallDash className="ms-2" />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-3 ">
            <div className={style.card} onClick={handleClick}>
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden', height: '100%' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 h-100 mb-4 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={360}
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
                <div className="text-center py-4">
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div
              className={style.card}
              style={{ marginBottom: '60px' }}
              onClick={handleClick}
            >
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
          </div>
          <div
            className="col-lg-3 col-md-4 col-sm-6 pb-1"
            style={{ marginBottom: '60px' }}
          >
            <div className={style.card} onClick={handleClick}>
              <div
                className={isClicked ? style.slideB : style.slide}
                style={{ overflow: 'hidden' }}
              >
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={430}
                  height={500}
                />
              </div>
              <div
                className={`bg-light flex-column ${style.slideBack} ${
                  isClicked ? style.slideBackB : style.slideBack
                }`}
              >
                <div className="overflow-hidden">
                  <div style={{ overflow: 'hidden' }}>
                    <Image
                      className={`img-fluid w-100 ${
                        isClicked ? style.imgAct : ''
                      }`}
                      src="/pot.jpg"
                      alt=""
                      width={430}
                      height={180}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className="btn btn-square">
                      <BsFillCartFill
                        className={isClicked ? style.iconAInner : ''}
                      />
                    </Link>
                    <Link href="" className="btn btn-square">
                      <AiOutlineHeart
                        className={isClicked ? style.iconBInner : ''}
                      />
                    </Link>
                  </div>
                </div>
                <div className="text-center py-4 d-flex justify-content-between align-items-center">
                  <div className="memberInfor">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={60}
                    ></Image>
                    <div className="userId mt-2">Nickname</div>
                  </div>
                  <div className="mt-3" style={{ margin: '0 60px' }}>
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
