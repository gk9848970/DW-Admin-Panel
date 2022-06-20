import React, { useState } from 'react';
import axios from 'axios';

import SelectFooter from './SelectFooter';
import FooterOne from './FooterOne/FooterOne';
import FooterTwo from './FooterTwo/FooterTwo';
import FooterThree from './FooterThree/FooterThree';
import FooterFour from './FooterFour/FooterFour';
import { REST_ENPOINT } from '../../App';

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

        axios.post(REST_ENPOINT, {
            footer: newFooterInfo,
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
            <SelectFooter />

            {footerInfo.footerType === 1 
            && <FooterOne footerBlocks={footer.footerData.blocks} />} 

            {footerInfo.footerType === 2 
            && <FooterTwo footerBlocks={footer.footerData.blocks} />}

            {footerInfo.footerType === 3 
            && <FooterThree footerBlocks={footer.footerData.blocks} />}
            
            {footerInfo.footerType === 4 
            && <FooterFour footerBlocks={footer.footerData.blocks} />}

        </FooterContext.Provider>
    )
}
