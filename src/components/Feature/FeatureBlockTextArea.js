import React from 'react'

export default function FeatureBlockTextArea(props) {
    const {
        labelName,
        inputName,
        value,
        blockID,
        handleChangePropertyBlock,
    } = props;

    return (
        <div className="input__container">
            <textarea
                className='input__container-input h-150'
                type="text" 
                name="heading" 
                defaultValue={value}
                onChange={e => handleChangePropertyBlock(blockID, inputName, e.target.value)}
            />
            {   
                value === "" ? 
                <label className='input__container-label'>{labelName}</label> : 
                <label className='input__container-label input__container-label--up'>{labelName}</label>
            }
        </div>
    )
}
