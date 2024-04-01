import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

  return (
    <>
      {/*  Carousel Start */}
      <div className="container-fluid mt-5 mb-3" style={{ padding: '0 80px' }}>
        <div className="row px-xl-5">
          <div className="col-lg-8 col-md-12 mb-3">
            <Carousel
              fade
              style={{
                boxShadow: '0 0 15px #92918f94',
                borderRadius: '5px',
              }}
            >
              <Carousel.Item
                style={{
                  background: isHovered ? '#48494980' : '',
                  borderRadius: isHovered ? '5px' : '5px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <Image
                    text="First slide"
                    src="/ad1.png"
                    alt=""
                    width={1500}
                    height={600}
                    className={style.adImg}
                  />
                </div>
                <Carousel.Caption
                  style={{
                    marginBottom: '110px',
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
                  borderRadius: isHovered ? '5px' : '5px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <Image
                    text="Second slide"
                    src="/woman2.jpg"
                    alt=""
                    width={1500}
                    height={600}
                    className={style.adImg}
                  />
                </div>
                <Carousel.Caption
                  style={{
                    marginBottom: '110px',
                  }}
                >
                  <h1 className={style.title2}>WOMAN'S DAY</h1>
                  <p className={style.txt2}>
                    <strong>女裝折扣 蓄勢待發</strong>
                  </p>
                  <Link href="/shop">
                    <button type="button" className="btn btn-outline-dark">
                      了解更多
                    </button>
                  </Link>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  background: isHovered ? '#3b3c3c80' : '',
                  borderRadius: isHovered ? '5px' : '5px',
                }}
                onMouseEnter={() => handleMouseEnter('big')}
                onMouseLeave={() => handleMouseLeave('big')}
              >
                <div className={style.adArea}>
                  <Image
                    text="Third slide"
                    src="/globalday.jpg"
                    alt=""
                    width={1500}
                    height={600}
                    className={style.adImg}
                  />
                </div>
                <Carousel.Caption
                  style={{ marginBottom: '80px', marginLeft: '400px' }}
                >
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
          <div className="col-lg-4 col-md-12" style={{ padding: '0 10px' }}>
            <div
              className={`mb-2 rounded ${style.bg1}`}
              style={{ boxShadow: '0 0 20px #92918f94', marginRight: '30px' }}
              onMouseEnter={() => handleMouseEnter('smallOne')}
              onMouseLeave={() => handleMouseLeave('smallOne')}
            >
              <Image
                src="/father.png"
                alt=""
                width={530}
                height={293}
                className={isHoveredSmallOne ? style.hover : style.nohover}
              />
              <div className={style.content}>
                <h1 className={`mt-3 ${style.shadow}`}>
                  <strong>\ 父親節大折扣 /</strong>
                </h1>
                <h4
                  className={`mt-4 ${style.shadow}`}
                  style={{
                    marginLeft: '75px',
                  }}
                >
                  <strong>爸爸辛苦了！</strong>
                </h4>
                <Link href="/shop" style={{ marginLeft: '95px' }}>
                  <button type="button" className={style.moreBtn} href="">
                    <strong>開始購物</strong>
                  </button>
                </Link>
              </div>
            </div>
            <div
              className={`rounded ${style.bg2}`}
              style={{ marginTop: '12px', boxShadow: '0 0 20px #92918f94' }}
              onMouseEnter={() => handleMouseEnter('smallTwo')}
              onMouseLeave={() => handleMouseLeave('smallTwo')}
            >
              <Image
                src="/cool.png"
                alt=""
                width={530}
                height={293}
                className={isHoveredSmallTwo ? style.hover : style.nohover}
              />
              <div className={style.content2}>
                <h1
                  className={style.shadow}
                  style={{
                    color: 'white',
                  }}
                >
                  <strong>\ 歡慶DEAL上線 /</strong>
                </h1>
                <h5
                  className="mb-3 mt-3"
                  style={{
                    color: 'white',
                    textShadow: 'rgba(0, 0, 0, 0.729)',
                    marginLeft: '22px',
                  }}
                >
                  <strong>企業親子二手市集活動招募中！</strong>
                </h5>
                <Link href="/activity" style={{ marginLeft: '120px' }}>
                  <button type="button" className={style.moreBtn} href="">
                    <strong>報名活動</strong>
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
