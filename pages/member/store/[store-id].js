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
import toast, { Toaster } from 'react-hot-toast'
import StoreProducts from '@/components/member/StoreProducts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons'
import { GET_STORE_LIKE } from '@/components/config'
import { POST_STORE_LIKE } from '@/components/config'

export default function StoreInfo() {
  const { auth, checkAuth } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { connectionState, setConnectionState, socket } = useSocket()
  const [storeId, setStoreId] = useState(null)
  const [storeLike, setStoreLike] = useState(1)
  const [otherUser, setOtherUser] = useState({
    nickname: '',
    photo: 'default.png',
  })
  const [file, setFile] = useState(null)

  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 1000)
    }
  }, [isLoading])

  // 定義一個異步函數來從後端獲取使用者資料
  const fetchUserData = async () => {
    setIsLoading(true)
    const storeId = router.query['store-id']
    setStoreId(storeId) // 更新 storeId 的狀態
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
  console.log(auth.userData.id)

  console.log(`${GET_STORE_LIKE}/${auth.userData.id}`)
  // 定義一個異步函數來從後端獲取追蹤狀態
  const fetchStoreLike = async () => {
    const response = await fetch(`${GET_STORE_LIKE}/${auth.userData.id}`, {
      method: 'GET',
      credentials: 'include',
    })

    const result = await response.json()
    console.log(result)
    if (result.status === 'success') {
      // 從 result.data 中找到對應的 store_id
      console.log(storeId)
      const storeLikeData = result.data.find(
        (item) => item.store_id === +storeId
      )
      console.log(storeLikeData)
      // 如果找到了對應的 store_id，則更新 storeLike 的狀態
      if (storeLikeData) {
        setStoreLike(storeLikeData.store_like)
      }
    }
  }
  // 在組件掛載時調用 fetchUserData 函數
  useEffect(() => {
    if (router.isReady && auth.userData.id !== 0) {
      fetchUserData()
    }
  }, [router.isReady, auth.userData.id])

  useEffect(() => {
    console.log(storeLike)
  }, [storeLike])

  // 在 storeId 更新後調用 fetchStoreLike 函數
  useEffect(() => {
    if (storeId) {
      fetchStoreLike()
    }
  }, [storeId])

  // 傳訊息
  const handleSendMessage = async () => {
    if (!auth.userData || auth.userData.id === 0) {
      toast.error('請先登入')
      return
    }
    const response = await fetch(CREATE_ROOM_POST, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user1_id: auth.userData.id,
        user2_id: otherUser.id,
      }),
      credentials: 'include',
    })

    const result = await response.json()

    if (result.status === 'success') {
      const connectionState = {
        userId: auth.userData.id,
        userNickname: auth.userData.nickname,
        otherUserId: otherUser.id,
        otherUserNickname: otherUser.nickname,
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

  // 追蹤按鈕
  const handleToggleLike = async () => {
    if (!auth.userData || auth.userData.id === 0) {
      toast.error('請先登入')
      return
    }

    // 更新追蹤狀態
    let newStoreLike = storeLike === 1 ? 2 : 1
    const response = await fetch(POST_STORE_LIKE, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: auth.userData.id,
        storeId: Number(storeId),
        storeLike: newStoreLike,
      }),
      credentials: 'include',
    })

    const result = await response.json()

    if (result.status === 'success') {
      // 更新 storeLike 的狀態
      setStoreLike(newStoreLike)
    } else {
      console.error(result.message)
    }
  }

  const display = (
    <>
      <DefaultLayout>
        <section className={`${styles.storeInfo}`}>
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className={`card ${styles.infoCard} mb-4`}>
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
                      {auth.userData && auth.userData.id !== +storeId ? (
                        <>
                          <button
                            type="button"
                            className={`btn ${styles.btnLike}`}
                            onClick={handleToggleLike}
                          >
                            <FontAwesomeIcon
                              className={styles.iconWithMargin}
                              icon={
                                storeLike === 2 ? faSolidHeart : faRegularHeart
                              }
                              color="red" /* 設定愛心的顏色為紅色 */
                            />
                            <span className={styles.textBlack}>追蹤</span>
                          </button>
                          <button
                            type="button"
                            className="btn ms-1"
                            onClick={handleSendMessage}
                          >
                            傳訊息
                          </button>
                        </>
                      ) : auth.userData ? (
                        <p>這個是我自己的賣場</p>
                      ) : (
                        <>
                          <button
                            type="button"
                            className={`btn ${styles.btnLike}`}
                            onClick={handleToggleLike}
                          >
                            <FontAwesomeIcon
                              className={styles.iconWithMargin}
                              icon={
                                storeLike === 2 ? faSolidHeart : faRegularHeart
                              }
                              color="red" /* 設定愛心的顏色為紅色 */
                            />
                            追蹤
                          </button>
                          <button
                            type="button"
                            className="btn ms-1"
                            onClick={handleSendMessage}
                          >
                            傳訊息
                          </button>
                        </>
                      )}
                    </div>
                    <div className="mt-4">
                      <p className={`${styles.title} text-center`}>賣場介紹</p>
                      <p className="text-start" style={{ fontSize: '18px' }}>
                        很高興您來到我的賣場。在這裡，我專注於提供各種高品質的二手商品，主要與鞋類為主。我深知每一件商品背後都有它的故事，因此我對於每一件商品都進行了細心的挑選和檢查，確保它們的品質和價值。
                      </p>
                      <p className="text-start" style={{ fontSize: '18px' }}>
                        您可以放心地在我的賣場尋找您需要的商品，因為我將提供最真實、最準確的商品描述和圖片。此外，我也非常重視客戶的需求和意見，如果您在購物過程中有任何問題或建議，請隨時與我聯繫，我將竭誠為您服務。
                      </p>
                      <p className="text-start" style={{ fontSize: '18px' }}>
                        感謝您對我的賣場的支持，我期待能夠與您建立良好的合作關係，讓您在這裡找到您想要的寶藏，共同回味那些美好的舊時光。謝謝您的光臨！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className={`card ${styles.productsCard}`}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <p className={`${styles.title}`}>賣場商品</p>
                      </div>
                    </div>
                    <StoreProducts storeId={storeId} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
      <Toaster />
    </>
  )
}
