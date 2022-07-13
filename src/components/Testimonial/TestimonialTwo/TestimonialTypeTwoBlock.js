import React from 'react'
import TestimonialBlockInput from '../TestimonialBlockInput'
import TestimonialBlockTextArea from '../TestimonialBlockTextArea'
import svgAdd from '../../../assets/add.svg'
import svgDelete from '../../../assets/delete.svg'

export default function TestimonialTypeTwoBlock(props) {
  const {
    id,
    heading,
    description,
    subHeading,
    handleChangePropertyBlock,
    handleAddBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <div className="input__two-block-layout mb-1x-input-gap">
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

          <div className='input__add-delete-button-container'>
            <button className='input__add-button' onClick={() => handleAddBlock(id)}>
                <img src={svgAdd} alt="Add Link" />
            </button>
            <button className='input__delete-button' onClick={() => handleDeleteBlock(id)}>
                <img src={svgDelete} alt="Delete Link" />    
            </button>
          </div>

        </div>

        <div className="input__one-long-block-layout mb-2o5x-input-gap">
          <TestimonialBlockTextArea 
              labelName={"Description"} 
              inputName={"description"}
              value={description}
              blockID={id} 
              handleChangePropertyBlock={handleChangePropertyBlock}
          />
        </div>
    </div>
  )
}
