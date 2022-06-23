import React, { useState, useContext } from 'react'
import { HeaderContext } from '../Header';
import HeaderBlocksList from '../HeaderBlocksList'

export default function FooterThree(props) {
  const { 
    headerBlocks,
  } = props;

  const { handlePostHeaderData } = useContext(HeaderContext);
  const [blocks, setBlocks] = useState(headerBlocks || []);
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
        Post Footer Data
      </button>
    </>
  )
}
