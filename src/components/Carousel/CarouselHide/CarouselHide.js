import React, { useContext } from 'react'
import { CarouselContext } from '../Carousel';

export default function CarouselHide() {
  const { handlePostCarouselData } = useContext(CarouselContext);
  return (
    <>
      <div className='settings__hidden-text'>Carousel is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}