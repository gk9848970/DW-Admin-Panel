import React from 'react'
import CarouselBlockInput from '../CarouselBlockInput'
import CarouselBlockTextArea from '../CarouselBlockTextArea'
import CarouselBlockButton from '../CarouselBlockButton'
import svgAdd from '../../../assets/add.svg'
import svgDelete from '../../../assets/delete.svg'

export default function CarouselTypeFourBlock(props) {
  const {
    id,
    heading,
    subHeading,
    imgURL,
    description,
    button,
    handleChangePropertyBlock,
    handleAddBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <div className="input__two-block-layout mb-1x-input-gap">
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

            <div className='input__add-delete-button-container'>
              <button className='input__add-button' onClick={() => handleAddBlock(id)}>
                  <img src={svgAdd} alt="Add Link" />
              </button>
              <button className='input__delete-button' onClick={() => handleDeleteBlock(id)}>
                  <img src={svgDelete} alt="Delete Link" />    
              </button>
            </div>
        </div>

        <div className="input__one-block-layout mb-1x-input-gap">
          <CarouselBlockInput 
              labelName={"Image URL"} 
              inputName={"imgURL"}
              value={imgURL}
              blockID={id} 
              handleChangePropertyBlock={handleChangePropertyBlock}
          />
        </div>

        <div className="input__one-long-block-layout mb-1x-input-gap">
            <CarouselBlockTextArea 
              labelName={"Description"} 
              inputName={"description"}
              value={description}
              blockID={id} 
              handleChangePropertyBlock={handleChangePropertyBlock}
          />
        </div>

        <div className="input__two-block-layout mb-2o5x-input-gap">
          <CarouselBlockButton
              blockID={id} 
              button={button || {text: "", btnURL: "" }} 
              handleChangePropertyBlock={handleChangePropertyBlock}
          />
        </div>
    </div>
  )
}
