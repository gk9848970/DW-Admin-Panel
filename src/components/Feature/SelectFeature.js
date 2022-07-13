import React, { useContext } from 'react';
import Select from 'react-select';
import { FeatureContext } from './Feature';

const options = [
  { value: '0', label: 'Hide Feature' },
  { value: '1', label: 'Feature 1' },
  { value: '2', label: 'Feature 2' },
  { value: '3', label: 'Feature 3' },
  { value: '4', label: 'Feature 4' },
];

export default function SelectFeature() {
  const {
    featureInfo,
    setSelectedOption,
  } = useContext(FeatureContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === featureInfo.featureType
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