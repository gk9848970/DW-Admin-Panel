import React, { useState, useContext } from 'react'
import { TestimonialContext } from '../Testimonial';
import TestimonialBlocksTypeTwoList from './TestimonialBlocksTypeTwoList'
import TestimonialInput from '../TestimonialInput'
import { v4 as uuidv4 } from 'uuid';

export default function TestimonialTwo(props) {
  const {
    testimonialTitle,
    testimonialDescription,
    testimonialBlocks
  } = props;
  
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  const [blocks, setBlocks] = useState(testimonialBlocks || 
    [
      {
        id: uuidv4(),
        heading: "Heading",
        subHeading: "",
        description: "Description",
      },
    ]
  );
  const [title, setTitle] = useState(testimonialTitle || "");
  const [description, setDescription] = useState(testimonialDescription || "");

  return (
    <>
      <TestimonialBlocksTypeTwoList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1x-input-gap'>
        <TestimonialInput state={title} setState={setTitle} label={"Title"}/>
      </div>
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <TestimonialInput state={description} setState={setDescription} label={"Description"}/>
      </div>
      
      <button
          className='btn btn--purple' 
          onClick={() => {
            const dataTobeSent = { blocks, title, description };
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimonial Data
      </button>
    </>
  )
}