import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeThreeList from './TestimonialBlocksTypeThreeList'

export default function TestimonialThree(props) {
  const { 
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || []);

  return (
    <>
      <TestimonialBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks };
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimonial Data
      </button>
    </>
  )
}