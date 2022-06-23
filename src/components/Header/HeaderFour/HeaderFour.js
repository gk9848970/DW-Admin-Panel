import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'

export default function HeaderFour(props) {
  const { 
    headerHeading,
    headerDescription,
    headerSearchbar,
    headerVideo,
  } = props;
  
  const { handlePostHeaderData } = useContext(HeaderContext);

  const [heading, setHeading] = useState(headerHeading || "");
  const [description, setDescription] = useState(headerDescription || "");
  const [videoURL, setVideoURL] = useState(headerVideo || "");
  const [searchbarText, setSearchbarText] = useState(headerSearchbar || "");

  return (
    <>
      <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
      <HeaderInput state={description} setState={setDescription} label={"description"}/>
      <HeaderInput state={videoURL} setState={setVideoURL} label={"Background Video URL"}/>
      <HeaderInput state={searchbarText} setState={setSearchbarText} label={"Search Bar Text"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = {
                heading, 
                description,
                videoURL,
                searchbarText,
            };
            handlePostHeaderData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}