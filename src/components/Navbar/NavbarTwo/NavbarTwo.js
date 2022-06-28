import React, { useState, useContext } from 'react'
import { NavbarContext } from '../Navbar';
import NavbarLinksList from '../NavbarLinksList'
import NavbarInput from '../NavbarInput'
import NavbarButton from '../NavbarButton'

export default function NavbarTwo({ navbarLinks, navbarLogo, navbarButton }) {
    const { handlePostNavbarData } = useContext(NavbarContext);
    const [links, setLinks] = useState(navbarLinks);
    const [logoImgURL, setLogoImgURL] = useState(navbarLogo);
    const [button, setButton] = useState(navbarButton || {text: "", btnURL: "" });
    
    return (
        <>
            <NavbarLinksList 
                links={links} 
                setLinks={setLinks}
            />
            <br />
            <NavbarInput state={logoImgURL} setState={setLogoImgURL} label={"Navbar Logo"} />
            <NavbarButton button={button} setButton={setButton} />
            <button 
                onClick={() => {
                    const dataTobeSent = {links, logoImgURL, button};
                    handlePostNavbarData(dataTobeSent);
                }}
            >Post Navbar Data</button>
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
