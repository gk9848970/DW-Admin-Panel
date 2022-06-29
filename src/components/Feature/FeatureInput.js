import React from 'react'

export default function FeatureInput(props) {
    const { 
        state, 
        setState, 
        label
    } = props;

    return (
        <div>
            <label>{label}</label>
            <input 
                type="text"
                name={label} 
                defaultValue={state}
                onChange={e => setState(e.target.value)}
            />
        </div>
    )
}
