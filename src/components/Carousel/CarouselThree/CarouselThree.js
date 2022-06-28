import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeThreeList from './CarouselBlocksTypeThreeList'

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
            const newBlocks = [...blocks];

            newBlocks.forEach((block, index) => {
              if(index%2 === 0) {
                block.reverse = true;
              }
            })

            const dataTobeSent = { blocks: newBlocks };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}