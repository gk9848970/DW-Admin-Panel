import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'
import HeaderTextArea from '../HeaderTextArea'
import HeaderButton from '../HeaderButton'

export default function HeaderTwo(props) {
  const { 
    headerHeading,
    headerDescription,
    headerButtonOne,
    hedaerButtonTwo,
    headerImage,
  } = props;

  const { handlePostHeaderData } = useContext(HeaderContext);

  const [heading, setHeading] = useState(headerHeading || "");
  const [description, setDescription] = useState(headerDescription || "");
  const [buttonOne, setButtonOne] = useState(headerButtonOne || {text: "", btnURL: "" });
  const [buttonTwo, setButtonTwo] = useState(hedaerButtonTwo || {text: "", btnURL: "" });
  const [imgURL, setImgURL] = useState(headerImage || "");

  return (
    <>
      <div className='input__two-block-layout mb-1x-input-gap'>
        <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
        <HeaderInput state={imgURL} setState={setImgURL} label={"image URL"}/>
      </div>

      <div className='input__one-long-block-layout mb-1x-input-gap'>
        <HeaderTextArea state={description} setState={setDescription} label={"Description"}/>
      </div>
      
      <div className='mb-1x-input-gap'>
        <HeaderButton button={buttonOne} setButton={setButtonOne} />
      </div>

      <div className='mb-1o5x-input-gap'>
        <HeaderButton button={buttonTwo} setButton={setButtonTwo} />
      </div>
      
      <button
          className='btn btn--purple'  
          onClick={() => {
            const dataTobeSent = {
                blocks: {
                    heading, 
                    description, 
                    buttonOne,
                    buttonTwo, 
                    imgURL,
                }
            };
            handlePostHeaderData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}