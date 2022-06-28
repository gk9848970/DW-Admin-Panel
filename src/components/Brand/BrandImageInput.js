import React from 'react'

export default function BrandImageInput(props) {
  const {
    label,
    value,
    imageRowNumber,
    imageColumnNumber,
    handleImageInputChange,
  } = props;
  
  return (
    <div>
        <label>{label}</label>
        <input 
            type="text"
            name="imageInput"
            defaultValue={value}
            onChange={e => handleImageInputChange(imageRowNumber, imageColumnNumber, e.target.value)}
        />
    </div>
  )
}
