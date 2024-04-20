// pages/chat.js
import { useEffect, useState } from 'react'
// import DefaultLayout from '@/components/common/default-layout'
import Loader from '@/components/common/loading/loader'
import LoadingBar from 'react-top-loading-bar'
import ChatPageCom from '@/components/chat-app/ChatPageCom'
import { useSocket } from '@/context/socket-context'

export default function Chat() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const socket = useSocket()

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
    // <DefaultLayout pageName="home">
    <ChatPageCom socket={socket} />
    // </DefaultLayout>
  )

  return (
    <>
      <LoadingBar progress={progress} />
      {isLoading ? <Loader /> : display}
    </>
  )
}
