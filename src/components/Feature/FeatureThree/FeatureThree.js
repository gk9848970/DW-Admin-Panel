import React, { useState, useContext } from 'react'
import { FeatureContext } from '../Feature';
import FeatureBlocksTypeThreeList from './FeatureBlocksTypeThreeList'
import FeatureInput from '../FeatureInput'
import { v4 as uuidv4 } from 'uuid';

export default function FeatureOne(props) {
  const {
    featureTitle,
    featureBlocks
  } = props;
  
  const { handlePostFeatureData } = useContext(FeatureContext);
  const [blocks, setBlocks] = useState(featureBlocks || 
    [
      {
        id: uuidv4(),
        name: "Title",
        description: "",
        icon: "Image",
      },
    ]
  );
  const [title, setTitle] = useState(featureTitle || "");

  return (
    <>
      <FeatureBlocksTypeThreeList 
        blocks={blocks}
        setBlocks={setBlocks}
      />
      
      <div className='input__one-block-layout mb-1o5x-input-gap'>
        <FeatureInput state={title} setState={setTitle} label={"Title"}/>
      </div>
      
      <button
          className='btn btn--purple' 
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