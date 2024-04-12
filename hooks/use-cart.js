import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PROD_LIST, CART_ITEM_UPDATE_PUT } from '@/configs/config-r'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  //Router
  const router = useRouter()

  // cart products
  const [items, setItems] = useState({ cartProd: [] })

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const r = await fetch(`${PROD_LIST}${location.search}`)
        if (r.ok) {
          const dataObj = await r.json()
          setItems(dataObj)
          console.log(dataObj)
        } else {
          console.error('Fail to fetch')
        }
      } catch (e) {
        console.error('Error', e)
      }
    }
    fetchCartData()
  }, [router.query])

  const updateCartItem = async (id, updatedData) => {
    try {
      const r = await fetch(`${CART_ITEM_UPDATE_PUT}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      })
      if (r.ok) {
        const updatedItems = await r.json()
        setItems(updatedItems)
      } else {
        console.error('Fail to update')
      }
    } catch (error) {
      console.error('Error')
    }
  }

  // increment of qty
  const increment = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, p_qty: v.p_qty + 1 }
      else return v
    })
  }

  // decrement of qty
  const decrement = (items, id) => {
    return items.map((v, i) => {
      if (v.id === id) return { ...v, p_qty: v.p_qty - 1 }
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
      const newItem = { ...item, p_qty: 1 }
      return [...items, newItem]
    }
  }

  // function of add prod into cart
  const addItem = (item) => {
    setItems(add(items.cartProd, item))
  }

  // function of qty increment
  const incrementItemById = (id) => {
    const updatedItem = items.cartProd.find((item) => item.id === id)
    if (updatedItem) {
      const updatedQty = updatedItem.p_qty + 1
      updateCartItem(id, { ...updatedItem, p_qty: updatedQty })
    }
  }

  const decrementItemById = (id) => {
    const updatedItem = items.cartProd.find((item) => item.id === id)
    if (updatedItem && updatedItem.p_qty > 1) {
      const updatedQty = updatedItem.p_qty - 1
      updateCartItem(id, { ...updatedItem, p_qty: updatedQty })
    }
  }

  // function of prod removment
  const removeItemById = (id) => {
    setItems(remove(items.cartProd, id))
  }

  const totalItems = items.cartProd.reduce((acc, v) => acc + v.p_qty, 0)
  const totalPrice = items.cartProd.reduce(
    (acc, v) => acc + v.p_qty * v.p_price,
    0
  )
  const totalCP = items.cartProd.reduce((acc, v) => acc + v.available_cp, 0)

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
        totalCP,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
