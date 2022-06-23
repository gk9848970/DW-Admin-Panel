import React from 'react'
import FeatureBlockInput from './FeatureBlockInput'

export default function FeatureTypeOneBlock(props) {
  const {
    id,
    title,
    imgURL,
    handleChangePropertyBlock,
    handleDeleteBlock,
  } = props;

  return (
    <div>
        <FeatureBlockInput 
            labelName={"Title"} 
            inputName={"title"}
            value={title}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <FeatureBlockInput 
            labelName={"Image Url"} 
            inputName={"imgURL"}
            value={imgURL}
            blockID={id} 
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
    </div>
  )
}
