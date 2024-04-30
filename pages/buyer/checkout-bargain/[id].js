import React, { useState, useEffect } from 'react'
import { CHECK_OUT_ADD, PRODUCTS_API } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BARGAIN_CHECKOUT } from '@/configs/configs-buyer'
import { useAuth } from '@/context/auth-context'
import Styles from '@/styles/buyer.module.css'
import DefaultLayout from '@/components/common/default-layout'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default function CheckoutBargain() {
  const [show, setShow] = useState(false)
  const { checkAuth, auth } = useAuth()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const router = useRouter()
  const { id } = router.query
  // 取得商品資料表
  const [productData, setProductData] = useState({
    success: false,
  })
  useEffect(() => {
    fetch(`${BARGAIN_CHECKOUT}/${id}`)
      .then((r) => r.json())
      .then((dataObj) => setProductData(dataObj))
  }, [id, router.query])

  console.log(productData)

  // -----------

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
    after_bargin_price: null,
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
      let newBargain = productData.rows.after_bargin_price

      productData.rows.forEach((v) => {
        newProductId.push(v.id)
        newProductPrice.push(v.after_bargin_price)
        newSellerId.push(v.seller_id)
        // totalPrice = totalPrice + v.product_price
        totalPrice.push(v.after_bargin_price)
        totalPriceAndShip.push(v.after_bargin_price + 60)
        totalAmount.push(v.p_qty)

        shipmentFee.push(60)
        discountCoupon.push(0)
        carbonPointsAvailable.push(v.available_cp)
      })

      // 更新 formData
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
      setTotalPrice(totalPrice)
      console.log(newSellerId) // 输出新的 seller_id
    }
  }, [productData]) // 在 productData 更新时触发 useEffect
  useEffect(() => {
    if (auth.isAuth) {
      setFormData({ ...formData, buyer_id: auth.userData.id })
    }
  }, [auth])

  console.log({ auth })
  //計算運費+商品的總價
  useEffect(() => {
    setFormData({
      ...formData,
      total_price: totalPrice.map((v, i) => {
        return +v + +formData.shipment_fee[i]
      }),
    })
  }, [formData.shipment_fee])
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
      MySwal.fire({
        title: '是否送出訂單',
        text: '請確認是否要購買？',
        icon: 'info',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire({
            title: '訂單送出',
            confirmButtonText: '確定',
          })
          router.push('/buyer/order-list')
        }
      })
    } else {
      alert('訂單新增失敗')
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
        <div className={`${Styles.checkout}`}>
          {/* Checkout Start */}
          <form name="form1" onSubmit={formSubmit}>
            <div className="container">
              <div className="row px-xl-5">
                <div className="col-lg-7">
                  <h5 className="mb-3" style={{ color: '#8e2626' }}>
                    <strong>訂單資料</strong>
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
                          value={auth ? auth.userData.nickname : formData.name}
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
                            <option value="2">議價訂單</option>
                          </select>
                        </div>
                      </div>
                      {/* <div className="col-md-6 form-group">
                        <label htmlFor="carbon_points_have">小碳點數量</label>
                        {productData.ct &&
                          productData.ct.map((v, i) => {
                            return (
                              <input
                                key={i}
                                className="form-control"
                                type="number"
                                min="0"
                                max={parseInt(v.carbon_points_have)}
                                placeholder="請選擇數量"
                                name="carbon_points_have"
                                onBlur={(e) =>
                                  setFormData({
                                    ...formData,
                                    total_price: formData.product_price.map(
                                      (val, ind) => {
                                        return ind == 0
                                          ? +val - +e.target.value * 0.01
                                          : val
                                      }
                                    ),
                                  })
                                }

                                // value={}
                              />
                            )
                          })}
                      </div> */}

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
                <div className="col-lg-5">
                  <h5 className="mb-3" style={{ color: '#8e2626' }}>
                    <strong>商品價格</strong>
                  </h5>
                  <div className="bg-light p-30 mb-5">
                    <div className="border-bottom">
                      <div className="d-flex justify-content-between">
                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col" class="text-nowrap">
                                商品
                              </th>
                              <th scope="col" class="text-nowrap">
                                優惠卷
                              </th>
                              <th scope="col" class="text-nowrap">
                                原價
                              </th>
                              <th scope="col" class="text-nowrap">
                                數量
                              </th>
                              <th scope="col" class="text-nowrap">
                                議價後
                              </th>
                            </tr>{' '}
                          </thead>
                          <tbody>
                            {productData.rows &&
                              productData.rows.map((v, i) => {
                                return (
                                  <tr key={v.id}>
                                    <td>{v.product_name}</td>
                                    <td>
                                      {' '}
                                      <div className="col-md-6 form-group">
                                        {/* <label htmlFor="discount_coupon">
                                          優惠卷
                                        </label> */}
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
                                    <td>${v.product_price}</td>
                                    <td>{v.p_qty}</td>
                                    <td>${v.after_bargin_price}</td>

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
                  </div>

                  {/* <div className="d-flex justify-content-between mt-2">
                  <p></p>
                  <Button variant="primary" onClick={handleShow}>
                    提出議價
                  </Button>
                </div> */}
                </div>
                <div className="mb-5">
                  <h5 className="mb-3" style={{ color: '#8e2626' }}>
                    <strong>結帳</strong>
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
                        <option value="1">Line Pay</option>
                        <option value="2">貨到付款</option>
                      </select>
                    </div>

                    <div className="d-flex justify-content-between mt-2">
                      <p></p>
                      <Button className="danger" type="submit" variant="danger">
                        送出訂單
                      </Button>
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
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  期望價格:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              取消
            </Button>
            <Button variant="primary">提出議價</Button>
          </Modal.Footer>
        </Modal>
      </DefaultLayout>
      {/* Checkout End */}
    </>
  )
}
