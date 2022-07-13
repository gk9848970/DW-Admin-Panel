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
    <div className="input__container input__one-block-layout mb-1x-input-gap">
        <input
            className='input__container-input'
            type="text"
            name="imageInput"
            defaultValue={value}
            onChange={e => handleImageInputChange(imageRowNumber, imageColumnNumber, e.target.value)}
        />
        {   
            value === "" ? 
            <label className='input__container-label'>{label}</label> : 
            <label className='input__container-label input__container-label--up'>{label}</label>
        }
    </div>
  )
}
