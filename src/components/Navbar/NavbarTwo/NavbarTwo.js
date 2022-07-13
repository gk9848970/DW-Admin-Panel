import React, { useState, useContext } from 'react'
import { NavbarContext } from '../Navbar';
import NavbarLinksList from '../NavbarLinksList'
import NavbarInput from '../NavbarInput'
import NavbarButton from '../NavbarButton'
import { v4 as uuidv4 } from 'uuid';

export default function NavbarTwo({ navbarLinks, navbarLogo, navbarButton }) {
    const { handlePostNavbarData } = useContext(NavbarContext);

    const [links, setLinks] = useState(navbarLinks || 
        [
            {
                id: uuidv4(),
                linkURL: "",
                text: "",
            },
        ]
    );

    const [logoImgURL, setLogoImgURL] = useState(navbarLogo || "");
    const [button, setButton] = useState(navbarButton || {text: "", btnURL: "" });
    
    return (
        <>
            <NavbarLinksList 
                links={links} 
                setLinks={setLinks}
            />
            
            <div className='input__one-block-layout mb-1x-input-gap'>
                <NavbarInput state={logoImgURL} setState={setLogoImgURL} label={"Navbar Logo"} />
            </div>

            <div className='mb-1o5x-input-gap'>
                <NavbarButton button={button} setButton={setButton} />
            </div>
            
            <div>
                <button
                    className='btn btn--purple'
                    onClick={() => {
                        const dataTobeSent = {links, logoImgURL, button};
                        handlePostNavbarData(dataTobeSent);
                    }}
                >Post Navbar Data</button>
            </div>
        </>
    )
}

/*
const sampleData = {
    links: [
        {
            id: uuidv4(),
            text: "I am link1",
            linkURL: "www.bing.com",
        },
        {
            id: uuidv4(),
            text: "I am link2",
            linkURL: "www.bing.com",
        },
        {
            id: uuidv4(),
            text: "I am link3",
            linkURL: "www.bing.com",
        },
    ],
    logoImgURL: "",
    button: {
        text: "",
        btnURL: "",
    }
}
*/
