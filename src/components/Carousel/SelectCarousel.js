import React, { useContext } from 'react';
import Select from 'react-select';
import { CarouselContext } from './Carousel';

const options = [
  { value: '1', label: 'Carousel 1' },
  { value: '2', label: 'Carousel 2' },
  { value: '3', label: 'Carousel 3' },
  { value: '4', label: 'Carousel 4' },
];

export default function SelectCarousel() {
  const {
    carouselInfo,
    setSelectedOption,
  } = useContext(CarouselContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === carouselInfo.carouselType
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