import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeThreeList from './TestimonialBlocksTypeThreeList'
import TestimonialInput from '../TestimonialInput'

export default function TestimonialThree(props) {
  const { 
    testimonialTitle,
    testimonialBlocks,
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || []);
  const [title, setTitle] = useState(testimonialTitle || "");

  return (
    <>
      <TestimonialBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <TestimonialInput state={title} setState={setTitle} label={"Title"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimonial Data
      </button>
    </>
  )
}