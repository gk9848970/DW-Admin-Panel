import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'
import HeaderTextArea from '../HeaderTextArea'
import HeaderButton from '../HeaderButton'

export default function HeaderOne(props) {
  const { 
    headerTopline, 
    headerHeading,
    headerDescription,
    headerButton,
    headerImage,
  } = props;
  
  const { handlePostHeaderData } = useContext(HeaderContext);

  const [topline, setTopline] = useState(headerTopline || "");
  const [heading, setHeading] = useState(headerHeading || "");
  const [description, setDescription] = useState(headerDescription || "");
  const [button, setButton] = useState(headerButton || {text: "", btnURL: "" });
  const [imgURL, setImgURL] = useState(headerImage || "");

  return (
    <>
      <div className='input__two-block-layout mb-1x-input-gap'>
        <HeaderInput state={topline} setState={setTopline} label={"Topline"}/>
        <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
      </div>

      <div className='input__one-long-block-layout mb-1x-input-gap'>
        <HeaderTextArea state={description} setState={setDescription} label={"Description"}/>
      </div>

      <div className='input__one-block-layout mb-1x-input-gap'>
        <HeaderInput state={imgURL} setState={setImgURL} label={"image URL"}/>
      </div>

      <div className='mb-1o5x-input-gap'>
        <HeaderButton button={button} setButton={setButton} />
      </div>
      
      <button
          className='btn btn--purple' 
          onClick={() => {
            const dataTobeSent = {
                blocks: {
                  topline, 
                  heading, 
                  description, 
                  button, 
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