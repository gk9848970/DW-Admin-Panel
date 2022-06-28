import React from 'react'
import FormBlockInput from './FormBlockInput'

export default function FormBlock(props) {
  const {
    id,
    labelText,
    placeholderText,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
      <FormBlockInput 
            labelName={"Form Label"} 
            inputName={"labelText"}
            value={labelText}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
      />
      <FormBlockInput 
          labelName={"Placeholder For Form Label"} 
          inputName={"placeholderText"}
          value={placeholderText}
          blockID={id} 
          handleChangePropertyBlock={handleChangePropertyBlock}
      />
      <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
