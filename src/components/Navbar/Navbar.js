import React, { useState } from 'react';
import axios from 'axios';

import SelectNavbar from './SelectNavbar';
import NavbarHide from './NavbarHide/NavbarHide';
import NavbarOne from './NavbarOne/NavbarOne';
import NavbarTwo from './NavbarTwo/NavbarTwo';
import NavbarThree from './NavbarThree/NavbarThree';
import NavbarFour from './NavbarFour/NavbarFour';

import { REST_ENPOINT_POST_EMAIL } from '../../App';
import { REST_ENPOINT_POST_DATA } from '../../App';

export const NavbarContext = React.createContext();

export default function Navbar({ navbar }) {
    const [navbarInfo, setNavbarInfo] = useState(navbar);
    const [selectedOption, setSelectedOption] = useState(null);

    const NavbarContextValue = {
        navbarInfo,
        setSelectedOption,
        handlePostNavbarData,
    }

    if(selectedOption) {
        handleSelectedOptionAndNavbarSync();
    }

    // Post Navbar Data to server
    function handlePostNavbarData(data) {
        const newNavbarInfo = {...navbarInfo, navbarData: data}

        axios.post(REST_ENPOINT_POST_DATA, {
            Email: REST_ENPOINT_POST_EMAIL,
            data: {
                navbar: newNavbarInfo,
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setNavbarInfo(newNavbarInfo);
    }

    // Syncs the selectedOption state and navbar state
    function handleSelectedOptionAndNavbarSync() {
        if(navbarInfo.navbarType !== parseInt(selectedOption.value)) {
            setNavbarInfo({...navbarInfo, navbarType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <NavbarContext.Provider value={NavbarContextValue}>
            <span className='settings__select-span'>Select Navbar type</span>

            <SelectNavbar/>

            {navbarInfo.navbarType === 0 && 
            <NavbarHide/>}

            {navbarInfo.navbarType === 1 && 
            <NavbarOne 
                navbarLinks={navbar.navbarData.links}
                navbarLogo={navbar.navbarData.logoImgURL}
            />}

            {navbarInfo.navbarType === 2 && 
            <NavbarTwo 
                navbarLinks={navbar.navbarData.links}
                navbarLogo={navbar.navbarData.logoImgURL}
                navbarButton={navbar.navbarData.button}
            />}

            {navbarInfo.navbarType === 3 && 
            <NavbarThree 
                navbarLinks={navbar.navbarData.links}
                navbarLogo={navbar.navbarData.logoImgURL}
                navbarButton={navbar.navbarData.button}
            />}
            
            {navbarInfo.navbarType === 4 && 
                <NavbarFour 
                    navbarLinks={navbar.navbarData.links}
                    navbarLogo={navbar.navbarData.logoImgURL}
            />}

        </NavbarContext.Provider>
    )
}
