import React, { useContext } from 'react';
import Select from 'react-select';
import { FormContext } from './Form';

const options = [
  { value: '1', label: 'Form 1' },
  { value: '2', label: 'Form 2' },
  { value: '3', label: 'Form 3' },
  { value: '4', label: 'Form 4' },
];

export default function SelectForm() {
  const {
    formInfo,
    setSelectedOption,
  } = useContext(FormContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === formInfo.formType
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