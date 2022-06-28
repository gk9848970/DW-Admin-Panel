import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeTwoList from './TestimonialBlocksTypeTwoList'

export default function TestimonialTwo(props) {
  const { 
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || []);

  return (
    <>
      <TestimonialBlocksTypeTwoList 
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