import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  // increment of qty
  const increment = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, product_qty: v.product_qty + 1 }
      else return v
    })
  }

  // decrement of qty
  const decrement = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, product_qty: v.product_qty - 1 }
      else return v
    })
  }

  // delete from cart
  const remove = (items, id) => {
    return items.filter((v, i) => {
      return v.id !== id
    })
  }

  // add into cart
  const add = (items, item) => {
    const foundIndex = items.findIndex((v, i) => {
      return v.id === item.id
    })
    if (foundIndex > -1) {
      return increment(items, item.id)
    } else {
      const newItem = { ...item, product_qty: 1 }
      return [...items, newItem]
    }
  }

  // function of add prod into cart
  const addItem = (item) => {
    setItems(add(items, item))
  }

  // function of qty increment
  const incrementItemById = (id) => {
    setItems(increment(items, id))
  }

  // function of qty decrement
  const decrementItemById = (id) => {
    setItems(decrement(items, id))
  }

  // function of prod removment
  const removeItemById = (id) => {
    setItems(remove(items, id))
  }

  // function of counting total qty
  const calcTotalItems = () => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].product_qty
    }
    return total
  }

  // function of counting total price
  const calcTotalPrice = () => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].product_qty * items[i].product_price
    }
    return total
  }

  // function of counting total price
  const calcTotalCP = () => {
    let total = 0.0
    for (let i = 0; i < items.length; i++) {
      const roundedValue = parseFloat((items[i].mc * 0.01).toFixed(2))
      total += roundedValue
    }
    return total
  }

  const totalItems = items.reduce((acc, v) => acc + v.product_qty, 0)
  const totalPrice = items.reduce(
    (acc, v) => acc + v.product_qty * v.product_price,
    0
  )
  const totalCP = items.reduce((acc, v) => {
    const roundedValue = Math.round(v.mc * 0.01 * 100) / 100
    return Math.round((acc + roundedValue) * 100) / 100
  }, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        incrementItemById,
        decrementItemById,
        removeItemById,
        addItem,
        calcTotalPrice,
        calcTotalCP,
        totalItems,
        totalPrice,
        totalCP,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
