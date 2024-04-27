import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
//page
import DefaultLayout from '@/components/common/default-layout'
// import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'
import Styles from '@/styles/index-maket.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { BACKSTAGE_MANAGER } from '@/configs/config-lee'

import axios from 'axios'
// function MyChart() {
//   const [chartData, setChartData] = useState({
//     labels: ['06:00', '12:00', '18:00', '24:00'],
//     datasets: [
//       {
//         label: '',
//         data: [0, 0, 0, 0],
//         backgroundColor: 'rgba(54, 162, 235, 0.2)',
//         borderColor: 'rgba(54, 162, 235, 1)',
//         borderWidth: 1,
//       },
//     ],
//   })

// useEffect(() => {
//   const ctx = document.getElementById('lineChart').getContext('2d')
//   const chart = new Chart(ctx, {
//     type: 'line',
//     data: chartData,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//     },
//   })
//   return () => chart.destroy()
// }, [])

//   return (
//     <div>
//       <canvas id="lineChart"></canvas>
//     </div>
//   )
//  } <-- 將這個 } 移動到下面

function IndexMaket() {
  const [state, setState] = useState()

  useEffect(() => {
    console.log('123')
    const data = async () => {
      try {
        const statedata = await axios.get(`${BACKSTAGE_MANAGER}`)
        setState(statedata)
        console.log(
          statedata,
          'gkjohbesiughbuieoawbgnoiuewajngoujeksanviaoeujgfhbqeiajkfb'
        )
      } catch (error) {
        console.log(error)
      }
    }
    data()
  }, [])
  //123
  return (
    <>
      <DefaultLayout pageName="helpCenter">
        <Head>
          <title>賣場中心 | DEAL-2ND HAND SHOP</title>
        </Head>
        <div className={Styles['container']}>
          <div
            className={Styles['accordion-container']}
            id="accordionPanelsStayOpenExample"
          >
            {/* 手风琴项 1 */}
            {/* 手风琴项 2 */}
            <div className={Styles['accordion-item']}>
              <h2
                className={Styles['accordion-header']}
                id="panelsStayOpen-headingTwo"
              >
                <span className={Styles['icon-wrapper']}>
                  <FontAwesomeIcon
                    icon={faFileLines}
                    style={{ color: '#8e2626' }}
                  />
                </span>
                <span
                  className={Styles['accordion-title']}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  訂單管理
                </span>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className={Styles['accordion-content']}>
                  <div className={Styles['accordion-body']}>
                    <Link href="/Maket/unpaid-maket">
                      <div className="accordion-body">我的銷售</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 手风琴项 3 */}
            <div className={Styles['accordion-item']}>
              <h2
                className={Styles['accordion-header']}
                id="panelsStayOpen-headingThree"
              >
                <span className={Styles['icon-wrapper']}>
                  <FontAwesomeIcon
                    icon={faBagShopping}
                    style={{ color: '#8e2626' }}
                  />
                </span>
                <span
                  className={Styles['accordion-title']}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  商品管理
                </span>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className={Styles['accordion-content']}>
                  <div className={Styles['accordion-body']}>
                    <Link href="/Maket/return">
                      <div className="accordion-body">我的商品</div>
                    </Link>
                    <Link href="/Maket/list-maket">
                      <div className="accordion-body">新增商品</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles['content-container']}>
            <div className={Styles['rightContent']} id="rightContent" />
            {/* 代辦事項 */}
            <div className={Styles['enlarge-container']} id="productList">
              <div className={Styles['toto-container']}>
                <h2 className={Styles['todo-title']}>待辦事項清單</h2>
                <div className={Styles['todo-list']}>
                  <div className={Styles['item']}>
                    <span className={Styles['count']}>0</span>
                    <span className={Styles['label']}>待付款訂單</span>
                  </div>
                  <div className={Styles['item']}>
                    <span className={Styles['count']}>0</span>
                    <span className={Styles['label']}>已完成訂單</span>
                  </div>
                  <div className={Styles['item']}>
                    <span className={Styles['count']}>0</span>
                    <span className={Styles['label']}>未上架商品</span>
                  </div>
                  <div className={Styles['item']}>
                    <span className={Styles['count']}>0</span>
                    <span className={Styles['label']}>已上架商品</span>
                  </div>
                </div>
              </div>
              {/* <div className={Styles['todo-container']}>
                <h2 className={Styles['todo-title']}>賓客數據中心</h2>
                <p className={Styles['item-label']}>顯示最新至 GMT+8 22:00</p>
                <div className={Styles['data-container']}>
                  <div className={Styles['chart-container']}>
                    <canvas id="lineChart" />
                  </div>
                  <div className={Styles['data-grid']}>
                    <div className={Styles['data-item']}>
                      <h3>不重複訪客</h3>
                      <p className={Styles['value']}>0</p>
                      <p className={Styles['percentage']}>約佔天比 0.00%</p>
                    </div>
                    <div className={Styles['data-item']}>
                      <h3>頁面瀏覽數</h3>
                      <p className={Styles['value']}>0</p>
                      <p className={Styles['percentage']}>約佔天比 0.00%</p>
                    </div>
                    <div className={Styles['data-item']}>
                      <h3>訂單</h3>
                      <p className={Styles['value']}>0</p>
                      <p className={Styles['percentage']}>約佔天比 0.00%</p>
                    </div>
                    <div className={Styles['data-item']}>
                      <h3>下單轉換率</h3>
                      <p className={Styles['value']}>0.00%</p>
                      <p className={Styles['percentage']}>約佔天比 0.00%</p>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}
        {/* Help Center start */}
        <div
          className="container-fluid mt-4"
          style={{ padding: '0 110px', marginBottom: '150px' }}
        ></div>
        {/* Help Center end */}
      </DefaultLayout>
    </>
  )
}
export default IndexMaket
// export { MyChart }
