import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeThreeList from './FeatureBlocksTypeThreeList'
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
      <FeatureBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <FeatureInput state={title} setState={setTitle} label={"Title"}/>
      <br />
      <button 
          onClick={() => {
            // Modification in data as needed by frontend
            const imgClassList = ['one', 'two', 'three', 'four', 'five', 'six'];
            const blocksWithImgClass = [...blocks].map((block, index) => {
              block.imgClass = imgClassList[index];
              return block;
            });

            const dataTobeSent = { blocks: blocksWithImgClass, title};
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}