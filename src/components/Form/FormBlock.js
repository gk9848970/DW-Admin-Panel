import React from 'react'
import FormBlockInput from './FormBlockInput'
import svgAdd from '../../assets/add.svg'
import svgDelete from '../../assets/delete.svg'

export default function FormBlock(props) {
  const {
    id,
    labelText,
    placeholderText,
    handleChangePropertyBlock,
    handleAddBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
      <div className="input__two-block-layout mb-1x-input-gap">
      <FormBlockInput 
            labelName={"Form Label"} 
            inputName={"labelText"}
            value={labelText}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
      />
      <FormBlockInput 
          labelName={"Placeholder Form Label"} 
          inputName={"placeholderText"}
          value={placeholderText}
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
    </div>
  )
}
