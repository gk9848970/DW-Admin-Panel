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
        <>
            <label>{labelText}</label>
            <input 
                type="text"
                name={name} 
                defaultValue={value}
                onChange={e => handleSocialLinkInput(socialSiteName, e.target.value)}
            />
        </>
    )
}
