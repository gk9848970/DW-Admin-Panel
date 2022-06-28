import React, { useState } from 'react';
import axios from 'axios';

import SelectBrand from './SelectBrand';
import BrandHide from './BrandHide/BrandHide';

import BrandOne from './BrandOne/BrandOne';
import BrandTwo from './BrandTwo/BrandTwo';
import BrandThree from './BrandThree/BrandThree';
import BrandFour from './BrandFour/BrandFour';

import { REST_ENPOINT } from '../../App';

export const BrandContext = React.createContext();

export default function Brand({ brand }) {
    const [brandInfo, setBrandInfo] = useState(brand);
    const [selectedOption, setSelectedOption] = useState(null);

    const BrandContextValue = {
        brandInfo,
        setSelectedOption,
        handlePostBrandData,
    }

    if(selectedOption) {
        handleSelectedOptionAndBrandSync();
    }

    // Post Testimonial Data to server
    function handlePostBrandData(data) {
        const newBrandInfo = {...brandInfo, brandData: data}

        axios.post(REST_ENPOINT, {
            brand: newBrandInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setBrandInfo(newBrandInfo);
    }

    // Syncs the selectedOption state and Brand state
    function handleSelectedOptionAndBrandSync() {
        if(brandInfo.brandType !== parseInt(selectedOption.value)) {
            setBrandInfo({...brandInfo, brandType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <BrandContext.Provider value={BrandContextValue}>
            <SelectBrand />

            {brandInfo.brandType === 0 && 
            <BrandHide/>}
    
            {brandInfo.brandType === 1 && 
            <BrandOne brandGrid={brandInfo.brandData.imageGrid} />}

            {brandInfo.brandType === 2 && 
            <BrandTwo brandGrid={brandInfo.brandData.imageGrid} />}

            {brandInfo.brandType === 3 && 
            <BrandThree brandGrid={brandInfo.brandData.imageGrid} />}

            {brandInfo.brandType === 4 && 
            <BrandFour brandGrid={brandInfo.brandData.imageGrid} />}

        </BrandContext.Provider>
    )
}
