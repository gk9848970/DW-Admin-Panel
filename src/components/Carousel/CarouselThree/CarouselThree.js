import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeThreeList from './CarouselBlocksTypeThreeList'
import CarouselInput from '../CarouselInput'

export default function CarouselOne(props) {
  const {
    carouselTitle, 
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || []);
  const [title, setTitle] = useState(carouselTitle || "");

  return (
    <>
      <CarouselBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <CarouselInput state={title} setState={setTitle} label={"Title"}/>
      <br />
      <button 
          onClick={() => {
            const newBlocks = [...blocks];

            newBlocks.forEach((block, index) => {
              if(index%2 === 0) {
                block.reverse = true;
              }
            })

            const dataTobeSent = { blocks: newBlocks, title };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}