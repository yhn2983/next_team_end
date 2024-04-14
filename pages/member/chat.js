import ChatPageCom from '@/components/chat-app/ChatPageCom'
import socketIO from 'socket.io-client'
const socket = socketIO.connect('http://localhost:3003')
import { useEffect, useState } from 'react'
// parts of pages
import DefaultLayout from '@/components/common/default-layout'
// loading bar & loading icon
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(60)
      setTimeout(() => {
        setIsLoading(false)
        setProgress(100)
      }, 100)
    }
  }, [isLoading])

  const display = (
    <>
      <DefaultLayout pageName="home">
        <ChatPageCom socket={socket} />
      </DefaultLayout>
    </>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
