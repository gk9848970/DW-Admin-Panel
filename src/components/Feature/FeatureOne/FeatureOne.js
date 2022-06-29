import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeOneList from './FeatureBlocksTypeOneList'
import FeatureInput from '../FeatureInput'

export default function FeatureOne(props) {
  const { 
    featureTitle,
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);
  const [title, setTitle] = useState(featureTitle || "");

  return (
    <>
      <FeatureBlocksTypeOneList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <FeatureInput state={title} setState={setTitle} label={"Title"}/>
      <br />
      <button 
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}