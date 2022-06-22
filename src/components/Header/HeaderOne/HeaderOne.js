import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'
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
      <HeaderInput state={topline} setState={setTopline} label={"Topline"}/>
      <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
      <HeaderInput state={description} setState={setDescription} label={"description"}/>
      <HeaderInput state={imgURL} setState={setImgURL} label={"image URL"}/>
      <br />
      <HeaderButton button={button} setButton={setButton} />
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = {
                topline, 
                heading, 
                description, 
                button, 
                imgURL
            };
            handlePostHeaderData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}