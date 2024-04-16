import React from 'react'
import styles from '@/styles/evalute.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BARGAIN_get } from '@/configs/configs-buyer'
// import { BARGAIN_RESPNSE } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/common/default-layout'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export default function GetBargain() {
  const router = useRouter()
  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  //---
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
      router.push('/buyer/bargain-seller')
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
  console.log(data)
  return (
    <>
      <DefaultLayout>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">編號</th>
                <th scope="col">買家</th>
                <th scope="col">期望價格</th>
                <th scope="col">商品</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.rows.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td> {v.id}</td>
                      <td> {v.buyer_id}</td>
                      <td> {v.after_bargin_price}</td>
                      <td>{v.product_name}</td>
                    </tr>
                  )
                })}
            </tbody>
          </table>

          <form onSubmit={formSubmit}>
            <button
              className="btn btn-block btn-primary font-weight-bold py-3"
              type=""
              onClick={(e) => {
                e.preventDefault()
                setbargainData({ id: id, ans_num: '1', ans: '同意' })
                handleShow(e)
              }}
            >
              同意
            </button>
            <button
              className="btn btn-block btn-primary font-weight-bold py-3"
              type=""
              onClick={(e) => {
                e.preventDefault()
                setbargainData({ id: id, ans_num: '2', ans: '不同意' })
                handleShow(e)
              }}
            >
              拒絕
            </button>
          </form>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>對於編號{bargainData.id}的議價要求</Modal.Title>
          </Modal.Header>
          <form onSubmit={formSubmit}>
            <Modal.Body>{bargainData.ans}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                返回
              </Button>
              <button
                className="btn btn-block btn-primary font-weight-bold py-3"
                type="submit"
              >
                送出回覆
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </DefaultLayout>
    </>
  )
}
