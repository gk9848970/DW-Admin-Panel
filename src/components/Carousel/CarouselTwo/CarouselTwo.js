import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeTwoList from './CarouselBlocksTypeTwoList'
import CarouselInput from '../CarouselInput'
import { v4 as uuidv4 } from 'uuid';

export default function CarouselTwo(props) {
  const { 
    carouselTitle,
    carouselDescription,
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || 
    [
        {
            id: uuidv4(),
            mainHeading: "",
            heading: "",
            subHeading: "",
            description: "Description",
            button: {text: "", btnURL: "" },
        },
    ]
  );
  const [title, setTitle] = useState(carouselTitle || "");
  const [description, setDescription] = useState(carouselDescription || "");

  return (
    <>
      <CarouselBlocksTypeTwoList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__two-block-layout mb-1o5x-input-gap'>
        <CarouselInput state={title} setState={setTitle} label={"Title"}/>
        <CarouselInput state={description} setState={setDescription} label={"Description"}/>
      </div>
      
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = { blocks, title, description };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}