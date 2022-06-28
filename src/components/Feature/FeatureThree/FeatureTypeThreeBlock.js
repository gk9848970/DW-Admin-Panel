import React from 'react'
import FeatureBlockInput from '../FeatureBlockInput'

export default function FeatureTypeThreeBlock(props) {
  const {
    id,
    name,
    description,
    icon,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <FeatureBlockInput 
            labelName={"Name"} 
            inputName={"name"}
            value={name}
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
        <FeatureBlockInput 
            labelName={"Icon Url"} 
            inputName={"icon"}
            value={icon}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}

