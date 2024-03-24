import { createContext, useContext, useState } from 'react'

// 建立context
const CartContext = createContext(null)

// 建立Context Provider元件
export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  // 處理商品數量(qty)遞增的函式
  const increment = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })
  }

  // 處理商品數量(qty)遞減的函式
  const decrement = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      else v
    })
  }

  // 處理商品刪除的函式
  const remove = (items, id) => {
    return items.filter((v, i) => {
      return v.id !== id
    })
  }

  // 加入到購物車
  const add = (items, item) => {
    const foundIndex = items.foundIndex((v, i) => {
      return v.id === item.id
    })

    if (foundIndex > -1) {
      return increment(items, item.id)
    } else {
      const newItem = { ...item, qty: 1 }
      return [...items, newItem]
    }
  }

  // 加入到購物車的處理函式
  // 加入到購物車的處理函式
  const addItem = (item) => {
    setItems(add(items, item))
  }

  // 遞增數量的處理函式
  const incrementItemById = (id) => {
    setItems(decrement(items, id))
  }

  // 遞減數量的處理函式
  const decrementItemById = (id) => {
    setItems(decrement(items, id))
  }

  // 移除項目的處理函式
  const removeItemById = (id) => {
    setItems(remove(items, id))
  }

  // 計算總數量
  const calcTotalItems = () => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty
    }
    return total
  }

  const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        incrementItemById,
        decrementItemById,
        removeItemById,
        addItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
