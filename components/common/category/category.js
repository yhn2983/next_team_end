import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
// style-----
import style from './category.module.css'
// react bootstrap
// react icons-----
// hook------

export default function Category() {
  return (
    <>
      {/* Categories Start */}
      <div
        className="container-fluid"
        style={{ padding: '0 100px', marginTop: '50px' }}
      >
        <div className="d-flex">
          <h2 className="mb-4">
            <strong>商品分類</strong>
          </h2>
          <span className={style.sectionTitle}></span>
        </div>
        <div
          className={`row mt-1 rounded-pill py-3 shadow-lg ${style.categoryArea}`}
        >
          <div className="col">
            <div className="d-flex justify-content-between align-items-center pt-3">
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item1 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>免費禮物</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item2 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>電腦科技</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item3 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>手機配件</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item4 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>男裝服飾</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item5 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>女裝服飾</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item6 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>美妝保養</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item7 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>名牌精品</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item8 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>電玩遊戲</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item9 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>耳機錄音</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item10 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>相機拍攝</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="wrap2 d-flex justify-content-between align-items-center mt-2">
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item11 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>家具家居</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item12 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>電視電器</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item13 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>嬰兒孩童</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item14 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>健康營養品</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item15 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>運動用品</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item16 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>食物飲料</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item17 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>寵物用品</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item18 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>門票票券</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item19 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>機車汽車</strong>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  className={style.line}
                  src="/line.png"
                  alt=""
                  width={45}
                  height={10.5}
                />
              </div>
              <div className="set d-flex flex-column justify-content-center">
                <div className="item item20 rounded-circle"></div>
                <div className="txt d-flex justify-content-center mt-2">
                  <p>
                    <strong>其他</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Categories End */}
    </>
  )
}
