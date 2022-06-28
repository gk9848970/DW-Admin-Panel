import React, { useState, useContext } from 'react'
import { NavbarContext } from '../Navbar';
import NavbarLinksList from '../NavbarLinksList'
import NavbarInput from '../NavbarInput'
import NavbarButton from '../NavbarButton'

export default function NavbarThree(props) {
    const { 
        navbarLinks, 
        navbarLogo, 
        navbarSearchText, 
        navbarButton 
    } = props;

    const { handlePostNavbarData } = useContext(NavbarContext);
    const [links, setLinks] = useState(navbarLinks);
    const [logoImgURL, setLogoImgURL] = useState(navbarLogo);
    const [searchText, setSearchText] = useState(navbarSearchText || "");
    const [button, setButton] = useState(navbarButton || {text: "", btnURL: "" });
    
    return (
        <>
            <NavbarLinksList 
                links={links} 
                setLinks={setLinks}
            />
            <br />
            <NavbarInput state={logoImgURL} setState={setLogoImgURL} label={"Logo URL"}/>
            <NavbarInput state={searchText} setState={setSearchText} label={"Search Bar Placeholder"}/>
            <NavbarButton button={button} setButton={setButton} />
            <button 
                onClick={() => {
                    const dataTobeSent = {links, logoImgURL, searchText, button};
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
    button: {
        text: "",
        btnURL: "",
    }
}
*/
