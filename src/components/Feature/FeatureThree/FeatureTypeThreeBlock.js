import React from 'react'
import FeatureBlockInput from '../FeatureBlockInput'
import FeatureBlockTextArea from '../FeatureBlockTextArea'
import svgAdd from '../../../assets/add.svg'
import svgDelete from '../../../assets/delete.svg'

export default function FeatureTypeThreeBlock(props) {
  const {
    id,
    name,
    description,
    icon,
    handleChangePropertyBlock,
    handleAddBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
      <div className="input__two-block-layout mb-1x-input-gap">
        <FeatureBlockInput 
              labelName={"Name"} 
              inputName={"name"}
              value={name}
              blockID={id} 
              handleChangePropertyBlock={handleChangePropertyBlock}
        />

        <FeatureBlockInput 
              labelName={"Icon Url"} 
              inputName={"icon"}
              value={icon}
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
          <FeatureBlockTextArea 
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

