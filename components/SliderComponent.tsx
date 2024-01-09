"use client"
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/utils/Carousel.module.css';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const images = [
  'slider1.jpg',
  'slider2.jpg',
  'slider3.jpg',
];

const SliderComponent = () => {
  const [sliderIndex, setSliderIndex] = useState(0)
  const router = useRouter()
  const button = <Button className='p-1 my-2 md:my-7 md:p-10 border border-white md:text-4xl font-semibold hover:border-gray-200 md:rounded-xl' onClick={() => router.push('/contact')}>Contact Us</Button>
  return (
    <div className={styles.sliderContainer} >
      <Slider
        infinite={true}
        speed={1000}
        autoplay={true}
        autoplaySpeed={4000}
        slidesToShow={1}
        slidesToScroll={1}
        beforeChange={() => setSliderIndex(prev => (prev + 1) % 3)}
      // swipeToSlide
      >
        {images.map((image, index) => (
          <div id='' key={index} className={`${styles.slide}`} >
            <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] animate-service-banner bg-no-repeat bg-center' style={{ backgroundImage: `url("/banner-overlay.png")` }} > </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] bg-black bg-opacity-20' > </div>
            <img src={image} alt={`Slide ${index + 1}`} className='' />
            <div className={`${styles.textOverlay} ${sliderIndex === 0 ? 'block' : 'hidden'} animate-slider-text md:text-7xl font-extrabold leading-normal whitespace-pre-wrap p-4 md:p-16`}>
              <p>
                Taking measures to prevent pollution is  equal to extending  <span className=' bg-gradient-to-b from-transparent via-transparent to-blue-500'>human</span>  existence on <span className='bg-gradient-to-b from-transparent via-transparent to-yellow-500'>Earth</span>
              </p>
              {button}
            </div>
            <div className={`${styles.textOverlay}  ${sliderIndex === 1 ? 'block' : 'hidden'} animate-slider-text md:text-7xl font-extrabold leading-normal whitespace-pre-wrap p-4 md:p-16`}>
              <p>
                The environment has provided a healthy and <span className=' bg-gradient-to-b from-transparent via-transparent to-orange-500'>safe life</span> all these years; Now, it is time toreciprocate and give back to the <span className='bg-gradient-to-b from-transparent via-transparent to-blue-500'>environment</span>
              </p>
              {button}
            </div>
            <div className={`${styles.textOverlay}  ${sliderIndex === 2 ? 'block' : 'hidden'} animate-slider-text md:text-7xl font-extrabold leading-normal whitespace-pre-wrap p-4 md:p-16`}>
              <p>
                It is not just you who depends on the  environment;  <span className=' bg-gradient-to-b from-transparent via-transparent to-yellow-500'>think about animals</span> ,birds and  <span className='bg-gradient-to-b from-transparent via-transparent to-blue-500'>aqua life</span>
              </p>
              {button}
            </div>

          </div>
        ))}
      </Slider>
    </div>

  );
};

export default SliderComponent;
