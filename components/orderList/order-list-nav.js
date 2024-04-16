import Styles from '@/styles/orderList.module.css'
import Link from 'next/link'
import React from 'react'

export default function OrderListNav() {
  return (
    <>
      <nav className={Styles.navbarOrder}>
        {/* <label>
  <FaAlignJustify />
</label>
<input type="checkbox" name="check" id="checkBtn" /> */}
        <ul>
          <li>
            <Link href="/buyer/order-list">全部訂單</Link>
          </li>
          <li>
            <Link href="/buyer/order-list-unsend">待出貨</Link>
          </li>
          <li>
            <Link href="/buyer/order-list-unfinished">待收貨</Link>
          </li>
          <li>
            <Link href="/buyer/order-list-finished">已完成</Link>
          </li>
          <li>
            <a href="/buyer/bargain-buyer-req">我的議價要求</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
