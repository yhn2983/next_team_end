import React from 'react'
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { BARGAIN_SELLER } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import DefaultLayout from '@/components/common/default-layout'
import Styles from '@/styles/buyer.module.css'
import { useAuth } from '@/context/auth-context'

export default function BargainSeller() {
  const router = useRouter()
  const { checkAuth, auth } = useAuth()
  //--議價資料
  const [bargainData, setBargainData] = useState([])

  useEffect(() => {
    fetch(`${BARGAIN_SELLER}`, {
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

  return (
    <>
      <DefaultLayout>
        {!auth ? (
          alert('請先登入')
        ) : !bargainData.rows ? (
          <div>...loading</div>
        ) : (
          <div>
            <div className={`${Styles.bargain}`}>
              <h4>議價請求</h4>
            </div>
            <Table
              striped
              bordered
              hover
              size="sm"
              className={`${Styles.bargain}`}
            >
              <thead>
                <tr className="table-dark">
                  <th>id</th>
                  <th>商品</th>
                  <th>買家</th>
                  <th>期望價格</th>
                  <th>button</th>
                </tr>
              </thead>
              <tbody>
                {bargainData.rows.map((v, i) => (
                  <tr key={i}>
                    <td>{v.id}</td>
                    <td>{v.product_id}</td>
                    <td>{v.buyer_id}</td>
                    <td>{v.after_bargin_price}</td>
                    <td>
                      {!v.ans_num ? (
                        <Button
                          className={Styles.bargainBtn}
                          href={`/buyer/bargain-seller-check/${v.id}`}
                        >
                          回覆
                        </Button>
                      ) : v.ans_num == 1 ? (
                        '同意'
                      ) : (
                        '不同意'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </DefaultLayout>
    </>
  )
}
