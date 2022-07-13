import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'
import { v4 as uuidv4 } from 'uuid';

export default function FormOne(props) {
  const { 
    formTitle, 
    formBlocks,
    formButtonText,
  } = props;
  
  const { handlePostFormData } = useContext(FormContext);

  const [title, setTitle] = useState(formTitle || "");
  const [blocks, setBlocks] = useState(formBlocks || 
    [
      {
        id: uuidv4(),
        labelText: "",
        placeholderText: "",
        type: "text", // Static fixed Field
      },
    ]
  );
  const [buttonText, setButtonText] = useState(formButtonText || "");

  return (
    <>
        <FormBlocksList 
            blocks={blocks}
            setBlocks={setBlocks}
        />
        
        <div className='input__one-block-layout mb-1x-input-gap'>
          <FormInput state={title} setState={setTitle} label={"Title Of Form"}/>
        </div>

        <div className='input__one-block-layout mb-1o5x-input-gap'>
          <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        </div>
        

        <button
            className='btn btn--purple' 
            onClick={() => {
                const dataTobeSent = {
                        title, 
                        blocks, 
                        buttonText, 
                };
                handlePostFormData(dataTobeSent);
        }}>
            Post Form Data
        </button>
    </>
  )
}