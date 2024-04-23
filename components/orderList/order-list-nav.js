import Styles from '@/styles/orderList.module.css'
import Link from 'next/link'
import React from 'react'

export default function OrderListNav({ pageName = '' }) {
  const myStyle = { backgroundColor: '#FB966E' }

  return (
    <>
      <nav className={Styles.navbarOrder}>
        {/* <label>
  <FaAlignJustify />
</label>
<input type="checkbox" name="check" id="checkBtn" /> */}
        <ul>
          <li>
            <Link
              href="/buyer/order-list"
              style={pageName === 'od' ? myStyle : {}}
            >
              全部訂單
            </Link>
          </li>
          <li>
            <Link
              href="/buyer/order-list-unsend"
              style={pageName === 'od-unsend' ? myStyle : {}}
            >
              待出貨
            </Link>
          </li>
          <li>
            <Link
              href="/buyer/order-list-unfinished"
              style={pageName === 'od-unfi' ? myStyle : {}}
            >
              待收貨
            </Link>
          </li>
          <li>
            <Link
              href="/buyer/order-list-finished"
              style={pageName === 'od-fi' ? myStyle : {}}
            >
              已完成
            </Link>
          </li>
          <li>
            <Link
              href="/buyer/bargain-buyer-req"
              style={pageName === 'bargain-buyer' ? myStyle : {}}
            >
              我的議價要求
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
