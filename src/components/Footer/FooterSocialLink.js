import React from 'react'

export default function FooterSocialLink(props) {
    const {
        labelText,
        name,
        value,
        socialSiteName,
        handleSocialLinkInput,
    } = props;

    return (
        <div>
            <div className="input__container input__one-block-layout mb-1x-input-gap">
                <input
                    className='input__container-input'
                    type="text"
                    name={name} 
                    defaultValue={value}
                    onChange={e => handleSocialLinkInput(socialSiteName, e.target.value)}
                />
                {   
                    value === "" ? 
                    <label className='input__container-label'>{labelText}</label> : 
                    <label className='input__container-label input__container-label--up'>{labelText}</label>
                }
            </div>
        </div>
    )
}
