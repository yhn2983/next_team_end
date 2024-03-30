import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
// page
import DefaultLayout from '@/components/common/default-layout'
// style-----
import style from './randomSearch.module.css'
import { useState } from 'react'
// react bootstrap
// react icons-----
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'
// hook------

export default function RandomShop() {
  const [isClicked, setIsClicked] = useState(false)
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <>
      <DefaultLayout pageName="randomSearch">
        <Head>
          <title>隨機探索 | DEAL-2ND HAND SHOP</title>
        </Head>
        <div className="container-fliud">
          <div className="row">
            <div className="col">
              {/*  Breadcrumb Start */}
              <div className={`container-fluid mt-3 ${style.breadcrumbArea}`}>
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
                      <span className="breadcrumb-item active">隨機探索</span>
                    </nav>
                  </div>
                </div>
              </div>
              {/* Breadcrumb End */}

              {/* Shop Start */}
              <div className="container-fluid mt-2">
                <div className="row">
                  <div className="col d-flex justify-content-center">
                    <div className="txt">
                      <h2>
                        <strong>歡迎使用隨機探索！</strong>
                      </h2>
                      <h4>
                        <strong>還沒有想法嗎? 動動滑鼠 點擊試試看吧！</strong>
                      </h4>
                    </div>
                    <button
                      class="btn my-3"
                      type="submit"
                      style={{
                        backgroundColor: '#e96d3f',
                        color: 'white',
                        marginLeft: '80px',
                        fontSize: '20px',
                      }}
                      onClick={handleClick}
                    >
                      <strong>一鍵探索</strong>
                    </button>
                  </div>
                </div>
                <div className="row px-xl-5 mt-4">
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
                  {/* Shop Product End */}
                </div>
              </div>
              {/* Shop End */}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  )
}
