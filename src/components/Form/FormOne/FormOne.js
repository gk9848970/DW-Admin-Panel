import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'

export default function FormOne(props) {
  const { 
    formTitle, 
    formBlocks,
    formButtonText,
  } = props;
  
  const { handlePostFormData } = useContext(FormContext);

  const [title, setTitle] = useState(formTitle || "");
  const [blocks, setBlocks] = useState(formBlocks || []);
  const [buttonText, setButtonText] = useState(formButtonText || "");

  return (
    <>
        <FormBlocksList 
            blocks={blocks}
            setBlocks={setBlocks}
        />
        <br/>
        <FormInput state={title} setState={setTitle} label={"Title Of Form"}/>
        <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        <br />
        <button 
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