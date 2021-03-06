import React, { useState } from 'react';
import axios from 'axios';

import SelectTestimonial from './SelectTestimonial';
import TestimonialHide from './TestimonialHide/TestimonialHide';
import TestimonialOne from './TestimonialOne/TestimonialOne';
import TestimonialTwo from './TestimonialTwo/TestimonialTwo';
import TestimonialThree from './TestimonialThree/TestimonialThree';

import { REST_ENPOINT_POST_EMAIL } from '../../App';
import { REST_ENPOINT_POST_DATA } from '../../App';

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

        axios.post(REST_ENPOINT_POST_DATA, {
            Email: REST_ENPOINT_POST_EMAIL,
            data: {
                testimonial: newTestimonialInfo,
            }
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

            {testimonialInfo.testimonialType === 0 && 
            <TestimonialHide/>}

            {testimonialInfo.testimonialType === 1 && 
            <TestimonialOne
                testimonialTitle={testimonialInfo.testimonialData.title}
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

            {testimonialInfo.testimonialType === 2 && 
            <TestimonialTwo
                testimonialTitle={testimonialInfo.testimonialData.title}
                testimonialDescription={testimonialInfo.testimonialData.description}
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

            {testimonialInfo.testimonialType === 3 && 
            <TestimonialThree
                testimonialTitle={testimonialInfo.testimonialData.title}
                testimonialBlocks={testimonialInfo.testimonialData.blocks}
            />}

        </TestimonialContext.Provider>
    )
}
