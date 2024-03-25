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
  const handleMouseEnter = () => {
    setIsHovered(true)
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <>
      {/*  Carousel Start */}
      <div
        className="container-fluid mt-4 mb-3 carouselArea"
        style={{ padding: '0 80px' }}
      >
        <div className="row px-xl-5">
          <div className="col-lg-8">
            <Carousel fade>
              <Carousel.Item
                style={{
                  background: isHovered ? '#5f616180' : '',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  text="First slide"
                  src="/ad1.png"
                  alt=""
                  width={1500}
                  height={680}
                  style={{
                    opacity: '0.9',
                    borderRadius: '5px',
                  }}
                />
                <Carousel.Caption
                  style={{
                    marginBottom: '230px',
                  }}
                >
                  <h1>
                    <strong>Let's make a DEAL</strong>
                  </h1>
                  <p>
                    <strong>挖掘寶物，也可以愛護地球</strong>
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Secondary
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  background: isHovered ? '#5f616180' : '',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  text="Second slide"
                  src="/woman2.jpg"
                  alt=""
                  width={1500}
                  height={680}
                  style={{
                    opacity: '0.9',
                    borderRadius: '5px',
                  }}
                />
                <Carousel.Caption style={{ marginBottom: '230px' }}>
                  <h1>WOMAN'S DAY</h1>
                  <p>
                    <strong>女裝折扣 蓄勢待發</strong>
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Secondary
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  background: isHovered ? '#5f616180' : '',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  text="Third slide"
                  src="/globalday.jpg"
                  alt=""
                  width={1500}
                  height={680}
                  style={{
                    opacity: '0.9',
                    borderRadius: '5px',
                  }}
                />
                <Carousel.Caption style={{ marginBottom: '230px' }}>
                  <h1>世界地球日</h1>
                  <p>
                    <strong>小碳點大翻倍</strong>
                  </p>
                  <button type="button" class="btn btn-outline-secondary">
                    Secondary
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-4" style={{ paddingLeft: '30px' }}>
            <div
              className="product-offer mb-1 rounded"
              style={{ height: '340px' }}
            >
              <Image
                className="Image-fluid"
                src="/father.png"
                alt=""
                width={600}
                height={330}
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">
                  <strong>\ 父親節大折扣 /</strong>
                </h6>
                <h3 className="text-white mb-3">爸爸辛苦了！</h3>
                <Link href="" className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="product-offer rounded" style={{ height: '340px' }}>
              <Image
                className="Image-fluid"
                src="/good.png"
                alt=""
                width={600}
                height={330}
              />
              <div className="offer-text">
                <h6 className="text-white text-uppercase">
                  <strong>\ 歡慶DEAL上線 /</strong>
                </h6>
                <h4 className="text-white mb-3">
                  企業親子二手市集活動招募中！
                </h4>
                <a href="" className="btn btn-primary">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}
    </>
  )
}
