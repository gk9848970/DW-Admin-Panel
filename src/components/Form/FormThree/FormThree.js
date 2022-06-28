import React, { useState, useContext } from 'react'
import { FormContext } from '../Form';
import FormInput from '../FormInput'
import FormBlocksList from '../FormBlocksList'

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
  const [blocks, setBlocks] = useState(formBlocks || []);
  const [buttonText, setButtonText] = useState(formButtonText || "");

  return (
    <>
        <FormBlocksList 
            blocks={blocks}
            setBlocks={setBlocks}
        />
        <br/>
        <FormInput state={heading} setState={setHeading} label={"Heading Of Form"}/>
        <FormInput state={description} setState={setDescription} label={"Description Of Form"}/>
        <FormInput state={title} setState={setTitle} label={"Title Of Form"}/>
        <FormInput state={image} setState={setImage} label={"Image Of Form"}/>
        <FormInput state={buttonText} setState={setButtonText} label={"Text on Button"}/>
        <br />
        <button 
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