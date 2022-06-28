import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeThreeList from './FeatureBlocksTypeThreeList'

export default function FeatureOne(props) {
  const { 
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || []);


  return (
    <>
      <FeatureBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      <br />
      <button 
          onClick={() => {
            // Modification in data as needed by frontend
            const imgClassList = ['one', 'two', 'three', 'four', 'five', 'six'];
            const blocksWithImgClass = [...blocks].map((block, index) => {
              block.imgClass = imgClassList[index];
              return block;
            });

            const dataTobeSent = { blocks: blocksWithImgClass};
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}