import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);
const Carousel = () => {
  const setSlidesPerView = () => {
    if (window.innerWidth <= 732) {
      return [2, 20];
    } else {
      return [8, 10];
    }
  };

  return (
    <StyledSwiper
      spaceBetween={setSlidesPerView()[1]}
      slidesPerView={setSlidesPerView()[0]}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(evt) => console.log(evt)}
    >
      {Array(10).fill(1).map((el, index) => {
        return (
          <SwiperSlide key={index}>
            <Teste></Teste>
          </SwiperSlide>
        );
      })}
    </StyledSwiper>
  );
};

export default Carousel;

const StyledSwiper = styled(Swiper)`
  width: 95vw;
  margin-left: 4vw;
  height: 300px;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
  .swiper-slide {
    transition: 0.3s;
    &:hover ~ div {
      transform: translate(-25%);
    }
    &:hover {
      transform: scale(1.2);
      z-index: 10;
      border-radius: 2px;
    }
  }

  @media (min-width: 532px) {
    height: 410px;
  } 

  @media (min-width: 731px) {
  }
`;
const Teste = styled.div`
width: 100%;
height: 100%;
background:black;
`
