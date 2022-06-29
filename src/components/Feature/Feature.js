import React, { useState } from 'react';
import axios from 'axios';

import SelectFeature from './SelectFeature';
import FeatureOne from './FeatureOne/FeatureOne';
import FeatureTwo from './FeatureTwo/FeatureTwo';
import FeatureThree from './FeatureThree/FeatureThree';
import FeatureFour from './FeatureFour/FeatureFour';
import { REST_ENPOINT } from '../../App';

export const FeatureContext = React.createContext();

export default function Feature({ feature }) {
    const [featureInfo, setFeatureInfo] = useState(feature);
    const [selectedOption, setSelectedOption] = useState(null);

    const FeatureContextValue = {
        featureInfo,
        setSelectedOption,
        handlePostFeatureData,
    }

    if(selectedOption) {
        handleSelectedOptionAndFeatureSync();
    }

    // Post Feature Data to server
    function handlePostFeatureData(data) {
        const newFeatureInfo = {...featureInfo, featureData: data}

        axios.post(REST_ENPOINT, {
            feature: newFeatureInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setFeatureInfo(newFeatureInfo);
    }

    // Syncs the selectedOption state and Feature state
    function handleSelectedOptionAndFeatureSync() {
        if(featureInfo.featureType !== parseInt(selectedOption.value)) {
            setFeatureInfo({...featureInfo, featureType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <FeatureContext.Provider value={FeatureContextValue}>
            <SelectFeature />

            {featureInfo.featureType === 1 && 
            <FeatureOne
                featureTitle={featureInfo.featureData.title}
                featureBlocks={featureInfo.featureData.blocks}
            />}

            {featureInfo.featureType === 2 && 
            <FeatureTwo
                featureTitle={featureInfo.featureData.title}
                featureBlocks={featureInfo.featureData.blocks}
            />}

            {featureInfo.featureType === 3 && 
            <FeatureThree
                featureTitle={featureInfo.featureData.title}
                featureBlocks={featureInfo.featureData.blocks}
            />}
            
            {featureInfo.featureType === 4 && 
            <FeatureFour
                featureTitle={featureInfo.featureData.title}
                featureBlocks={featureInfo.featureData.blocks}
            />}

        </FeatureContext.Provider>
    )
}
