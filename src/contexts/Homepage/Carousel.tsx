import React, { useState } from 'react'
import Card from './CarouselItem'
import Image from 'next/image'
import buttonUnfill from '@src/assets/button-radio/radio-unfill.svg'
import Carousel1 from '@src/assets/images/carousel-1.svg'
import Carousel2 from '@src/assets/images/carousel-2.svg'
import Carousel3 from '@src/assets/images/carousel-3.svg'
import Carousel4 from '@src/assets/images/carousel-4.svg'

const initialState = [
  { idx: 1, pos: 1, img: Carousel1, active: true },
  { idx: 2, pos: 2, img: Carousel2, active: true },
  { idx: 3, pos: 3, img: Carousel3, active: true },
  { idx: 4, pos: 4, img: Carousel4, active: false },
]

const Carousel = () => {
  const [cards, setCards] = useState(initialState);
  const handleLeftClick = () => {
    const prevState = [...cards];
    // find next inactive card index - top
    const nextCardIdx = prevState
      .filter((ft) => ft.active)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;
    // maximize pos
    prevState.find((f) => f.idx === nextCardIdx).pos =
      Math.max.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) + 1;

    // update state
    setCards(prevState);
  };

  const handleRightClick = () => {
    const prevState = [...cards];
    // find next inactive card index - bottom
    const nextCardIdx = prevState
      .filter((ft) => ft.active)
      .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
      .pop(1).idx;
    // minimize pos
    prevState.find((f) => f.active === false).pos =
      Math.min.apply(
        null,
        prevState.map(function (o) {
          return o.pos;
        })
      ) - 1;
    // reset
    prevState.find((f) => f.active === false).active = true;
    // update
    prevState.find((f) => f.idx === nextCardIdx).active = false;

    // update state
    setCards(prevState);
  };
  return (
    <div className="flex justify-center gap-[60px] items-center relative">
      <div
        className="w-[48px] h-[48px] p-[5px] text-xl flex justify-center items-center cursor-pointer text-white bg-red300 rounded-full font-varela"
        onClick={() => handleLeftClick()}>
        {'<'}
      </div>
      {cards
          .filter((f) => f.active)
          .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
          .map((card, index) => (
            <Card key={index} prop={card.img} type={index} />
          ))}
      <div
        className="w-[48px] h-[48px] p-[5px] text-xl flex justify-center items-center cursor-pointer text-white bg-red300 rounded-full font-varela"
        onClick={() => handleRightClick()}>
        {'>'}
      </div>
    </div>
  )
}

export default Carousel
