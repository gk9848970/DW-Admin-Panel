import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeOneList from './TestimonialBlocksTypeOneList'
import TestimonialInput from '../TestimonialInput'
import { v4 as uuidv4 } from 'uuid';

export default function TestimonialOne(props) {
  const {
    testimonialTitle, 
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || 
    [
      {
        id: uuidv4(),
        heading: "Heading",
        description: "Description",
        imgURL: "",
      },
    ]
  );
  const [title, setTitle] = useState(testimonialTitle || "");

  return (
    <>
      <TestimonialBlocksTypeOneList 
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