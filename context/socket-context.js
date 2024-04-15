import { createContext, useContext, useEffect, useState } from 'react'
import socketIO from 'socket.io-client'

// 創建一個新的 context
const SocketContext = createContext(null)

// 創建一個提供者組件
export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null)
  const [connectionState, setConnectionState] = useState({
    userId: null,
    otherUserId: null,
    roomId: null,
  })

  useEffect(() => {
    const newSocket = socketIO.connect('http://localhost:3003')
    newSocket.connectionState = connectionState
    setSocket(newSocket)

    return () => {
      newSocket.disconnect()
    }
  }, [connectionState])

  return (
    <SocketContext.Provider
      value={{ socket, connectionState, setConnectionState }}
    >
      {children}
    </SocketContext.Provider>
  )
}

// 創建一個自定義 hook 來使用 socket.io 連接
export function useSocket() {
  const { socket, connectionState, setConnectionState } =
    useContext(SocketContext)
  return { socket, connectionState, setConnectionState }
}

export default SocketContext
