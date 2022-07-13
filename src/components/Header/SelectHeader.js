import React, { useContext } from 'react';
import Select from 'react-select';
import { HeaderContext } from './Header';

const options = [
  { value: '0', label: 'Hide Header' },
  { value: '1', label: 'Header 1' },
  { value: '2', label: 'Header 2' },
  { value: '3', label: 'Header 3' },
  { value: '4', label: 'Header 4' },
];

export default function SelectHeader() {
  const {
    headerInfo,
    setSelectedOption,
  } = useContext(HeaderContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === headerInfo.headerType
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