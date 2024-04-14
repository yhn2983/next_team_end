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
            <Link href="/order-list">全部訂單</Link>
          </li>
          <li>
            <Link href="/order-list-unfinished">未完成</Link>
          </li>
          <li>
            <Link href="/order-list-finished">已完成</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  )
}
