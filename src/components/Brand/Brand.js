import React, { useState } from 'react';
import axios from 'axios';

import SelectBrand from './SelectBrand';
import BrandShow from './BrandShow/BrandShow';
import BrandHide from './BrandHide/BrandHide';

import { REST_ENPOINT } from '../../App';

export const BrandContext = React.createContext();

export default function Brand({ brand }) {
    console.log(brand)
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

            {brandInfo.brandType === 1 && 
            <BrandShow
                brandBlocks={brandInfo.brandData.blocks}
            />}

            {brandInfo.brandType === 0 && 
            <BrandHide />}

        </BrandContext.Provider>
    )
}
