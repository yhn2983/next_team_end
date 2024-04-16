import React from 'react'
import Image from 'next/image'
import styles from '@/styles/lee-form.module.scss'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { GET_ONE_USER } from '@/components/config'
import { CREATE_ROOM_POST } from '@/components/config'
import { useAuth } from '@/context/auth-context'
import DefaultLayout from '@/components/common/default-layout'
import { useRouter } from 'next/router'
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
import { useSocket } from '@/context/socket-context'

export default function StoreInfo() {
  const { auth, checkAuth } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { connectionState, setConnectionState, socket } = useSocket()

  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 1000)
    }
  }, [isLoading])

  // 使用 useState 建立 otherUser 和 file 的狀態
  const [otherUser, setOtherUser] = useState({
    nickname: '',
    photo: 'default.png',
  })
  const [file, setFile] = useState(null)

  // 定義一個異步函數來從後端獲取使用者資料
  const fetchUserData = async () => {
    setIsLoading(true)
    const storeId = router.query['store-id']
    const response = await fetch(`${GET_ONE_USER}/other/${storeId}`, {
      method: 'GET',
      credentials: 'include',
    })
    const result = await response.json()

    if (result.status === 'success') {
      // 更新 otherUser 和 file 的狀態
      setOtherUser(result.data.otherUser)
      setFile(result.data.otherUser.photo)
    }
    setIsLoading(false)
  }

  console.log(otherUser)
  console.log(auth.userData)

  // 在組件掛載時調用 fetchUserData 函數
  useEffect(() => {
    if (router.isReady) {
      fetchUserData()
    }
  }, [router.isReady])

  // 傳訊息
  const handleSendMessage = async () => {
    const response = await fetch(CREATE_ROOM_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user1_id: auth.userData.id,
        user2_id: otherUser.id,
      }),
    })

    const result = await response.json()

    if (result.status === 'success') {
      const connectionState = {
        userId: auth.userData.id,
        otherUserId: otherUser.id,
        roomId: result.data.id,
      }
      setConnectionState(connectionState)
      localStorage.setItem('connectionState', JSON.stringify(connectionState))
      socket.emit('newUser', { connectionState, SocketID: socket.id })
      router.push('/member/chat')
    } else {
      console.error(result.message)
    }
  }
  console.log(connectionState)

  const display = (
    <DefaultLayout>
      <section className={`${styles.storeInfo}`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-4">
              <div className={`card ${styles.card} mb-4`}>
                <div className="card-body text-center">
                  <Image
                    src={
                      file
                        ? `http://localhost:3003/avatar/${file}?timestamp=${new Date().getTime()}`
                        : '/default.png'
                    }
                    alt="avatar"
                    width={175}
                    height={185}
                    className="rounded-circle mt-2 secondary"
                  />
                  <h5 className="my-4">{otherUser.nickname}</h5>
                  <div className="content text-center m-4">
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
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <button type="button" className="btn">
                      追蹤
                    </button>
                    <button
                      type="button"
                      className="btn ms-1"
                      onClick={handleSendMessage}
                    >
                      傳訊息
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={`card ${styles.card}`}>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className={`${styles.title}`}>賣場介紹</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
