import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeThreeList from './TestimonialBlocksTypeThreeList'
import TestimonialInput from '../TestimonialInput'
import { v4 as uuidv4 } from 'uuid';

export default function TestimonialThree(props) {
  const { 
    testimonialTitle,
    testimonialBlocks,
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || 
    [
      {
        id: uuidv4(),
        description: "Description",
        imgURL: "",
      },
    ]
  );
  const [title, setTitle] = useState(testimonialTitle || "");

  return (
    <>
      <TestimonialBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <TestimonialInput state={title} setState={setTitle} label={"Title"}/>
      </div>
      
      <button
          className='btn btn--purple'  
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimonial Data
      </button>
    </>
  )
}