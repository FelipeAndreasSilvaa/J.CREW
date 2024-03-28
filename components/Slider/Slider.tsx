"use client"
import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

class SliderSimple extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true, // Habilitar o autoplay
      autoplaySpeed: 2000, // Definir o tempo de espera entre as transições em milissegundos (2000ms = 2 segundos)
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image src={'/slide-1.webp'} width={300} height={50} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-2.webp'} width={300} height={50} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-3.webp'} width={300} height={300} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-4.webp'} width={300} height={200} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-1.webp'} width={300} height={50} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-2.webp'} width={300} height={50} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-3.webp'} width={300} height={300} alt='slide1' />
          </div>
          <div>
            <Image src={'/slide-4.webp'} width={300} height={200} alt='slide1' />
          </div>
          <div>
          <Image src={'/slide-1.webp'} width={300} height={200} alt='slide1' />

          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderSimple;
