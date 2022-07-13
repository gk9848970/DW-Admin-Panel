import React, { useState } from 'react';
import axios from 'axios';

import SelectFooter from './SelectFooter';
import FooterHide from './FooterHide/FooterHide';
import FooterOne from './FooterOne/FooterOne';
import FooterTwo from './FooterTwo/FooterTwo';
import FooterThree from './FooterThree/FooterThree';
import FooterFour from './FooterFour/FooterFour';

import { REST_ENPOINT_POST_EMAIL } from '../../App';
import { REST_ENPOINT_POST_DATA } from '../../App';

export const FooterContext = React.createContext();

export default function Footer({ footer }) {
    const [footerInfo, setFooterInfo] = useState(footer);
    const [selectedOption, setSelectedOption] = useState(null);

    const FooterContextValue = {
        footerInfo,
        setSelectedOption,
        handlePostFooterData,
    }

    if(selectedOption) {
        handleSelectedOptionAndFooterSync();
    }
    
    // Post Footer Data to server
    function handlePostFooterData(data) {
        const newFooterInfo = {...footerInfo, footerData: data}

        axios.post(REST_ENPOINT_POST_DATA, {
            Email: REST_ENPOINT_POST_EMAIL,
            data: {
                footer: newFooterInfo,
            }
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setFooterInfo(newFooterInfo);
    }

    // Syncs the selectedOption state and navbar state
    function handleSelectedOptionAndFooterSync() {
        if(footerInfo.footerType !== parseInt(selectedOption.value)) {
            setFooterInfo({...footerInfo, footerType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <FooterContext.Provider value={FooterContextValue}>
            <span className='settings__select-span'>Select Footer type</span>
            <SelectFooter />

            {footerInfo.footerType === 0 && 
            <FooterHide/>}

            {footerInfo.footerType === 1 && 
            <FooterOne 
                footerBlocks={footer.footerData.blocks}
                footerLogo={footer.footerData.logoImgURL}
                footerLogoLink={footer.footerData.logoLink}
                footerAddress={footer.footerData.address}
                footerCopyright={footer.footerData.copyright}
                footerSocialLinks={footer.footerData.socialLinks}
            />} 

            {footerInfo.footerType === 2 && 
            <FooterTwo 
                footerBlocks={footer.footerData.blocks}
                footerLogo={footer.footerData.logoImgURL}
                footerLogoLink={footer.footerData.logoLink}
                footerPlaceholderText={footer.footerData.placeholderText}
                footerAddress={footer.footerData.address}
                footerCopyright={footer.footerData.copyright}
                footerSocialLinks={footer.footerData.socialLinks}
                footerHeading={footer.footerData.heading}
                footerSubHeading={footer.footerData.subHeading}
                footerButton={footer.footerData.button}
            />}

            {footerInfo.footerType === 3 && 
            <FooterThree 
                footerBlocks={footer.footerData.blocks}
                footerLogo={footer.footerData.logoImgURL}
                footerLogoLink={footer.footerData.logoLink}
                footerCopyright={footer.footerData.copyright}
                footerPlaceholderText={footer.footerData.placeholderText}
                footerSocialLinks={footer.footerData.socialLinks}
                footerHeading={footer.footerData.heading}
                footerSubHeading={footer.footerData.subHeading}
                footerButton={footer.footerData.button}
            />}
            
            {footerInfo.footerType === 4 && 
            <FooterFour 
                footerBlocks={footer.footerData.blocks}
                footerSocialLinks={footer.footerData.socialLinks}
                footerHeading={footer.footerData.heading}
                footerSubHeading={footer.footerData.subHeading}
                footerCopyright={footer.footerData.copyright}
            />}

        </FooterContext.Provider>
    )
}
