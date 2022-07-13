import React from 'react'
import HeaderBlockInput from './HeaderBlockInput'
import HeaderBlockTextArea from './HeaderBlockTextArea'
import HeaderBlockButton from './HeaderBlockButton'
import svgAdd from '../../../assets/add.svg'
import svgDelete from '../../../assets/delete.svg'

export default function HeaderBlock(props) {
  const {
    id,
    heading,
    description,
    imgURL,
    button,
    handleAddBlock,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div className="header__block">
        <div className="input__two-block-layout mb-1x-input-gap"> 
          <HeaderBlockInput 
              labelName={"Heading"}
              inputName={"heading"}
              value={heading}
              blockID={id} 
              handleChangePropertyBlock={handleChangePropertyBlock} />

          <HeaderBlockInput 
            labelName={"Image Url"}
            inputName={"imgURL"}
            value={imgURL}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock} />

          <div className='input__add-delete-button-container'>
              <button className='input__add-button' onClick={() => handleAddBlock(id)}>
                  <img src={svgAdd} alt="Add Block" />
              </button>
              <button className='input__delete-button' onClick={() => handleDeleteBlock(id)}>
                  <img src={svgDelete} alt="Delete Block" />    
              </button>
          </div>
          
        </div>

        <div className="input__one-long-block-layout mb-1x-input-gap">
          <HeaderBlockTextArea 
                labelName={"Description"}
                inputName={"description"} 
                value={description}
                blockID={id} 
                handleChangePropertyBlock={handleChangePropertyBlock} />
        </div>

        <HeaderBlockButton 
            blockID={id} 
            button={button} 
            handleChangePropertyBlock={handleChangePropertyBlock} />
    </div>
  )
}
