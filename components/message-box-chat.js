// ChatMessage.js
import React from 'react'
import 'react-chat-elements/dist/main.css'
import { MessageBox } from 'react-chat-elements'
import styles from '@/styles/lee-form.module.scss'

export default function MessageBoxChat() {
  return (
    <div className={styles.messageBox}>
      <MessageBox
        position={'left'} // 訊息框的位置，可以是 'left' 或 'right'
        type={'text'} // 訊息的類型，可以是 'text' 或 'photo'
        text={'請問這個商品還有嗎?'} // 訊息的內容
        dateString={'時間'} // 訊息的時間
        avatar={'/default.png'} // 使用者的頭像
        title={'我是使用者'} // 使用者的名稱
      />
    </div>
  )
}
