import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeThreeList from '../CarouselBlocksTypeThreeList'

export default function CarouselOne(props) {
  const { 
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || []);

  return (
    <>
      <CarouselBlocksTypeThreeList 
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