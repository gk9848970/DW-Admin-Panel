import React, { useContext } from 'react';
import Select from 'react-select';
import { BrandContext } from './Brand';

const options = [
    { value: '0', label: 'Hide Brand' },
    { value: '1', label: 'Brand With 4 Images' },
    { value: '2', label: 'Brand With 6 Images' },
    { value: '3', label: 'Brand With 7 Images' },
    { value: '4', label: 'Brand With 9 Images' },
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