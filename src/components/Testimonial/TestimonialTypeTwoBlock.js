import React from 'react'
import TestimonialBlockInput from './TestimonialBlockInput'

export default function TestimonialTypeTwoBlock(props) {
  const {
    id,
    heading,
    description,
    subHeading,
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
            labelName={"Sub Heading"} 
            inputName={"subHeading"}
            value={subHeading}
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
