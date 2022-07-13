import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderBlocksList from './HeaderBlocksList'
import { v4 as uuidv4 } from 'uuid';

export default function HeaderThree(props) {
  const { 
    headerBlocks,
  } = props;

  const { handlePostHeaderData } = useContext(HeaderContext);

  let isArray = headerBlocks instanceof Array ? true : false;
  const [blocks, setBlocks] = useState((isArray) ? headerBlocks : 
    [
      {
        id: uuidv4(),
        heading: "Heading",
        description: "Description",
        button: {text: "", btnURL: "" },
        imgURL: ""
      }
    ]
  );
  
  return (
    <>
      <HeaderBlocksList 
        blocks={blocks}
        setBlocks={setBlocks} />

      <button
          className='btn btn--purple' 
          onClick={() => {
              const dataTobeSent = {blocks};
              handlePostHeaderData(dataTobeSent);
      }}>
        Post Header Data
      </button>
    </>
  )
}
