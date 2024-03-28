import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './category.module.css'
// react bootstrap
// react icons-----
// hook------
// config-----
import { API_SERVER } from '@/configs/config-r'

export default function Category() {
  return (
    <>
      {/* Categories Start */}
      <div
        className="container-fluid"
        style={{ padding: '0 100px', marginTop: '100px' }}
      >
        <div className="d-flex">
          <h2 className="mb-5">
            <strong>商品分類</strong>
          </h2>
          <span className={style.sectionTitle}></span>
        </div>
        <div
          className={`row mt-1 rounded-pill py-3 shadow-lg ${style.categoryArea}`}
        >
          <div className="col">
            <div
              className="d-flex justify-content-between align-items-center pt-3 mb-3"
              style={{ padding: '0 100px' }}
            >
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item1}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>免費禮物</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item2}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>電腦科技</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item3}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>手機配件</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item4}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>男裝服飾</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item5}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>女裝服飾</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item6}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>美妝保養</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item7}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>名牌精品</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item8}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>電玩遊戲</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item9}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>耳機錄音</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item10}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>相機拍攝</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
            <div
              className="wrap2 d-flex justify-content-between align-items-center mt-2"
              style={{ padding: '0 100px' }}
            >
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item11}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>家具家居</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item12}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>電視電器</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item13}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>嬰兒孩童</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item14}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>健康營養品</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item15}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>運動用品</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item16}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>食物飲料</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item17}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>寵物用品</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item18}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>門票票券</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item19}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>機車汽車</strong>
                    </h5>
                  </div>
                </div>
              </Link>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <Link href="" className={style.link}>
                <div className="set d-flex flex-column justify-content-center">
                  <div className={`${style.item} ${style.item20}`}></div>
                  <div className="txt d-flex justify-content-center mt-3">
                    <h5>
                      <strong>其他</strong>
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Categories End */}
    </>
  )
}
