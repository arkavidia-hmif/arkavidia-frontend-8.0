import React, { useState } from 'react'
import Image from 'next/image'
import Carousel1 from '../../assets/images/carousel1.png'
import Carousel2 from '../../assets/images/carousel2.png'
import Carousel3 from '../../assets/images/carousel3.png'

const classNames = [
  "left-[50%] absolute flex justify-center p-6 bg-black md:p-10 md:w-40 md:h-40 items-center drop-shadow-md rounded-md border-black border-2",
  "right-[50%] absolute flex justify-center p-6 bg-black md:p-10 md:w-40 md:h-40 items-center drop-shadow-md rounded-md border-black border-2",
  "bg-black md:w-60 md:h-60 drop-shadow-md rounded-md border-black border-2 relative z-10"
]

const Carousel = () => {
  const [carouselItems, setCarouselItems] = useState(classNames)
  const handleLeftClick = () => {
    const tempClassOne = carouselItems[0];
    const tempClassTwo = carouselItems[1];
    const tempClassThree = carouselItems[2];

    const newClassNames = [tempClassTwo, tempClassThree, tempClassOne]
    setCarouselItems(newClassNames);
  };

  const handleRightClick = () => {
    const tempClassOne = carouselItems[0];
    const tempClassTwo = carouselItems[1];
    const tempClassThree = carouselItems[2];

    const newClassNames = [tempClassThree, tempClassOne, tempClassTwo]
    setCarouselItems(newClassNames);
  };
  return (
    <div className="flex justify-center gap-[60px] items-center relative">
      <div
        className="w-[48px] h-[48px] p-[5px] text-xl flex justify-center items-center cursor-pointer text-white bg-red300 rounded-full font-varela cursor-pointer"
        onClick={() => handleLeftClick()}>
        {'<'}
      </div>
      <div className={carouselItems[0]}>
      <div className="w-40 h-40">
          <Image src={Carousel1} layout="fill" objectFit="cover" alt="Carousel Image 3"/>
        </div>
      </div>
      <div className={carouselItems[1]}> <Image src={Carousel2} layout="fill" objectFit="cover" alt="Carousel Image 1"/></div>
      <div className={carouselItems[2]}>
      <div className="w-40 h-40">
          <Image src={Carousel3} layout="fill" objectFit="cover" alt="Carousel Image 3"/>
        </div>
      </div>
      <div
        className="w-[48px] h-[48px] p-[5px] text-xl flex justify-center items-center cursor-pointer text-white bg-red300 rounded-full font-varela cursor-pointer"
        onClick={() => handleRightClick()}>
        {'>'}
      </div>
    </div>
  )
}

export default Carousel
