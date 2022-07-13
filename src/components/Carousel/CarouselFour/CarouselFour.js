import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeFourList from './CarouselBlocksTypeFourList'
import CarouselInput from '../CarouselInput'
import { v4 as uuidv4 } from 'uuid';

export default function CarouselFour(props) {
  const {
    carouselTitle, 
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || 
    [
      {
        id: uuidv4(),
        heading: "",
        subHeading: "",
        imgURL: "",
        description: "Description",
        button: {text: "", btnURL: "" },
      },
    ]
  );
  const [title, setTitle] = useState(carouselTitle || "");


  return (
    <>
      <CarouselBlocksTypeFourList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <CarouselInput state={title} setState={setTitle} label={"Title"}/>
      </div>
      
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostCarouselData(dataTobeSent);
      }}>
        Post Carousel Data
      </button>
    </>
  )
}