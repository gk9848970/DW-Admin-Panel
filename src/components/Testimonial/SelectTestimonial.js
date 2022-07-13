import React, { useContext } from 'react';
import Select from 'react-select';
import { TestimonialContext } from './Testimonial';

const options = [
  { value: '0', label: 'Hide Testimonial' },
  { value: '1', label: 'Testimonial 1' },
  { value: '2', label: 'Testimonial 2' },
  { value: '3', label: 'Testimonial 3' },
];

export default function SelectTestimonial() {
  const {
    testimonialInfo,
    setSelectedOption,
  } = useContext(TestimonialContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === testimonialInfo.testimonialType
  );

  return (
    <div>
      <Select
        defaultValue={initiallySelected}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}