import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeTwoList from './FeatureBlocksTypeTwoList'

export default function FeatureTwo(props) {
  const { 
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);

  return (
    <>
      <FeatureBlocksTypeTwoList 
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