import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderInput from '../HeaderInput'

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
      <HeaderInput state={heading} setState={setHeading} label={"headling"}/>
      <HeaderInput state={description} setState={setDescription} label={"description"}/>
      <HeaderInput state={imgURL} setState={setImgURL} label={"Background Image URL"}/>
      <HeaderInput state={searchbarText} setState={setSearchbarText} label={"Search Bar Text"}/>
      <br />
      <button 
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