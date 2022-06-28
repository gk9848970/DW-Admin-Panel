import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'

export default function FormTwo(props) {
  const { 
    formTitle, 
    formBlocks,
    formButtonText,
    formPlaceholder,
  } = props;
  
  const { handlePostFormData } = useContext(FormContext);

  const [title, setTitle] = useState(formTitle || "");
  const [placeholder, setPlaceholder] = useState(formPlaceholder || "");
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
        <FormInput state={placeholder} setState={setPlaceholder} label={"PlaceHolder Of Form"}/>
        <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        <br />
        <button 
            onClick={() => {
                const dataTobeSent = {
                        title,
                        placeholder,
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