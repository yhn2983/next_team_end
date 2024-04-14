import React from 'react'
import styles from '@/styles/evalute.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BARGAIN_get } from '@/configs/configs-buyer'
// import { BARGAIN_RESPNSE } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'

export default function GetBargain() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(null)
  const [bargainData, setbargainData] = useState('')

  console.log(bargainData)

  const formSubmit = async (e) => {
    e.preventDefault()

    const r = await fetch(`http://localhost:3001/bargain/${id}/respond`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bargainData),
    })
    console.log(r)
    const result = await r.json()
    console.log(result)
    if (result) {
      alert('資料新增成功')
      router.push('/address-book')
    } else {
      alert('資料沒有新增')
    }
  }

  useEffect(() => {
    if (id) {
      fetch(`${BARGAIN_get}/${id}`, {
        headers: { 'Content-Type': 'application/json' },
      })
        .then((r) => {
          if (!r.ok) {
            throw new Error('Network response was not ok')
          }
          return r.json()
        })
        .then((dataObj) => {
          setData(dataObj)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
          // 可以在这里设置错误状态，以便显示错误信息给用户
        })
    }
  }, [id, router.query])

  return (
    <>
      <div>
        {data &&
          data.rows.map((v, i) => {
            return (
              <div key={i}>
                <p>ID: {v.id}</p>
                <p>Buyer ID: {v.buyer_id}</p>
                <p>After Bargain Price: {v.after_bargin_price}</p>
                <p>Product ID: {v.product_id}</p>
              </div>
            )
          })}
        <form onSubmit={formSubmit}>
          <button
            className="btn btn-block btn-primary font-weight-bold py-3"
            type=""
            onClick={(e) => {
              e.preventDefault()
              setbargainData({ id: id, ans_num: '2', ans: '同意' })
            }}
          >
            同意
          </button>
          <button
            className="btn btn-block btn-primary font-weight-bold py-3"
            type=""
            onClick={(e) => {
              e.preventDefault()
              setbargainData({ id: id, ans_num: '1', ans: '不同意' })
            }}
          >
            拒絕
          </button>
          <button
            className="btn btn-block btn-primary font-weight-bold py-3"
            type="submit"
          >
            送出回復
          </button>
        </form>
      </div>
    </>
  )
}
