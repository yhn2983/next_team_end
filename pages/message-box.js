import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Image from 'next/image'
import ChatMessage from '@/components/message-box-chat'
import styles from '@/styles/lee-form.module.scss'

// ...

export default function Profile() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    Modal.setAppElement('#__next') // 使用 Next.js 的根元素作為應用元素
  }, [])

  return (
    <div className="col-lg-4">
      <div className={`card mb-4 ${styles.card}`}>
        <div className="card-body text-center">
          <Image src="/imgs/ESG.png" alt="Profile" width={500} height={300} />{' '}
          {/* 請確保這個路徑是正確的 */}
          <button onClick={() => setModalIsOpen(true)}>打開聊天訊息</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <ChatMessage />
            <button onClick={() => setModalIsOpen(false)}>關閉聊天訊息</button>
          </Modal>
        </div>
      </div>
    </div>
  )
}
