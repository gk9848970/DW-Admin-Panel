import React from 'react'

export default function CarouselBlockInput(props) {
    const {
        labelName,
        inputName,
        value,
        blockID,
        handleChangePropertyBlock,
    } = props;

    return (
        <div className="input__container">
            <input
                type="text"
                className='input__container-input'
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
