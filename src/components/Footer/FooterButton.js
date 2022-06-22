import React from 'react'

export default function FooterButton(props) {
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
        <div>
            <label>Button Text</label>
            <input 
                type="text"
                name="buttonText" 
                defaultValue={button.text}
                onChange={e => handleButtonChange("text", e.target.value)}
            />

            <label>Button URL</label>
            <input 
                type="text" 
                name="buttonURL" 
                defaultValue={button.btnURL}
                onChange={e => handleButtonChange("btnURL", e.target.value)}
            />
        </div>
    )
}
