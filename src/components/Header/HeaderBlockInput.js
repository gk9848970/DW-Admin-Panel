import React from 'react'

export default function HeaderBlockInput(props) {
    const {
        labelName,
        inputName,
        blockID,
        handleChangePropertyBlock,
    } = props;
    return (
        <>
            <label>{labelName}</label>
            <input
                type="text" 
                name="heading" 
                defaultValue={inputName}
                onChange={e => handleChangePropertyBlock(blockID, inputName, e.target.value)}
            />
        </>
    )
}
