import React from 'react'
import CarouselBlockInput from '../CarouselBlockInput'
import CarouselBlockButton from '../CarouselBlockButton'

export default function CarouselTypeTwoBlock(props) {
  const {
    id,
    mainHeading,
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
            labelName={"Main Heading"} 
            inputName={"mainHeading"}
            value={mainHeading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <CarouselBlockInput 
            labelName={"Heading"} 
            inputName={"heading"}
            value={heading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <CarouselBlockInput 
            labelName={"Sub Heading"} 
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
