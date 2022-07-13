import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'
import HeaderTextArea from '../HeaderTextArea'

export default function HeaderFour(props) {
  const { 
    headerHeading,
    headerDescription,
    headerSearchbar,
    headerImage,
  } = props;
  
  const { handlePostHeaderData } = useContext(HeaderContext);

  const [heading, setHeading] = useState(headerHeading || "");
  const [description, setDescription] = useState(headerDescription || "");
  const [imgURL, setImgURL] = useState(headerImage || "");
  const [searchbarText, setSearchbarText] = useState(headerSearchbar || "");

  return (
    <>
      <div className='input__two-block-layout mb-1x-input-gap'>
        <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
        <HeaderInput state={searchbarText} setState={setSearchbarText} label={"Search Bar Text"}/>
      </div>
      
      <div className='input__one-long-block-layout mb-1x-input-gap'>
        <HeaderTextArea state={description} setState={setDescription} label={"Description"}/>
      </div>

      <div className='input__one-long-block-layout mb-1o5x-input-gap'>
        <HeaderInput state={imgURL} setState={setImgURL} label={"Background Image URL"}/>
      </div>
      
      <button
          className='btn btn--purple'  
          onClick={() => {
            const dataTobeSent = {
                blocks: {
                  heading, 
                  description,
                  imgURL,
                  searchbarText,
                }
            };
            handlePostHeaderData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}