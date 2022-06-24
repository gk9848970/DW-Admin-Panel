import React, { useState, useContext } from 'react'
import { BrandContext } from '../Brand';
import BrandBlocksList from '../BrandBlocksList';

export default function BrandShow(props) {
  const { 
    brandBlocks
  } = props;
  
  const { handlePostBrandData } = useContext(BrandContext);
  const [blocks, setBlocks] = useState(brandBlocks || []);

  return (
    <>
        <BrandBlocksList 
            blocks={blocks}
            setBlocks={setBlocks}
        />
        <button 
            onClick={() => {
                const dataTobeSent = { blocks };
                handlePostBrandData(dataTobeSent);
        }}>
            Post Brand Data
        </button>
    </>
  )
}