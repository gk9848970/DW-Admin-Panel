import React, { useState, useContext } from 'react'
import { FooterContext } from '../Footer';
import FooterBlocksList from '../FooterBlocksList'

export default function FooterOne({ footerBlocks }) {
  const { handlePostFooterData } = useContext(FooterContext);
  const [blocks, setBlocks] = useState(footerBlocks);

  // console.log(blocks)

  return (
    <>
      <FooterBlocksList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
              const dataTobeSent = {blocks, footerOne: "Specially for footer one"};
              handlePostFooterData(dataTobeSent);
          }}
      >Post Footer Data</button>
    </>
  )
}
