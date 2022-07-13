import React, { useState, useContext } from 'react'
import { CarouselContext } from '../Carousel';
import CarouselBlocksTypeThreeList from './CarouselBlocksTypeThreeList'
import CarouselInput from '../CarouselInput'
import { v4 as uuidv4 } from 'uuid';

export default function CarouselOne(props) {
  const {
    carouselTitle, 
    carouselBlocks
  } = props;
  
  const { handlePostCarouselData } = useContext(CarouselContext);
  const [blocks, setBlocks] = useState(carouselBlocks || 
    [
        {
            id: uuidv4(),
            topline: "",
            heading: "",
            description: "Description",
            imgURL: "",
        },
    ]
  );
  const [title, setTitle] = useState(carouselTitle || "");

  return (
    <>
      <CarouselBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <CarouselInput state={title} setState={setTitle} label={"Title"}/>
      </div>
      
      <button
          className='btn btn--purple' 
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