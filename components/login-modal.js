import React, { useState, useEffect } from 'react'
import { useAuth } from '@/context/auth-context'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

const Modal = dynamic(
  () =>
    import('react-modal').then((modal) => {
      modal.setAppElement('#__next') // replace with your app's id
      return modal
    }),
  { ssr: false }
)

export default function LoginModal({ isOpen, openModal, closeModal }) {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    login(email, password).then((result) => {
      if (result) {
        alert('登入成功')
        router.push('/')
      } else {
        alert('登入失敗')
      }
    })
  }

  return (
    <div>
      <button onClick={openModal}>登入</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="登入表格"
      >
        <div className="container d-flex justify-content-center">
          <div className="border-dark border border-3 rounded p-3 w-75">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <h3 className="text-center">登入</h3>
              </div>
              <div className="mb-3">
                <div className="user-email">
                  <label className="form-label ms-2" htmlFor="email">
                    電子郵件
                  </label>
                  <input
                    className="form-control rounded"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="輸入電子郵件"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="user-password">
                  <label className="form-label ms-2" htmlFor="password">
                    密碼
                  </label>
                  <input
                    className="form-control rounded"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="輸入密碼"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn rounded border border-3 border-dark btnForget"
                  >
                    登入
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <button onClick={closeModal}>關閉</button>
      </Modal>
    </div>
  )
}
