import React, { useState, useEffect } from 'react'
import { CHECK_OUT_ADD, PRODUCTS_API } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { BARGAIN_CHECKOUT } from '@/configs/configs-buyer'
import { useAuth } from '@/context/auth-context'

export default function Checkout() {
  const { id } = router.query
  const [show, setShow] = useState(false)
  const { checkAuth, auth } = useAuth()
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const router = useRouter()

  // 取得商品資料表
  const [productData, setProductData] = useState({
    success: false,
  })
  useEffect(() => {
    fetch(`${BARGAIN_CHECKOUT}/${id}`)
      .then((r) => r.json())
      .then((dataObj) => setProductData(dataObj))
  }, [router.query])

  console.log(productData)
  console.log(productData.rows)

  // -----------

  const [formData, setFormData] = useState({
    name: '',
    class: '',
    shipment: '',
    payment_way: '',
    total_price: '0',
    total_amount: '0',
    address: '',
    discount_coupon: '',
    product_id: [],
    product_price: [],
    seller_id: '', // 初始化为空字符串
    item_qty: '',
  })
  // 使用 useEffect 在数据加载后设置 formData
  useEffect(() => {
    // 检查 productData 是否存在且包含 rows 属性
    if (productData && productData.rows) {
      // 从 productData 中提取数据并设置到 formData
      const newProductId = []
      const newProductPrice = []
      let newSellerId = ''

      productData.rows.forEach((v) => {
        newProductId.push(v.id)
        newProductPrice.push(v.product_price)
        newSellerId = v.seller_id
      })

      // 更新 formData
      setFormData({
        ...formData, // 保留 formData 中其他属性
        product_id: newProductId,
        product_price: newProductPrice,
        seller_id: newSellerId,
      })

      console.log(newSellerId) // 输出新的 seller_id
    }
  }, [productData]) // 在 productData 更新时触发 useEffect
  useEffect(() => {
    if (auth.isAuth) {
      setFormData({ ...formData, buyer_id: auth.data.id })
    }
  }, [auth])
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
      router.push('/address-book')
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
      {/* Checkout Start */}
      <form name="form1" onSubmit={formSubmit}>
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <h5 className="section-title position-relative text-uppercase mb-3">
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
                      value={formData.name}
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="class">類型</label>
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
                      <option value="2">議價訂單</option>
                    </select>
                  </div>
                  <div className="col-md-6 form-group">
                    <label htmlFor="shipment">寄送方式</label>
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
                      value={formData.total_amount}
                    />
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
                  <div className="col-md-6 form-group">
                    <label htmlFor="discount_coupon">優惠卷</label>
                    <select
                      className="custom-select"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          discount_coupon: e.target.value,
                        })
                      }
                      value={formData.discount_coupon}
                    >
                      <option selected="">選擇優惠卷</option>
                      <option value="1">運費半價</option>
                      <option value="2">免運</option>
                    </select>
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
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Order Total</span>
              </h5>
              <div className="bg-light p-30 mb-5">
                <div className="border-bottom">
                  <h6 className="mb-3">Products</h6>
                  {productData.rows &&
                    productData.rows.map((v) => {
                      return (
                        <div
                          className="d-flex justify-content-between"
                          key={v.id}
                        >
                          <p>{v.product_name}</p>
                          <input
                            value={v.product_price}
                            readonly
                            name={`${v.product_price}`}
                          />{' '}
                        </div>
                      )
                    })}
                  <div className="d-flex justify-content-between">
                    <p>Product Name 2</p>
                    <p>$150</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Product Name 3</p>
                    <p>$150</p>
                  </div>{' '}
                </div>{' '}
                <div className="border-bottom pt-3 pb-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h6>Subtotal</h6>
                    <h6>$150</h6>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6 className="font-weight-medium">Shipping</h6>
                    <h6 className="font-weight-medium">$10</h6>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="d-flex justify-content-between mt-2">
                    <h5>Total</h5>
                    <h5>$160</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <p></p>
                  <Button variant="primary" onClick={handleShow}>
                    提出議價
                  </Button>
                </div>
              </div>
              <div className="mb-5">
                <h5 className="section-title position-relative text-uppercase mb-3">
                  <span className="bg-secondary pr-3">Payment</span>
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

                  <button
                    className="btn btn-block btn-primary font-weight-bold py-3"
                    type="submit"
                  >
                    送出訂單
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

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
      {/* Checkout End */}
    </>
  )
}
