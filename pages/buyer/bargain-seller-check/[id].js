import React from 'react'
import Styles from '@/styles/buyer.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BARGAIN_get } from '@/configs/configs-buyer'
// import { BARGAIN_RESPNSE } from '@/configs/configs-buyer'
import { useRouter } from 'next/router'
import DefaultLayout from '@/components/common/default-layout'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

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
      MySwal.fire({
        title: '回覆完成',

        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/buyer/bargain-seller')
        }
      })
    } else {
      alert('回覆沒有成功')
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
          <table className={`table  ${Styles.bargain}`}>
            <thead>
              <tr className="table-dark">
                <th scope="col">編號</th>
                <th scope="col">買家</th>
                <th scope="col">期望價格</th>
                <th scope="col">商品</th>
                <th scope="col">回覆</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.rows.map((v, i) => {
                  return (
                    <tr key={i}>
                      <td> {v.id}</td>
                      <td> {v.buyer_id}</td>
                      <td> ${v.after_bargin_price}</td>
                      <td>{v.product_name}</td>
                      <td>
                        {' '}
                        <button
                          className={`btn btn-block  font-weight-bold py-3 `}
                          type=""
                          onClick={(e) => {
                            e.preventDefault()
                            setbargainData({
                              id: id,
                              ans_num: '1',
                              ans: '同意',
                            })
                            handleShow(e)
                          }}
                        >
                          同意
                        </button>
                        <button
                          className={`btn btn-block ${Styles.bargainNotBtn} font-weight-bold py-3`}
                          type=""
                          onClick={(e) => {
                            e.preventDefault()
                            setbargainData({
                              id: id,
                              ans_num: '2',
                              ans: '不同意',
                            })
                            handleShow(e)
                          }}
                        >
                          拒絕
                        </button>{' '}
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>對於編號{bargainData.id}的議價要求</Modal.Title>
          </Modal.Header>
          <form onSubmit={formSubmit}>
            <Modal.Body>{bargainData.ans}</Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                className={`py-3 ${Styles.bargainNotBtn}`}
              >
                取消
              </Button>
              <button
                className={`btn btn-block  ${Styles.bargainBtn} font-weight-bold py-3`}
                type="submit"
              >
                送出
              </button>
            </Modal.Footer>
          </form>
        </Modal>
      </DefaultLayout>
    </>
  )
}
