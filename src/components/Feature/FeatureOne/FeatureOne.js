import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeOneList from '../FeatureBlocksTypeOneList'

export default function FeatureOne(props) {
  const { 
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);

  console.log(blocks)

  return (
    <>
      <FeatureBlocksTypeOneList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks };
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}