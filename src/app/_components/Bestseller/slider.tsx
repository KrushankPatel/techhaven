'use client'
import React, { useRef, useState } from 'react'
import NextImage from 'next/image'
import Link from 'next/link'
// import required modules
import { A11y, EffectCube, Navigation, Pagination, Scrollbar } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'

import classes from './index.module.scss'

// Import Swiper styles

export const Slider = ({ slides }) => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1124: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1324: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1824: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }

  return (
    <Swiper
      className={classes.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
      breakpoints={breakpoints}
      spaceBetween={20}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
    >
      {slides.map(slide => (
        <SwiperSlide key={slide.id}>
          <div className={classes.productCard}>
            <div className={classes.imagediv}>
              <NextImage src={slide.image} alt={slide.name} width={500} height={100} />
            </div>
            <div className={classes.productInfo}>
              <div className={classes.productInfo}>
                <a href={slide.link} className={classes.link}>
                  <h3>{slide.name}</h3>
                </a>
                <a href={slide.link} className={classes.link}>
                  <p className={classes.price}>Price: {slide.price}</p>
                </a>
                <div className={classes.innerdiv}>
                  <a href={slide.link} className={classes.link}>
                    <p className={classes.offprice}>{slide.offprice}</p>
                  </a>
                  <a href={slide.link} className={classes.link}>
                    <p className={classes.discount}>{slide.discount}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
