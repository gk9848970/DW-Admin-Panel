import React from 'react'
import CarouselBlockInput from './CarouselBlockInput'
import CarouselBlockButton from './CarouselBlockButton'

export default function CarouselTypeFourBlock(props) {
  const {
    id,
    heading,
    subHeading,
    description,
    button,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <CarouselBlockInput 
            labelName={"Heading"} 
            inputName={"heading"}
            value={heading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <CarouselBlockInput 
            labelName={"Image Url"} 
            inputName={"subHeading"}
            value={subHeading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <CarouselBlockInput 
            labelName={"Description"} 
            inputName={"description"}
            value={description}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <CarouselBlockButton
            blockID={id} 
            button={button || {text: "", btnURL: "" }} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
