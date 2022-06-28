import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeFourList from './FeatureBlocksTypeFourList'

export default function FeatureFour(props) {
  const { 
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);


  return (
    <>
      <FeatureBlocksTypeFourList 
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