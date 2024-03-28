import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './prodB.module.css'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
// hook------

export default function ProdB() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }
  return (
    <>
      {/* Products2 Start */}
      <div
        className="container-fluid"
        style={{ padding: '0 100px', marginTop: '100px' }}
      >
        <div className="d-flex" style={{ padding: '30px 0' }}>
          <h2 className="mb-4">
            <strong>交給DEAL幫您探索商品</strong>
          </h2>
          <span className={style.productArea}></span>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1 mb-20">
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
            <div className={style.card}>
              <div className={style.slide}>
                <Image
                  className={style.slideImg}
                  src="/openit.png"
                  alt=""
                  width={465}
                  height={600}
                />
              </div>
              <div className={`bg-light flex-column ${style.slideBack}`}>
                <div className="overflow-hidden">
                  <div className="overflow-hidden">
                    <Image
                      className={style.imgAct}
                      src="/pot.jpg"
                      alt=""
                      width={425}
                      height={360}
                    />
                  </div>
                  <div className={style.productAction}>
                    <Link href="" className={`btn btn-square ${style.iconA}`}>
                      <BsFillCartFill className={style.iconAInner} />
                    </Link>
                    <Link href="" className={`btn btn-square ${style.iconB}`}>
                      <AiOutlineHeart className={style.iconBInner} />
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
      </div>
      {/* Products End */}
    </>
  )
}
