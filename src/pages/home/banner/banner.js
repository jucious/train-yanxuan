import React, { useState,useEffect } from 'react'
import { View, Swiper, SwiperItem,Image } from '@tarojs/components'

function Banner(props){
    const {list} = props;
    console.log(props)
    return(
        <Swiper
          className='banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay
        >
        {list.map(item => (
            <SwiperItem
              key={item.rank}
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.img}
              />
            </SwiperItem>
          ))}
      </Swiper>
    )
}
export default Banner