import React, { useState, useEffect } from 'react'
import {
  CHECK_OUT_ADD,
  PRODUCTS_API,
  PRODUCTS_API_SHOP,
} from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BARGAIN } from '@/configs/configs-buyer'
import { useAuth } from '@/context/auth-context'
import Head from 'next/head'
import DefaultLayout from '@/components/common/default-layout'
import Styles from '@/styles/buyer.module.css'
import { FaNpm } from 'react-icons/fa'

export default function Checkout() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const router = useRouter()
  const { checkAuth, auth } = useAuth()

  // 取得商品資料表
  const [productData, setProductData] = useState({
    success: false,
  })
  useEffect(() => {
    fetch(`${PRODUCTS_API}`)
      .then((r) => r.json())
      .then((dataObj) => setProductData(dataObj))
  }, [router.query])

  console.log(productData)
  console.log(productData.rows)

  // -----------
  //--議價部分
  const [bargainData, setBargainData] = useState({
    product_id: '5',
    after_bargin_price: '',
    buyer_id: '1', // 初始化为空字符串
    p_qty: '',
    available_cp: '',
  })

  const SubmitBargain = async (e) => {
    e.preventDefault()

    const r = await fetch(BARGAIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bargainData),
    })

    const result = await r.json()
    console.log(result)
    if (result) {
      alert('資料新增成功')
      router.push('/buyer/bargain-buyer-req')
    } else {
      alert('資料沒有新增')
    }
  }
  //----------

  const [formData, setFormData] = useState({
    name: '',
    class: '1',
    shipment_fee: '60',
    payment_way: '',
    total_price: [],
    total_amount: '0',
    address: '',
    discount_coupon: '0',
    product_id: [],
    product_price: [],
    seller_id: '', // 初始化为空字符串
    buyer_id: '1',
    item_qty: '',
    carbon_points_available: [],
  })

  //設一個狀態儲存totalPrice
  const [totalPrice, setTotalPrice] = useState([])
  const [totalPriceAdd, setTotalPriceAdd] = useState(0)
  // 使用 useEffect 在数据加载后设置 formData

  useEffect(() => {
    // 检查 productData 是否存在且包含 rows 属性
    if (productData && productData.rows) {
      // 从 productData 中提取数据并设置到 formData
      const newProductId = []
      const newProductPrice = []
      const newProductData = []

      let newSellerId = []
      let totalPrice = []
      let totalPriceAndShip = []
      let totalAmount = []

      let totalPriceAdd = 0
      let shipmentFee = []
      let discountCoupon = []
      let carbonPointsAvailable = []
      console.log(productData.rows)
      productData.rows.forEach((v) => {
        newProductId.push(v.product_id)
        newProductPrice.push(v.p_price)
        newSellerId.push(v.seller_id)
        // totalPrice = totalPrice + v.product_price
        totalPrice.push(v.total_price)
        totalPriceAndShip.push(v.total_price + 60)
        totalAmount.push(v.p_qty)

        shipmentFee.push(60)
        discountCoupon.push(0)
        carbonPointsAvailable.push(v.available_cp)
      })
      for (let i = 0; i < totalPrice.length; i++) {
        totalPriceAdd = totalPriceAdd + totalPrice[i]
      }
      setTotalPriceAdd(totalPriceAdd)
      // 更新 formData
      console.log(totalAmount)
      console.log(shipmentFee)
      setFormData({
        ...formData, // 保留 formData 中其他属性
        product_id: newProductId,
        product_price: newProductPrice,
        seller_id: newSellerId,
        total_price: totalPriceAndShip,
        total_amount: totalAmount,
        item_qty: totalAmount,
        shipment_fee: shipmentFee,
        discount_coupon: discountCoupon,
        carbon_points_available: carbonPointsAvailable,
      })
      // setBargainData({ ...bargainData, seller_id: newSellerId })

      setTotalPrice(totalPrice)
      console.log(totalPrice) // 输出新的 seller_id
    }
  }, [productData]) // 在 productData 更新时触发 useEffect
  // 使用 useEffect 在数据加载后设置 formData
  console.log(productData)

  useEffect(() => {
    if (auth.isAuth) {
      setFormData({ ...formData, buyer_id: auth.userData.id })
      setBargainData({ ...bargainData, buyer_id: auth.userData.id })
    }
  }, [auth])
  console.log({ auth })
  console.log({ formData })
  //取得購物車的資料

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const params = new URLSearchParams({ id: auth.userData.id })
        const response = await fetch(`${PRODUCTS_API_SHOP}?${params}`, {
          headers: { 'Content-Type': 'application/json' },
        })
        const dataObj = await response.json()
        setProductData(dataObj)
      } catch (error) {
        console.error('Error fetching order data:', error)
      }
    }

    fetchOrderData()
  }, [router.query, auth])
  //計算運費+商品的總價
  useEffect(() => {
    setFormData({
      ...formData,
      total_price: totalPrice.map((v, i) => {
        return +v + +formData.shipment_fee[i]
      }),
    })
  }, [formData.shipment_fee])
  console.log(totalPrice)
  console.log(formData.total_price)

  const formSubmit = async (e) => {
    e.preventDefault()

    const r = await fetch(CHECK_OUT_ADD, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await r.json()
    console.log(result)
    if (result) {
      alert('資料新增成功')
      router.push('/buyer/order-list')
    } else {
      alert('資料沒有新增')
    }
  }

  /*
  const fieldChanged = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value }
    setFormData(newFormData)
    console.log(formData)
  }
  */
  console.log(formData)
  return (
    <>
      <DefaultLayout>
        {/* Checkout Start */}
        <Head>訂單結帳</Head>
        <div className={`${Styles.checkout}`}>
          <form name="form1" onSubmit={formSubmit}>
            <div className={`container-fluid `}>
              <div className="row px-xl-5">
                <div className="col-lg-8">
                  <h5
                    className={`section-title position-relative text-uppercase mb-3`}
                  >
                    <span className="bg-secondary pr-3">訂單資料</span>
                  </h5>
                  <div className="bg-light p-30 mb-5">
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <label htmlFor="name">姓名</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="取件姓名"
                          name="name"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          value={auth.userData.nickname}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="class">類型</label>
                        <div>
                          <select
                            className="custom-select"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                class: e.target.value,
                              })
                            }
                            value={formData.class}
                          >
                            <option value="1">一般訂單</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="total_amount">數量</label>
                        <input
                          className="form-control"
                          type="number"
                          min="1"
                          placeholder="請選擇數量"
                          name="total_amount"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              total_amount: e.target.value,
                            })
                          }
                          readOnly
                          value={formData.total_amount}
                        />
                      </div>
                      <div className="col-md-6 form-group">
                        <label htmlFor="shipment">寄送方式</label>
                        <div>
                          <select
                            className="custom-select"
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                shipment: e.target.value,
                              })
                            }
                            value={formData.shipment}
                          >
                            <option value="0"></option>
                            <option value="超商店到店">超商店到店</option>
                            <option value="物流寄送">物流寄送</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-6 form-group">
                        <label htmlFor="address">地址</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="請輸入地址"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              address: e.target.value,
                            })
                          }
                          value={formData.address}
                        />
                      </div>

                      {/* <div className="col-md-12 form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="newaccount"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="newaccount"
                    >
                      Create an account
                    </label>
                  </div>
                </div> */}
                      {/* <div className="col-md-12">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="shipto"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="shipto"
                      data-toggle="collapse"
                      data-target="#shipping-address"
                    >
                      Ship to different address
                    </label>
                  </div>
                </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5
                    className={`section-title position-relative text-uppercase mb-3`}
                  >
                    <span className="bg-secondary pr-3">商品價格</span>
                  </h5>
                  <div className="bg-light p-30 mb-5">
                    <div className="border-bottom">
                      <h6 className="mb-3">購買商品</h6>{' '}
                      <div className="d-flex justify-content-between">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                              <th scope="col">Handle</th>
                              <th scope="col">Handle</th>
                            </tr>{' '}
                          </thead>
                          <tbody>
                            {productData.rows &&
                              productData.rows.map((v, i) => {
                                return (
                                  <tr key={v.id}>
                                    <td>{v.p_name}</td>
                                    <td>
                                      {' '}
                                      <div className="col-md-6 form-group">
                                        <label htmlFor="discount_coupon">
                                          優惠卷
                                        </label>
                                        <div>
                                          <select
                                            className="custom-select"
                                            onChange={(e) => {
                                              setFormData({
                                                ...formData,
                                                discount_coupon:
                                                  formData.discount_coupon.map(
                                                    (value, index) =>
                                                      index === i
                                                        ? e.target.value
                                                        : value
                                                  ),
                                                shipment_fee:
                                                  formData.shipment_fee.map(
                                                    (value, index) =>
                                                      index === i
                                                        ? e.target.value === '1'
                                                          ? '30'
                                                          : e.target.value ===
                                                            '2'
                                                          ? '0'
                                                          : '60'
                                                        : value
                                                  ),
                                              })
                                              // setFormData({
                                              //   ...formData,
                                              //   total_price: totalPrice + formData.shipment_fee,
                                              // })
                                            }}
                                            value={formData.discount_coupon[i]}
                                          >
                                            <option value="0">
                                              選擇優惠卷
                                            </option>
                                            <option value="1">運費半價</option>
                                            <option value="2">免運</option>
                                          </select>
                                        </div>
                                      </div>
                                    </td>
                                    <td>${v.p_price}</td>
                                    <td>{v.p_qty}</td>
                                    <td>${v.total_price}</td>
                                    <td>
                                      <p></p>
                                      <Button
                                        variant="danger"
                                        onClick={() => {
                                          setBargainData({
                                            ...bargainData,
                                            product_id: v.product_id,
                                            seller_id: v.seller_id,
                                            p_qty: v.p_qty,
                                            available_cp: v.available_cp,
                                          })
                                          handleShow()
                                        }}
                                      >
                                        提出議價
                                      </Button>
                                    </td>
                                    {/* <input
                                value={v.p_price}
                                readonly
                                name={`${v.product_price}`}
                              />{' '} */}
                                  </tr>
                                )
                              })}
                          </tbody>
                        </table>
                      </div>
                      {/* <div className="d-flex justify-content-between">
                        <p>Product Name 2</p>
                        <p>$150</p>
                      </div> */}
                      <div className="d-flex justify-content-between">
                        <p>運費</p>
                        <p>{formData.shipment_fee}</p>
                      </div>{' '}
                    </div>{' '}
                    <div className="pt-2">
                      <div className="d-flex justify-content-between mt-2">
                        <h5>Total</h5>
                        <h5>
                          {formData.total_price &&
                            formData.total_price.reduce(
                              (acc, curr) => acc + curr,
                              0
                            )}
                        </h5>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p></p>
                      <Button variant="danger" onClick={handleShow}>
                        提出議價
                      </Button>
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5
                      className={`section-title position-relative text-uppercase mb-3`}
                    >
                      <span className="bg-secondary pr-3">結帳</span>
                    </h5>
                    <div className="bg-light p-30">
                      <div className="col-md form-group">
                        <label htmlFor="payment_way">付款方式</label>
                        <select
                          className="custom-select"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              payment_way: e.target.value,
                            })
                          }
                          value={formData.payment_way}
                        >
                          <option value="0"></option>
                          <option value="1">信用卡</option>
                          <option value="2">貨到付款</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <p></p>
                        <Button
                          className="primary"
                          type="submit"
                          variant="danger"
                        >
                          送出訂單
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>想要議價</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form name="form2" onSubmit={SubmitBargain}>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  期望價格:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setBargainData({
                      ...bargainData,
                      after_bargin_price: e.target.value,
                    })
                  }}
                  value={bargainData.after_bargin_price}
                />
              </div>
              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                  取消
                </Button>
                <Button
                  variant="warning"
                  type="submit"
                  className={`${Styles.checkoutBtn}`}
                >
                  提出議價
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </Modal>
        {/* Checkout End */}
      </DefaultLayout>
    </>
  )
}
