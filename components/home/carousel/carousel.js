import React, { useState, useEffect } from 'react'
import Link from 'next/link'
// import Image from 'next/image'
import { PROD_LIST } from '@/configs/config-r'
import { useRouter } from 'next/router'
// style-----
import style from './carousel.module.css'
// react bootstrap
import Carousel from 'react-bootstrap/Carousel'
// react icons-----
// hook------

export default function CarouselS1({ pageName = '' }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isHoveredSmallOne, setIsHoveredSmallOne] = useState(false)
  const [isHoveredSmallTwo, setIsHoveredSmallTwo] = useState(false)

  const handleMouseEnter = (type) => {
    if (type === 'big') setIsHovered(true)
    if (type === 'smallOne') setIsHoveredSmallOne(true)
    if (type === 'smallTwo') setIsHoveredSmallTwo(true)
  }
  const handleMouseLeave = (type) => {
    if (type === 'big') setIsHovered(false)
    if (type === 'smallOne') setIsHoveredSmallOne(false)
    if (type === 'smallTwo') setIsHoveredSmallTwo(false)
  }

  const [data, setData] = useState({
    success: false,
    cate: [],
    searchMain: '',
  })

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
      {/* Carousel Start*/}
      <div className="container-fluid mb-3 mt-4">
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <Carousel
              fade
              style={{
                boxShadow: '0 0 15px #92918f94',
                borderRadius: '5px',
              }}
              className="mb-2 mb-lg-0"
            >
              <Carousel.Item
                style={{
                  background: isHovered ? '#48494980' : '',
                  height: '430px',
                  borderRadius: '5px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <img
                    text="First slide"
                    src="/ad1.png"
                    alt=""
                    width={1000}
                    height={1000}
                    className={`w-100 h-100 ${style.adImg}`}
                  />
                </div>
                <Carousel.Caption
                  style={{
                    marginBottom: '30px',
                  }}
                >
                  <h1 className={style.title}>
                    <strong>Let's make a DEAL</strong>
                  </h1>
                  <p className={style.txt}>
                    <strong>挖掘寶物，也可以愛護地球</strong>
                  </p>
                  <Link href="/help-center/deal">
                    <button type="button" className="btn btn-outline-dark">
                      了解更多
                    </button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  background: isHovered ? '#48494980' : '',
                  height: '430px',
                  borderRadius: '5px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <img
                    text="Second slide"
                    src="/woman2.jpg"
                    alt=""
                    width={1000}
                    height={1030}
                    className={`w-100 h-100 ${style.adImg}`}
                  />
                </div>
                <Carousel.Caption
                  style={{
                    marginBottom: '30px',
                  }}
                >
                  <h1 className={style.title2}>WOMAN'S DAY</h1>
                  <p className={style.txt2}>
                    <strong>女裝折扣 蓄勢待發</strong>
                  </p>
                  <Link href={`/shop?searchMain=女裝服飾`}>
                    <button type="button" className="btn btn-outline-dark">
                      了解更多
                    </button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  background: isHovered ? '#3b3c3c80' : '',
                  borderRadius: '5px',
                  height: '430px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <img
                    text="Third slide"
                    src="/globalday.jpg"
                    alt=""
                    width={500}
                    height={430}
                    className={`w-100 h-100 ${style.adImg}`}
                  />
                </div>
                <Carousel.Caption style={{ marginBottom: '30px' }}>
                  <h1 className={style.title3}>世界地球日</h1>
                  <p className={style.txt3}>
                    <strong>小碳點大翻倍</strong>
                  </p>
                  <Link href="/shop">
                    <button type="button" className="btn btn-outline-dark">
                      了解更多
                    </button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4">
            <div
              className={`mb-2 ${style.bg1}`}
              style={{
                boxShadow: '0 0 20px #92918f94',
                height: '205px',
                borderRadius: '5px',
              }}
              onMouseEnter={() => handleMouseEnter('smallOne')}
              onMouseLeave={() => handleMouseLeave('smallOne')}
            >
              <img
                src="/father.png"
                alt=""
                width={380}
                height={150}
                className={isHoveredSmallOne ? style.hover : style.nohover}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                }}
              />
              <div className={style.content}>
                <h3 className={`mt-2 ${style.shadow}`}>
                  <strong>\ 父親節大折扣 /</strong>
                </h3>
                <h5
                  className={`mt-4 ${style.shadow}`}
                  style={{
                    marginLeft: '35px',
                  }}
                >
                  <strong>爸爸辛苦了！</strong>
                </h5>
                <Link
                  href={`/shop?searchMain=男裝服飾`}
                  style={{ marginLeft: '50px' }}
                >
                  <button type="button" className={style.moreBtn} href="">
                    <strong>開始購物</strong>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`mb-1 ${style.bg2}`}
              style={{
                marginTop: '20px',
                boxShadow: '0 0 20px #92918f94',
                height: '205px',
                borderRadius: '5px',
              }}
              onMouseEnter={() => handleMouseEnter('smallTwo')}
              onMouseLeave={() => handleMouseLeave('smallTwo')}
            >
              <img
                src="/cool.png"
                alt=""
                width={380}
                height={150}
                className={isHoveredSmallTwo ? style.hover : style.nohover}
                style={{
                  opacity: '0.8',
                  borderRadius: '5px',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div className={style.content2}>
                <h3
                  className={style.shadow}
                  style={{
                    color: 'white',
                  }}
                >
                  <strong style={{ marginLeft: '80px' }}>
                    \ 歡慶DEAL上線 /
                  </strong>
                </h3>

                <Link
                  href="/activity"
                  style={{ marginLeft: '130px' }}
                  className="mt-5"
                >
                  <button type="button" className={style.moreBtn} href="">
                    <strong>活動報名中</strong>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </>
  )
}
