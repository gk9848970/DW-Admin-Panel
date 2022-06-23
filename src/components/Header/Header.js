import React, { useState } from 'react';
import axios from 'axios';

import SelectHeader from './SelectHeader';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';
import HeaderThree from './HeaderThree/HeaderThree';
import HeaderFour from './HeaderFour/HeaderFour';
import { REST_ENPOINT } from '../../App';

export const HeaderContext = React.createContext();

export default function Header({ header }) {
    const [headerInfo, setHeaderInfo] = useState(header);
    const [selectedOption, setSelectedOption] = useState(null);

    const HeaderContextValue = {
        headerInfo,
        setSelectedOption,
        handlePostHeaderData,
    }

    if(selectedOption) {
        handleSelectedOptionAndHeaderSync();
    }

    // Post Header Data to server
    function handlePostHeaderData(data) {
        const newHeaderInfo = {...headerInfo, headerData: data}

        axios.post(REST_ENPOINT, {
            header: newHeaderInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setHeaderInfo(newHeaderInfo);
    }

    // Syncs the selectedOption state and Header state
    function handleSelectedOptionAndHeaderSync() {
        if(headerInfo.headerType !== parseInt(selectedOption.value)) {
            setHeaderInfo({...headerInfo, headerType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <HeaderContext.Provider value={HeaderContextValue}>
            <SelectHeader />

            {headerInfo.headerType === 1 && 
            <HeaderOne 
                headerTopline={headerInfo.headerData.topline} 
                headerHeading={headerInfo.headerData.heading}
                headerDescription={headerInfo.headerData.description}
                headerButton={headerInfo.headerData.button}
                headerImage={headerInfo.headerData.imgURL}
            />}

            {headerInfo.headerType === 2 && 
            <HeaderTwo 
                headerHeading={headerInfo.headerData.heading}
                headerDescription={headerInfo.headerData.description}
                headerButtonOne={headerInfo.headerData.buttonOne}
                hedaerButtonTwo={headerInfo.headerData.buttonTwo}
                headerImage={headerInfo.headerData.imgURL}
            />}

            {headerInfo.headerType === 3 && 
            <HeaderThree 
                headerBlocks={headerInfo.headerData.blocks}
            />}
            
            {headerInfo.headerType === 4 && 
            <HeaderFour 
                headerHeading={headerInfo.headerData.heading}
                headerDescription={headerInfo.headerData.description}
                headerSearchbar={headerInfo.headerData.searchbarText}
                headerVideo={headerInfo.headerData.videoURL} 
            />}

        </HeaderContext.Provider>
    )
}
