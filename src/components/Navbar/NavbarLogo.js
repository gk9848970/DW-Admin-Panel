import React from 'react'

export default function NavbarLogo(props) {
    const { 
        logoImgURL,
        setLogoImgURL,
    } = props;

    return (
        <div>
            <label>Logo Url</label>
            <input 
                type="text"
                name="logoURL" 
                defaultValue={logoImgURL}
                onChange={e => setLogoImgURL(e.target.value)}
            />
        </div>
    )
}
