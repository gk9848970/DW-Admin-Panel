import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'
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
      <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
      <HeaderInput state={description} setState={setDescription} label={"description"}/>
      <HeaderInput state={imgURL} setState={setImgURL} label={"image URL"}/>
      <br />
      <HeaderButton button={buttonOne} setButton={setButtonOne} />
      <HeaderButton button={buttonTwo} setButton={setButtonTwo} />
      <br />
      <button 
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