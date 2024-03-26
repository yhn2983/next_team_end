import React from 'react'
import Image from 'next/image'

export default function Profile() {
  return (
    <>
      <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <Image
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    width={130}
                    height={150}
                    className="rounded-circle"
                  />
                  <h5 className="my-4">便宜二手商品</h5>
                  <button type="button">上船大頭貼照</button>
                  {/* <div className="content text-center m-4">
                    <div className="ratings">
                      <span className="product-rating">4.6</span>
                      <span>/5</span>
                      <div className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      <div className="rating-text">
                        <span>46 個評分 &amp; 15 個評論</span>
                      </div>
                    </div>
                  </div> */}
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn btn-primary">
                      追蹤
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary ms-1"
                    >
                      傳訊息
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-lg-0r text-cente mb-4">
                <div className="card-body p-0 text-center">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item p-3">
                      <p className="mb-0">修改個人資料</p>
                    </li>
                    <li className="list-group-item p-3">
                      <p className="mb-0">更改密碼</p>
                    </li>
                    <li className="list-group-item p-3">
                      <p className="mb-0">暫時還沒想到要做什麼功能</p>
                    </li>
                    <li className="list-group-item p-3">
                      <p className="mb-0">暫時還沒想到要做什麼功能</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">真實姓名</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">森田光</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">暱稱</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">小光的部屋</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">example@example.com</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">手機</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">0919895563</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">生日</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">1996/01/28</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">地址</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">高雄市前金區</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">小碳點</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">87</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3 mt-1">
                      <p className="mb-0">關於我</p>
                    </div>
                    <div className="col-sm-9 mt-1">
                      <div className="card">
                        <div className="card-body">
                          <p className="text-muted">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. In, error. Consectetur ullam sed minima.
                            Numquam dicta, optio repellat quae necessitatibus
                            ipsam voluptatem omnis! Ipsum facere sed esse nam?
                            Nesciunt amet temporibus beatae magnam ad harum
                            perferendis dolore deserunt dolorum vero, laborum
                            fuga culpa incidunt eum aliquam. Minus quisquam
                            fugit est Lorem, ipsum dolor sit amet consectetur
                            adipisicing elit. Necessitatibus hic ex corporis at,
                            blanditiis corrupti repellat. Dolor n
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
