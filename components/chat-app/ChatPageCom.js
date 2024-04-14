import React, { useEffect, useState, useRef } from 'react'
import ChatBar from './ChatBar'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'
import style from '@/styles/lee-form.module.scss'
import { useAuth } from '@/context/auth-context'

const ChatPageCom = ({ socket }) => {
  const [messages, setMessages] = useState([])
  const [typingStatus, setTypingStatus] = useState('')
  const lastMessageRef = useRef(null)
  // 會員的資料跟登入狀態
  const { checkAuth, auth } = useAuth()

  useEffect(() => {
    const messageResponseHandler = (data) => {
      setMessages((prevMessages) => [...prevMessages, data])
    }

    socket.on('messageResponse', messageResponseHandler)

    // 在組件卸載時移除監聽器
    return () => {
      socket.off('messageResponse', messageResponseHandler)
    }
  }, [socket]) // 只在 socket 變更時重新設定監聽器

  useEffect(() => {
    // 每當文字消變動，就會滾動
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    const typingResponseHandler = (data) => {
      setTypingStatus(data)
    }

    socket.on('typingResponse', typingResponseHandler)

    // 在組件卸載時移除監聽器
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
