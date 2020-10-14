import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

import SwiperCore, { Navigation } from "swiper";
import Item from "antd/lib/list/Item";

SwiperCore.use([Navigation]);
const Carousel = ({ images }) => {
  const setSlidesPerView = () => {
    if (window.innerWidth <= 732) {
      return [2, 20];
    } else {
      return [4, 10];
    }
  };

  console.log(images);

  return (
    <StyledSwiper
      spaceBetween={setSlidesPerView()[1]}
      slidesPerView={setSlidesPerView()[0]}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={(evt) => console.log(evt)}
    >
      {images &&
        images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <StyledImg src={image} />
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
  height: 200px;
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
    height: 350px;
  }

  @media (min-width: 731px) {
  }
`;

const StyledImg = styled.img`
  width: 250px;
  height: 100%;
  background-size: fill;
`;
