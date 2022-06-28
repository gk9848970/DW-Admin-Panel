import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeFourList from './CarouselBlocksTypeFourList'

export default function CarouselFour(props) {
  const { 
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || []);

  return (
    <>
      <CarouselBlocksTypeFourList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}