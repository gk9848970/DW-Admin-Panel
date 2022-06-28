import React from 'react'
import HeaderBlockInput from './HeaderBlockInput'
import HeaderBlockButton from './HeaderBlockButton'

export default function HeaderBlock(props) {
  const {
    id,
    heading,
    description,
    imgURL,
    button,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <>
        <HeaderBlockInput 
            labelName={"Heading"}
            inputName={"heading"}
            value={heading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <HeaderBlockInput 
            labelName={"Description"}
            inputName={"description"} 
            value={description}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <HeaderBlockInput 
            labelName={"Image Url"}
            inputName={"imgURL"}
            value={imgURL}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <HeaderBlockButton 
            blockID={id} 
            button={button} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </>
  )
}