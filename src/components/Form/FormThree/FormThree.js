import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'
import { v4 as uuidv4 } from 'uuid';

export default function FormThree(props) {
  const { 
    formHeading, 
    formDescription, 
    formTitle, 
    formBlocks,
    formButtonText,
    formImage,
  } = props;
  
  const { handlePostFormData } = useContext(FormContext);

  const [heading, setHeading] = useState(formHeading || "");
  const [description, setDescription] = useState(formDescription || "");
  const [title, setTitle] = useState(formTitle || "");
  const [image, setImage] = useState(formImage || "");
  const [blocks, setBlocks] = useState(formBlocks || 
    [
      {
        id: uuidv4(),
        labelText: "",
        placeholderText: "",
        type: "text", // Static fixed Field
      },
    ]
  )
  const [buttonText, setButtonText] = useState(formButtonText || "");

  return (
    <>
        <FormBlocksList 
            blocks={blocks}
            setBlocks={setBlocks}
        />
        
        <div className='input__one-block-layout mb-1x-input-gap'>
          <FormInput state={heading} setState={setHeading} label={"Heading Of Form"}/>
        </div>
        
        <div className='input__one-block-layout mb-1x-input-gap'>
          <FormInput state={description} setState={setDescription} label={"Description Of Form"}/>
        </div>
        <div className='input__one-block-layout mb-1x-input-gap'>
          <FormInput state={title} setState={setTitle} label={"Title Of Form"}/>
        </div>

        <div className='input__one-block-layout mb-1x-input-gap'>
          <FormInput state={image} setState={setImage} label={"Image Of Form"}/>
        </div>

        <div className='input__one-block-layout mb-1o5x-input-gap'>
          <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        </div>
        
        <button
            className='btn btn--purple'
            onClick={() => {
                const dataTobeSent = {
                        heading,
                        description,
                        title,
                        image,
                        buttonText, 
                        blocks, 
                };
                handlePostFormData(dataTobeSent);
        }}>
            Post Form Data
        </button>
    </>
  )
}