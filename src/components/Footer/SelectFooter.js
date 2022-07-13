import React, { useContext } from 'react';
import Select from 'react-select';
import { FooterContext } from './Footer';

const options = [
  { value: '0', label: 'Hide Footer' },
  { value: '1', label: 'Footer 1' },
  { value: '2', label: 'Footer 2' },
  { value: '3', label: 'Footer 3' },
  { value: '4', label: 'Footer 4' },
];

export default function SelectFooter() {
    const {
        footerInfo,
        setSelectedOption,
    } = useContext(FooterContext);

    const initiallySelected = options.find(option => 
    parseInt(option.value) === footerInfo.footerType
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