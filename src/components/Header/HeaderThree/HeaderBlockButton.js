import React from 'react'

export default function HeaderBlockButton(props) {
    const {
        blockID,
        button,
        handleChangePropertyBlock,
    } = props;
    
    return (
        <>
            <label>Button URL</label>
            <input
                type="text" 
                name="btnURL" 
                defaultValue={button.btnURL}
                onChange={e => 
                    handleChangePropertyBlock(blockID, "button", {...button, btnURL: e.target.value})
                }
            />

            <label>Button Text</label>
            <input
                type="text" 
                name="btnText" 
                defaultValue={button.text}
                onChange={e => 
                    handleChangePropertyBlock(blockID, "button", {...button, text: e.target.value})
                }
            />
        </>
    )
}
