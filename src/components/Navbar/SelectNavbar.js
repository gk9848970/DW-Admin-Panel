import React, { useContext } from 'react';
import Select from 'react-select';
import { NavbarContext } from './Navbar';

const options = [
  { value: '0', label: 'Hide Navbar' },
  { value: '1', label: 'Navbar 1' },
  { value: '2', label: 'Navbar 2' },
  { value: '3', label: 'Navbar 3' },
  { value: '4', label: 'Navbar 4' },
];

export default function SelectNavbar() {
  const {
    navbarInfo,
    setSelectedOption,
  } = useContext(NavbarContext);

  const initiallySelected = options.find(option => 
    parseInt(option.value) === navbarInfo.navbarType
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