import React, { useContext } from 'react'
import { TestimonialContext } from '../Testimonial';

export default function TestimonialHide() {
  const { handlePostTestimonialData } = useContext(TestimonialContext);
  return (
    <>
      <div className='settings__hidden-text'>Testimonial is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostTestimonialData(dataTobeSent);
      }}>
        Post Testimoinal Data
      </button>
    </>
  )
}