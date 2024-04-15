import React from 'react'
// import { useRouter } from 'next/router'
import style from '@/styles/lee-form.module.scss'
import { useEffect } from 'react'
import { useSocket } from '@/context/socket-context'
import { CREATE_ROOM_POST } from '@/components/config'

const ChatBody = ({ messages, lastMessageRef, typingStatus, userName }) => {
  // const router = useRouter()
  const { socket } = useSocket()

  useEffect(() => {
    return () => {
      socket.disconnect()
    }
  }, [socket])

  const handleLeaveChat = () => {
    // localStorage.removeItem('userName')
    socket.disconnect()
    // router.push('/')
  }

  return (
    <>
      <header className={`${style.chat__mainHeader}`}>
        <p>開始聊天</p>
        <button className={`${style.leaveChat__btn}`} onClick={handleLeaveChat}>
          離開聊天
        </button>
      </header>

      <div className={`${style.message__container}`}>
        {messages.map((message) =>
          message.name === userName ? (
            <div className={`${style.message__chats}`} key={message.id}>
              <p className={`${style.sender__name}`}>你</p>
              <div className={`${style.message__sender}`}>
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className={`${style.message__chats}`} key={message.id}>
              <p>{message.name}</p>
              <div className={`${style.message__recipient}`}>
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className={`${style.message__status}`}>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  )
}

export default ChatBody
