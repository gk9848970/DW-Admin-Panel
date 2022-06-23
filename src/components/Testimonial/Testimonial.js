import React, { useState } from 'react';
import axios from 'axios';

import SelectTestimonial from './SelectTestimonial';
import TestimonialOne from './TestimonialOne/TestimonialOne';
import TestimonialTwo from './TestimonialTwo/TestimonialTwo';
import TestimonialThree from './TestimonialThree/TestimonialThree';
import { REST_ENPOINT } from '../../App';

export const TestimonialContext = React.createContext();

export default function Testimonial({ testimonial }) {
    const [testimonialInfo, setTestimonialInfo] = useState(testimonial);
    const [selectedOption, setSelectedOption] = useState(null);

    const TestimonialContextValue = {
        testimonialInfo,
        setSelectedOption,
        handlePostTestimonialData,
    }

    if(selectedOption) {
        handleSelectedOptionAndTestimonialSync();
    }

    // Post Testimonial Data to server
    function handlePostTestimonialData(data) {
        const newTestimonialInfo = {...testimonialInfo, testimonialData: data}

        axios.post(REST_ENPOINT, {
            testimonial: newTestimonialInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setTestimonialInfo(newTestimonialInfo);
    }

    // Syncs the selectedOption state and Testimonial state
    function handleSelectedOptionAndTestimonialSync() {
        if(testimonialInfo.testimonialType !== parseInt(selectedOption.value)) {
            setTestimonialInfo({...testimonialInfo, testimonialType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <TestimonialContext.Provider value={TestimonialContextValue}>
            <SelectTestimonial />

            {testimonialInfo.testimonialType === 1 && 
            <TestimonialOne
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

            {testimonialInfo.testimonialType === 2 && 
            <TestimonialTwo
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

            {testimonialInfo.testimonialType === 3 && 
            <TestimonialThree
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

        </TestimonialContext.Provider>
    )
}
