import React from 'react'

export default function FeatureBlockInput(props) {
    const {
        labelName,
        inputName,
        value,
        blockID,
        handleChangePropertyBlock,
    } = props;

    return (
        <>
            <label>{labelName}</label>
            <input
                type="text" 
                name="heading" 
                defaultValue={value}
                onChange={e => handleChangePropertyBlock(blockID, inputName, e.target.value)}
            />
        </>
    )
}
