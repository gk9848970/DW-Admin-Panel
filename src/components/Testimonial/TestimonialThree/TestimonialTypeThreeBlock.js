import React from 'react'
import TestimonialBlockInput from '../TestimonialBlockInput'

export default function TestimonialTypeThreeBlock(props) {
  const {
    id,
    description,
    imgURL,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <TestimonialBlockInput 
            labelName={"Image Url"} 
            inputName={"imgURL"}
            value={imgURL}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <TestimonialBlockInput 
            labelName={"Description"} 
            inputName={"description"}
            value={description}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
