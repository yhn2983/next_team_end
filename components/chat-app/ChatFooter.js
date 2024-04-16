import React, { useState } from 'react'
import style from '@/styles/lee-form.module.scss'
import { useSocket } from '@/context/socket-context'

const ChatFooter = ({ userName }) => {
  const { socket, connectionState } = useSocket()
  const [message, setMessage] = useState('')

  const handleTyping = () => socket.emit('typing', `${userName} 正在输入`) // 使用userName來判斷

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim() && userName) {
      const connectionState = JSON.parse(
        localStorage.getItem('connectionState')
      )
      socket.emit('message', {
        text: message,
        name: userName, // 使用userName來判斷
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        connectionState,
      })
    }
    setMessage('')
  }
  return (
    <div className={`${style.chat__footer}`}>
      <form className={`${style.form}`} onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="寫訊息..."
          className={`${style.message}`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className={`${style.sendBtn}`}>發送</button>
      </form>
    </div>
  )
}

export default ChatFooter
