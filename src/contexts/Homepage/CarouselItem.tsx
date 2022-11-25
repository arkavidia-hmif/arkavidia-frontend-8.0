/* eslint-disable react/prop-types */
import Image from 'next/image'

function CarouselItem({prop, type}) {
  if (type === 2) {
    return (
      <div className="
      left-[50%]
      absolute
      flex
      justify-center
      p-6 bg-black md:p-10 md:w-40 md:h-40
      items-center
      drop-shadow-md
      rounded-md
      border-black
      border-2
      z-[-10]">
        <div className="w-40 h-40">
          <Image src={prop} layout="fill" alt="Carousel Image 2"/>
        </div>

      </div>
    );
  }
  if (type === 0) {
    return (
      <div className="
      right-[50%]
      absolute
      flex
      justify-center
      p-6  bg-black md:p-10 md:w-40 md:h-40
      items-center
      drop-shadow-md
      rounded-md
      border-black
      border-2">
        <div className="w-40 h-40">
          <Image src={prop} layout="fill" alt="Carousel Image 3"/>
        </div>
        
      </div>
    );
  }
  else {
    return (
      <div
        className="
          bg-black md:w-60 md:h-60
          drop-shadow-md
          rounded-md
          border-black
          border-2
          relative"
      >
          <Image src={prop} layout="fill" alt="Carousel Image 1"/>
      </div>
    );
  }
}

export default CarouselItem;