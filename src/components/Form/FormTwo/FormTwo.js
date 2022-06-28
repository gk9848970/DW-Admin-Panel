import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'

export default function FormFour(props) {
  const { 
    formTitle, 
    formBlocks,
    formButtonText,
    formImage,
  } = props;
  
  const { handlePostFormData } = useContext(FormContext);

  const [title, setTitle] = useState(formTitle || "");
  const [image, setImage] = useState(formImage || "");
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
        <FormInput state={image} setState={setImage} label={"Image Of Form"}/>
        <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        <br />
        <button 
            onClick={() => {
                const dataTobeSent = {
                        title, 
                        blocks,
                        image, 
                        buttonText, 
                };
                handlePostFormData(dataTobeSent);
        }}>
            Post Form Data
        </button>
    </>
  )
}