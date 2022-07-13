import React from 'react'

export default function HeaderTextArea(props) {
    const { 
        state, 
        setState, 
        label
    } = props;

    return (
        <div className="input__container">
                <textarea 
                    type="text"
                    className='input__container-input h-150'
                    name={label} 
                    defaultValue={state}
                    onChange={e => setState(e.target.value)}
                />
                {   
                    state === "" ? 
                    <label className='input__container-label'>{label}</label> : 
                    <label className='input__container-label input__container-label--up'>{label}</label>
                }
        </div>
    )
}
