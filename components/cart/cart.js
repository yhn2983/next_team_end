import React from 'react'
import styles from '@/components/cart/cart.module.css'
import { useCart } from '@/hooks/use-cart2'

export default function CartList() {
  const { items, incrementItemById, decrementItemById, removeItemById } =
    useCart()

  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    incrementItemById(v.id)
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    // 如果使用者按下-按鈕，預先計算商品的數量會變多少
                    const nextQty = v.qty - 1
                    // 下一個(即將改變)的商品數量會變為0的話，移除此商品
                    if (nextQty === 0) removeItemById(v.id)
                    else decrementItemById(v.id)
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    removeItemById(v.id)
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
