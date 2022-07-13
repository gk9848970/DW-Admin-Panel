import React, { useState } from 'react';
import axios from 'axios';

import SelectHeader from './SelectHeader';
import HeaderHide from './HeaderHide/HeaderHide';
import HeaderOne from './HeaderOne/HeaderOne';
import HeaderTwo from './HeaderTwo/HeaderTwo';
import HeaderThree from './HeaderThree/HeaderThree';
import HeaderFour from './HeaderFour/HeaderFour';

import { REST_ENPOINT_POST_EMAIL } from '../../App';
import { REST_ENPOINT_POST_DATA } from '../../App';

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

        axios.post(REST_ENPOINT_POST_DATA, {
            Email: REST_ENPOINT_POST_EMAIL,
            data: {
                header: newHeaderInfo,
            }
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

            {headerInfo.headerType === 0 && 
            <HeaderHide/>}

            {headerInfo.headerType === 1 && 
            <HeaderOne
                headerTopline={headerInfo.headerData.blocks?.topline} 
                headerHeading={headerInfo.headerData.blocks?.heading}
                headerDescription={headerInfo.headerData.blocks?.description}
                headerButton={headerInfo.headerData.blocks?.button}
                headerImage={headerInfo.headerData.blocks?.imgURL}
            />}

            {headerInfo.headerType === 2 && 
            <HeaderTwo 
                headerHeading={headerInfo.headerData.blocks?.heading}
                headerDescription={headerInfo.headerData.blocks?.description}
                headerButtonOne={headerInfo.headerData.blocks?.buttonOne}
                hedaerButtonTwo={headerInfo.headerData.blocks?.buttonTwo}
                headerImage={headerInfo.headerData.blocks?.imgURL}
            />}

            {headerInfo.headerType === 3 && 
            <HeaderThree 
                headerBlocks={headerInfo.headerData.blocks}
            />}
            
            {headerInfo.headerType === 4 && 
            <HeaderFour 
                headerHeading={headerInfo.headerData.blocks?.heading}
                headerDescription={headerInfo.headerData.blocks?.description}
                headerSearchbar={headerInfo.headerData.blocks?.searchbarText}
                headerImage={headerInfo.headerData.blocks?.imgURL} 
            />}

        </HeaderContext.Provider>
    )
}
