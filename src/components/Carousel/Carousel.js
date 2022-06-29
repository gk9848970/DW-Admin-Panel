import React, { useState } from 'react';
import axios from 'axios';

import SelectCarousel from './SelectCarousel';
import CarouselOne from './CarouselOne/CarouselOne';
import CarouselTwo from './CarouselTwo/CarouselTwo';
import CarouselThree from './CarouselThree/CarouselThree';
import CarouselFour from './CarouselFour/CarouselFour';

import { REST_ENPOINT } from '../../App';

export const CarouselContext = React.createContext();

export default function Carousel({ carousel }) {
    const [carouselInfo, setCarouselInfo] = useState(carousel);
    const [selectedOption, setSelectedOption] = useState(null);

    const CarouselContextValue = {
        carouselInfo,
        setSelectedOption,
        handlePostCarouselData,
    }

    if(selectedOption) {
        handleSelectedOptionAndCarouselSync();
    }

    // Post Carousel Data to server
    function handlePostCarouselData(data) {
        const newCarouselInfo = {...carouselInfo, carouselData: data}

        axios.post(REST_ENPOINT, {
            carousel: newCarouselInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setCarouselInfo(newCarouselInfo);
    }

    // Syncs the selectedOption state and Carousel state
    function handleSelectedOptionAndCarouselSync() {
        if(carouselInfo.carouselType !== parseInt(selectedOption.value)) {
            setCarouselInfo({...carouselInfo, carouselType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <CarouselContext.Provider value={CarouselContextValue}>
            <SelectCarousel />

            {carouselInfo.carouselType === 1 && 
            <CarouselOne
                carouselTitle={carouselInfo.carouselData.title}
                carouselBlocks={carouselInfo.carouselData.blocks}
            />}

            {carouselInfo.carouselType === 2 && 
            <CarouselTwo
                carouselTitle={carouselInfo.carouselData.title}
                carouselDescription={carouselInfo.carouselData.description}
                carouselBlocks={carouselInfo.carouselData.blocks}
            />}

            {carouselInfo.carouselType === 3 && 
            <CarouselThree
                carouselTitle={carouselInfo.carouselData.title}
                carouselBlocks={carouselInfo.carouselData.blocks}
            />}

            {carouselInfo.carouselType === 4 && 
            <CarouselFour
                carouselTitle={carouselInfo.carouselData.title}
                carouselBlocks={carouselInfo.carouselData.blocks}
            />}

        </CarouselContext.Provider>
    )
}
