import React, { useState, useContext } from 'react'
import { NavbarContext } from '../Navbar';
import NavbarLinksList from '../NavbarLinksList'
import NavbarLogo from '../NavbarLogo'

export default function NavbarOne({ navbarLinks, navbarLogo }) {
    const { handlePostNavbarData } = useContext(NavbarContext);
    const [links, setLinks] = useState(navbarLinks);
    const [logoImgURL, setLogoImgURL] = useState(navbarLogo);
    
    return (
        <>
            <NavbarLinksList 
                links={links} 
                setLinks={setLinks}
            />
            <br />
            <NavbarLogo logoImgURL={logoImgURL} setLogoImgURL={setLogoImgURL} />
            <button 
                onClick={() => {
                    const dataTobeSent = {links, logoImgURL};
                    console.log(dataTobeSent);
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
}
*/
