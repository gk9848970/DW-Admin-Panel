import React from 'react'
import FeatureBlockInput from './FeatureBlockInput'

export default function FeatureTypeFourBlock(props) {
  const {
    id,
    heading,
    description,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <FeatureBlockInput 
            labelName={"Heading"} 
            inputName={"heading"}
            value={heading}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <FeatureBlockInput 
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
