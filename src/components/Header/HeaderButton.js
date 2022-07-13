import React from 'react'

export default function HeaderButton(props) {
    const { 
        button,
        setButton,
    } = props;

    function handleButtonChange(property, newValue) {
        const newButton = {...button};
        newButton[property] = newValue;
        setButton(newButton);
    }

    return (
        <div className='input__two-block-layout'>
            <div className="input__container">
                <input
                    className='input__container-input' 
                    type="text"
                    name="buttonText" 
                    defaultValue={button.text}
                    onChange={e => handleButtonChange("text", e.target.value)}
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
                    name="buttonURL" 
                    defaultValue={button.btnURL}
                    onChange={e => handleButtonChange("btnURL", e.target.value)}
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
