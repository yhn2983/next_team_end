import React from 'react'
import styles from '@/styles/evalute.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BARGAIN_get } from '@/configs/configs-buyer'

import { useRouter } from 'next/router'

export default function GetBargain() {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState(null)

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
      <div>
        {data && (
          <div>
            {Object.keys(data).map((key) => (
              <p key={key}>
                {key}: {data[key]}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
