import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeOneList from '../TestimonialBlocksTypeOneList'

export default function TestimonialOne(props) {
  const { 
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || []);

  return (
    <>
      <TestimonialBlocksTypeOneList 
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