import React from 'react'
import Image from 'next/image'
import Styles from '@/styles/orderList.module.css'

export default function OrderList() {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-light ${Styles.navStyle}`}
        style={{ marginBottom: 20 }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  全部
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  未完成
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  已完成
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">退貨</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className={`container-fluid ${Styles.sec1}`}>
        <div className="row justify-content-start sec1-seller">
          <div className="col">
            <div className="container-fluid">
              <div className="row justify-content-start">
                <div className="col-2">
                  <div>某某商城</div>
                </div>
                <div className="col-1">
                  <a href="#">聊天</a>
                </div>
                <div className="col-1">
                  <a href="#">賣場</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={` row  align-items-center ${Styles.productLine}`}>
          <div className="col-6">
            <Image
              src="/computer2.jpg"
              className={`img-fluid `}
              height={50}
              width={50}
            />
            <span>TOP protein 低熱量 乳清蛋白 1公斤</span>
          </div>
          <div className="col-3">$690</div>
          <div className="col-3">1</div>
        </div>
        <div className={`row ${Styles.sec1End}`}>
          <div className="col-3">超商取貨</div>
          <div className="col-3">台北市文山區興隆路三段</div>
          <div className="col-3">訂單金額:$789</div>
          <div className="col-3">
            <div className="container">
              <div className="row">
                <div className="col" style={{ marginBottom: 20 }}>
                  <button
                    type="button"
                    className="btn btn-warning"
                    style={{ width: 100 }}
                  >
                    再買一次
                  </button>
                </div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    style={{ width: 100 }}
                  >
                    前往評論
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
