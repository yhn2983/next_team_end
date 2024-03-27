import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './prodA.module.css'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
// hook------

export default function ProdA() {
  return (
    <>
      {/* Products Start */}
      <div
        className="container-fluid"
        style={{ padding: '0 100px', marginTop: '100px' }}
      >
        <div className="d-flex" style={{ padding: '30px 0' }}>
          <h2 className="mb-4">
            <strong>探索商品</strong>
          </h2>
          <span className={style.productArea}></span>
        </div>
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div className={`product-item bg-light mb-4 ${style.productItem}`}>
              <div className="overflow-hidden">
                <div className="" style={{ overflow: 'hidden' }}>
                  <Image
                    className={`img-fluid w-100 ${style.imgAct}`}
                    src="/pot.jpg"
                    alt=""
                    width={261}
                    height={169}
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
              <div className="text-center py-4 d-flex justify-content-between align-items-center px-3">
                <div className="memberInfor">
                  <Image src="/logo.png" alt="" width={60} height={60}></Image>
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
        </div>
        <div className="row">
          <div className="col-4" style={{ marginLeft: '955px' }}>
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
