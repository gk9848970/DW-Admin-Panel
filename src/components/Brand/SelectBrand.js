import React, { useContext } from 'react';
import Select from 'react-select';
import { BrandContext } from './Brand';

const options = [
    { value: '0', label: 'Brand Hide' },
    { value: '1', label: 'Brand Show' },
];

export default function SelectBrand() {
  const {
    brandInfo,
    setSelectedOption,
  } = useContext(BrandContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === brandInfo.brandType
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