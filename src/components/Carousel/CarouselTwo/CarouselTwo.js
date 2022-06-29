import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeTwoList from './CarouselBlocksTypeTwoList'
import CarouselInput from '../CarouselInput'

export default function CarouselTwo(props) {
  const { 
    carouselTitle,
    carouselDescription,
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || []);
  const [title, setTitle] = useState(carouselTitle || "");
  const [description, setDescription] = useState(carouselDescription || "");

  return (
    <>
      <CarouselBlocksTypeTwoList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <CarouselInput state={title} setState={setTitle} label={"Title"}/>
      <CarouselInput state={description} setState={setDescription} label={"Description"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks, title, description };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}