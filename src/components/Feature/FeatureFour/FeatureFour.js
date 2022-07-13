import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeFourList from './FeatureBlocksTypeFourList'
import FeatureInput from '../FeatureInput'
import { v4 as uuidv4 } from 'uuid';

export default function FeatureFour(props) {
  const {
    featureTitle,
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || 
    [
      {
        id: uuidv4(),
        heading: "Heading",
        description: "Description",
      },
    ]
  );
  const [title, setTitle] = useState(featureTitle || "");

  return (
    <>
      <FeatureBlocksTypeFourList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <FeatureInput state={title} setState={setTitle} label={"Title"}/>
      </div>

      <button
          className='btn btn--purple' 
          onClick={() => {
            const dataTobeSent = { blocks, title };
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}