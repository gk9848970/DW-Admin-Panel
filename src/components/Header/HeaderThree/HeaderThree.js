import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderBlocksList from './HeaderBlocksList'

export default function HeaderThree(props) {
  const { 
    headerBlocks,
  } = props;

  const { handlePostHeaderData } = useContext(HeaderContext);

  let isArray = headerBlocks instanceof Array ? true : false;
  const [blocks, setBlocks] = useState(isArray ? headerBlocks : []);
  
  return (
    <>
      <HeaderBlocksList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
              const dataTobeSent = {blocks};
              handlePostHeaderData(dataTobeSent);
      }}>
        Post Header Data
      </button>
    </>
  )
}
