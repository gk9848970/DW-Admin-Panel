import React, { useState } from 'react';
import axios from 'axios';

import SelectForm from './SelectForm';
import FormOne from './FormOne/FormOne';
import FormTwo from './FormTwo/FormTwo';
import FormThree from './FormThree/FormThree';
import FormFour from './FormFour/FormFour';
import { REST_ENPOINT } from '../../App';

export const FormContext = React.createContext();

export default function Form({ form }) {
    const [formInfo, setFormInfo] = useState(form);
    const [selectedOption, setSelectedOption] = useState(null);

    const FormContextValue = {
        formInfo,
        setSelectedOption,
        handlePostFormData,
    }

    if(selectedOption) {
        handleSelectedOptionAndFormSync();
    }

    // Post Form Data to server
    function handlePostFormData(data) {
        const newFormInfo = {...formInfo, formData: data}

        axios.post(REST_ENPOINT, {
            form: newFormInfo,
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err)
        })

        setFormInfo(newFormInfo);
    }

    // Syncs the selectedOption state and Form state
    function handleSelectedOptionAndFormSync() {
        if(formInfo.formType !== parseInt(selectedOption.value)) {
            setFormInfo({...formInfo, formType: parseInt(selectedOption.value)});
        } 
    }

    return (
        <FormContext.Provider value={FormContextValue}>
            <SelectForm />

            {formInfo.formType === 1 && 
            <FormOne
                formTitle={formInfo.formData.title}
                formBlocks={formInfo.formData.blocks}
                formButtonText={formInfo.formData.buttonText}
            />}

            {formInfo.formType === 2 && 
            <FormTwo
                formTitle={formInfo.formData.title}
                formBlocks={formInfo.formData.blocks}
                formImage={formInfo.formData.image}
                formButtonText={formInfo.formData.buttonText}
            />}
            
            {formInfo.formType === 3 && 
            <FormThree
                formHeading={formInfo.formData.heading}
                formDescription={formInfo.formData.description}
                formTitle={formInfo.formData.title}
                formBlocks={formInfo.formData.blocks}
                formImage={formInfo.formData.image}
                formButtonText={formInfo.formData.buttonText}
            />}

            {formInfo.formType === 4 && 
            <FormFour
                formTitle={formInfo.formData.title}
                formBlocks={formInfo.formData.blocks}
                formPlaceholder={formInfo.formData.placeholder}
                formButtonText={formInfo.formData.buttonText}
            />}

        </FormContext.Provider>
    )
}
