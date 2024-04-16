import React, { useEffect, useState, useRef } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import style from '@/styles/lee-form.module.scss'
import { useAuth } from '@/context/auth-context'
import { useSocket } from '@/context/socket-context'
import { GET_CHAT_HISTORY } from '@/components/config'

const ChatPageCom = () => {
  // 設定訊息的狀態，初始值為空陣列
  const [messages, setMessages] = useState([])
  // 設定輸入狀態的狀態，初始值為空字串
  const [typingStatus, setTypingStatus] = useState('')
  // 建立一個參考，用來參考最後一條訊息的 DOM 節點
  const lastMessageRef = useRef(null)
  // 從 Auth Context 中取得用戶的資料和登入狀態
  const { checkAuth, auth } = useAuth()
  // 從 Socket Context 中取得 socket 實例
  const { socket } = useSocket()

  console.log(socket)

  // 當用戶的資料或 socket 變更時，運行這個 useEffect
  // useEffect(() => {
  //   // 如果用戶已經登入，則將他們的 ID 和暱稱傳送到伺服器
  //   if (auth.userData) {
  //     socket.emit('newUser', {
  //       id: auth.userData.id,
  //       nickname: auth.userData.nickname,
  //     })
  //   }
  // }, [auth.userData, socket])
  const connectionState = JSON.parse(localStorage.getItem('connectionState'))
  useEffect(() => {
    // 獲取歷史訊息
    const fetchMessages = async () => {
      const response = await fetch(GET_CHAT_HISTORY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomId: connectionState.roomId }), // 替換為你的房間編號
        credentials: 'include',
      })
      const result = await response.json()
      console.log(result.data)
    }

    fetchMessages()
    // ...其他的程式碼...
  }, []) // 注意這裡的依賴陣列是空的，這表示這個 useEffect 只會在組件掛載時運行

  // 當 socket 變更時，運行這個 useEffect
  useEffect(() => {
    // 定義一個處理訊息回應的函數
    const messageResponseHandler = (data) => {
      // 將接收到的訊息添加到訊息的狀態中
      setMessages((prevMessages) => [...prevMessages, data])
    }

    // 當接收到訊息回應時，調用處理訊息回應的函數
    socket.on('messageResponse', messageResponseHandler)

    // 在組件卸載時，移除訊息回應的監聽器
    return () => {
      socket.off('messageResponse', messageResponseHandler)
    }
  }, [socket]) // 只在 socket 變更時重新設定監聽器

  // 當訊息的狀態變更時，運行這個 useEffect
  useEffect(() => {
    // 將視窗滾動到最後一條訊息
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // 當 socket 變更時，運行這個 useEffect
  useEffect(() => {
    // 定義一個處理輸入回應的函數
    const typingResponseHandler = (data) => {
      // 將接收到的輸入狀態設定為輸入狀態的狀態
      setTypingStatus(data)
    }

    // 當接收到輸入回應時，調用處理輸入回應的函數
    socket.on('typingResponse', typingResponseHandler)

    // 在組件卸載時，移除輸入回應的監聽器
    return () => {
      socket.off('typingResponse', typingResponseHandler)
    }
  }, [socket]) // 只在 socket 變更時重新設定監聽器

  return (
    <div className={`${style.chat}`}>
      <ChatBar socket={socket} />
      <div className={`${style.chat__main}`}>
        <ChatBody
          messages={messages}
          typingStatus={typingStatus}
          lastMessageRef={lastMessageRef}
          userName={auth.userData ? auth.userData.nickname : ''}
          socket={socket} // 將socket作為prop傳遞給ChatBody
        />
        <ChatFooter
          socket={socket}
          userName={auth.userData ? auth.userData.nickname : ''}
        />
      </div>
    </div>
  )
}

export default ChatPageCom
