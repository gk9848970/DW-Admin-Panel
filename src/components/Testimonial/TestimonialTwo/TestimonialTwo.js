import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeTwoList from './TestimonialBlocksTypeTwoList'
import TestimonialInput from '../TestimonialInput'

export default function TestimonialTwo(props) {
  const {
    testimonialTitle,
    testimonialDescription,
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || []);
  const [title, setTitle] = useState(testimonialTitle || "");
  const [description, setDescription] = useState(testimonialDescription || "");

  return (
    <>
      <TestimonialBlocksTypeTwoList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <TestimonialInput state={title} setState={setTitle} label={"Title"}/>
      <TestimonialInput state={description} setState={setDescription} label={"Description"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks, title, description };
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimonial Data
      </button>
    </>
  )
}