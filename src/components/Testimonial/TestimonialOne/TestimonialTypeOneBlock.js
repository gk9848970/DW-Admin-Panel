import React from 'react'
import TestimonialBlockInput from '../TestimonialBlockInput'

export default function TestimonialTypeOneBlock(props) {
  const {
    id,
    heading,
    description,
    imgURL,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <TestimonialBlockInput 
            labelName={"Heading"} 
            inputName={"heading"}
            value={heading}
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
        <TestimonialBlockInput 
            labelName={"Image Url"} 
            inputName={"imgURL"}
            value={imgURL}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
