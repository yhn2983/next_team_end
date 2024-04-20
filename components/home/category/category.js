import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
import { useRouter } from 'next/router'
// style-----
import style from './category.module.css'
// react bootstrap
// react icons-----
import { AiTwotoneGift, AiOutlineSmallDash } from 'react-icons/ai'
// hook------

export default function Category() {
  // Product & Category
  const [data, setData] = useState({
    success: false,
    cate: [],
    searchMain: '',
    totalFree: 0,
    totalComputer: 0,
    totalPhone: 0,
    totalMan: 0,
    totalWoman: 0,
    totalBeauty: 0,
    totalBrand: 0,
    totalGame: 0,
    totalEarphone: 0,
    totalCamera: 0,
    totalHome: 0,
    totalEletri: 0,
    totalBaby: 0,
    totalHealth: 0,
    totalSport: 0,
    totalDrink: 0,
    totalPet: 0,
    totalTicket: 0,
    totalCar: 0,
    totalOther: 0,
  })

  const itemPhoto = [
    'gift.jpg',
    'computer.png',
    'phone.png',
    'man.png',
    'woman-sm.png',
    'beauty.png',
    'luxury.png',
    'game.png',
    'earphone.png',
    'camera.png',
    'home.png',
    'tv.png',
    'baby.png',
    'health.png',
    'health.png',
    'food.png',
    'pet.png',
    'ticket.png',
    'car.png',
    'other.png',
  ]

  const itemCount = [
    data.totalFree,
    data.totalComputer,
    data.totalPhone,
    data.totalMan,
    data.totalWoman,
    data.totalBeauty,
    data.totalBrand,
    data.totalGame,
    data.totalEarphone,
    data.totalCamera,
    data.totalHome,
    data.totalEletri,
    data.totalBaby,
    data.totalHealth,
    data.totalSport,
    data.totalDrink,
    data.totalPet,
    data.totalTicket,
    data.totalCar,
    data.totalOther,
  ]

  useEffect(() => {
    fetch(`${PROD_LIST}${location.search}`)
      .then((r) => r.json())
      .then((dataObj) => {
        setData(dataObj)
        console.log(dataObj)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  // Router-----
  const router = useRouter()
  const qs = { ...router.query }

  return (
    <>
      {/* Categories Start */}
      <div
        className="container-fluid pt-5 mt-5"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4 text-center mb-5">
          <span className="pr-3" style={{ color: '#8e2626' }}>
            <strong>
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash className="me-2" />
              <AiTwotoneGift className="mb-2" />
              商品分類
              <AiOutlineSmallDash className="ms-2" />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
              <AiOutlineSmallDash />
            </strong>
          </span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {data.cate.map((v, i) => {
            if (v.parent_id == 0) {
              return (
                <div key={i} className="col-lg-3 col-md-4 col-sm-6 pb-1">
                  <Link
                    className="text-decoration-none"
                    style={{ color: '#8e2626' }}
                    href={`/shop?searchMain=${v.category_name}`}
                  >
                    <div
                      className={`cat-item d-flex align-items-center mb-4 rounded mx-auto ${style.txt}`}
                      style={{ width: '90%', boxShadow: '0 0 10px gray' }}
                    >
                      <div
                        className="overflow-hidden rounded"
                        style={{
                          width: '100px',
                          height: '100px',
                        }}
                      >
                        {itemPhoto.map((v2, i2) => {
                          if (i2 == i)
                            return (
                              <img
                                key={i}
                                className={`img-fluid w-100 h-100 rounded ${style.item}`}
                                src={`/${v2}`}
                                alt=""
                                width={100}
                                height={100}
                                style={{ objectFit: 'cover' }}
                              />
                            )
                        })}
                      </div>
                      <div className="flex-fill pl-3 ms-3 mt-1">
                        <h5>
                          <strong>{v.category_name}</strong>
                        </h5>
                        {itemCount.map((v3, i3) => {
                          if (i3 == i) {
                            return (
                              <>
                                <small className={`ms-1 ${style.textBody}`}>
                                  {v3} 件商品
                                </small>
                              </>
                            )
                          }
                        })}
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </div>
      </div>
      {/* Categories End */}
    </>
  )
}
