import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeOneList from './CarouselBlocksTypeOneList'
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
      <CarouselBlocksTypeOneList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <CarouselInput state={title} setState={setTitle} label={"Title"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}