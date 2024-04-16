import React from 'react'
import Image from 'next/image'
import Table from 'react-bootstrap/Table'
import { MdDeleteForever } from 'react-icons/md'
import Button from 'react-bootstrap/Button'
import { FaAlignJustify } from 'react-icons/fa'
import { BARGAIN_BUYER } from '@/configs/configs-buyer'
import { BARGAIN_BUYER_DELETE } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import { useAuth } from '@/context/auth-context'
import { useState, useEffect } from 'react'
import OrderListNav from '@/components/orderList/order-list-nav'
import { BUYER_ORDER_FIN } from '@/configs/configs-buyer'
import DefaultLayout from '@/components/common/default-layout'
import Styles from '@/styles/buyer.module.css'

export default function OrderList() {
  const router = useRouter()
  // const { auth, getAuthHeader } = useAuth()
  const { checkAuth, auth } = useAuth()
  const [data, setData] = useState({
    success: false,
    page: 0,
    totalPages: 0,
    rows: [],
  })
  //刪除選項
  const deleteItem = (id) => {
    if (confirm(`確定要刪除編號為 ${id} 的資料嗎?`)) {
      fetch(`${BARGAIN_BUYER_DELETE}/${id}`, {
        method: 'DELETE',
      })
        .then((r) => r.json())
        .then((result) => {
          console.log(result)
          //router.reload(); // 會刷頁面
          router.push(location.search)
        })
    }
  }

  //--議價資料
  const [bargainData, setBargainData] = useState([])

  useEffect(() => {
    fetch(`${BARGAIN_BUYER}`, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then((r) => r.json())
      .then((dataObj) => {
        console.log(dataObj) // 确保数据正确返回
        if (dataObj && dataObj.rows) {
          setBargainData(dataObj) // 设置状态
        }
      })
      .catch((error) => {
        console.error('Error fetching bargain data:', error)
      })
  }, [])

  console.log(bargainData) // 可以在这里打印状态

  // ----修改
  const [formData, setFormData] = useState({
    id: 0, // 資料的 primary key
    complete_status: '',
  })

  const onFinish = async (e) => {
    const newFormData = {
      ...formData,
      complete_status: 2,
      id: e,
    }
    setFormData(newFormData)

    const r = await fetch(`${BUYER_ORDER_FIN}/${e}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFormData),
    })

    const result = await r.json()

    console.log(result)
    if (result.success) {
      alert('資料修改成功')
      console.log(document.referrer)
      router.back()
    } else {
      alert('資料沒有修改')
    }
  }

  return (
    <>
      <DefaultLayout>
        <div className={`${Styles.orderList}`}>
          <OrderListNav />
          {!bargainData.rows ? (
            <div>...loading</div>
          ) : (
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>id</th>
                  <th>商品</th>
                  <th>買家</th>
                  <th>期望價格</th>

                  <th>回覆答案</th>
                  <th>button</th>
                  <th>取消該筆議價</th>
                </tr>
              </thead>
              <tbody>
                {bargainData.rows.map((v, i) => (
                  <tr key={i}>
                    <td>{v.id}</td>
                    <td>{v.product_name}</td>
                    <td>{v.nickname}</td>

                    <td>
                      {v.ans_num
                        ? v.ans_num == 1
                          ? '同意'
                          : '不同意'
                        : '尚未回應'}
                    </td>
                    <td>{v.after_bargin_price}</td>
                    <td>
                      {v.ans_num ? (
                        <>
                          <Button href={`/buyer/checkout-bargain/${v.id}`}>
                            結帳
                          </Button>
                        </>
                      ) : (
                        '等待賣家回復...'
                      )}
                    </td>
                    <td>
                      {' '}
                      <Button
                        href="#"
                        onClick={(e) => {
                          e.preventDefault() // 不跳頁
                          deleteItem(v.id)
                        }}
                      >
                        刪除
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </DefaultLayout>
    </>
  )
}
