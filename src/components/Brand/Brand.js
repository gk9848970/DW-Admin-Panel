import React, { useState } from 'react';
import axios from 'axios';

import SelectBrand from './SelectBrand';
import BrandHide from './BrandHide/BrandHide';

import BrandOne from './BrandOne/BrandOne';
import BrandTwo from './BrandTwo/BrandTwo';
import BrandThree from './BrandThree/BrandThree';
import BrandFour from './BrandFour/BrandFour';

import { REST_ENPOINT_POST_EMAIL } from '../../App';
import { REST_ENPOINT_POST_DATA } from '../../App';

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

        axios.post(REST_ENPOINT_POST_DATA, {
            Email: REST_ENPOINT_POST_EMAIL,
            data: {
                brand: newBrandInfo,
            }
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
            <BrandOne
                brandTitle={brandInfo.brandData.title}
                brandDescription={brandInfo.brandData.description}
                brandGrid={brandInfo.brandData.imageGrid} 
            />}

            {brandInfo.brandType === 2 && 
            <BrandTwo
                brandTitle={brandInfo.brandData.title}
                brandDescription={brandInfo.brandData.description}
                brandGrid={brandInfo.brandData.imageGrid} 
            />}

            {brandInfo.brandType === 3 && 
            <BrandThree
                brandTitle={brandInfo.brandData.title}
                brandDescription={brandInfo.brandData.description}
                brandGrid={brandInfo.brandData.imageGrid} 
            />}

            {brandInfo.brandType === 4 && 
            <BrandFour
                brandTitle={brandInfo.brandData.title}
                brandDescription={brandInfo.brandData.description}
                brandGrid={brandInfo.brandData.imageGrid} 
            />}

        </BrandContext.Provider>
    )
}
