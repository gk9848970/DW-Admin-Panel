import React from 'react'

export default function CarouselBlockButton(props) {
    const {
        blockID,
        button,
        handleChangePropertyBlock,
    } = props;
    
    return (
        <div className='input__two-block-layout'>
            <div className="input__container">
                <input
                    className='input__container-input'
                    type="text" 
                    name="btnText" 
                    defaultValue={button.text}
                    onChange={e => 
                        handleChangePropertyBlock(blockID, "button", {...button, text: e.target.value})
                    }
                />
                {   
                    button.text === "" ? 
                    <label className='input__container-label'>Button Text</label> : 
                    <label className='input__container-label input__container-label--up'>Button Text</label>
                }
            </div>

            <div className="input__container">
                <input
                    className='input__container-input'
                    type="text" 
                    name="btnURL" 
                    defaultValue={button.btnURL}
                    onChange={e => 
                        handleChangePropertyBlock(blockID, "button", {...button, btnURL: e.target.value})
                    }
                />
                {   
                    button.btnURL === "" ? 
                    <label className='input__container-label'>Button URL</label> : 
                    <label className='input__container-label input__container-label--up'>Button URL</label>
                }
            </div>
        </div>
    )
}
