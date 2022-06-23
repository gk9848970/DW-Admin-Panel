import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeOneList from '../FeatureBlocksTypeOneList'

export default function FeatureTwo(props) {
  const { 
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);


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