import React from 'react'
import CarouselBlockInput from '../CarouselBlockInput'

export default function CarouselTypeThreeBlock(props) {
  const {
    id,
    topline,
    heading,
    description,
    imgURL,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <CarouselBlockInput 
            labelName={"Topline"} 
            inputName={"topline"}
            value={topline}
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
            labelName={"Image Url"} 
            inputName={"imgURL"}
            value={imgURL}
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
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
