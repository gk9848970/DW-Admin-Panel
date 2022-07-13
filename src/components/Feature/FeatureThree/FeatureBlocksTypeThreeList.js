import React from 'react'
import FeatureTypeThreeBlock from './FeatureTypeThreeBlock'
import { v4 as uuidv4 } from 'uuid';

export default function FeatureBlocksTypeThreeList({ blocks, setBlocks }) {
    function handleChangePropertyBlock(id, property, newValue) {
        const newBlocks = [...blocks];
        const index = newBlocks.findIndex(block => block.id === id);
        newBlocks[index][property] = newValue;
        setBlocks(newBlocks);
    }

    function handleDeleteBlock(id) {
      if(blocks.length === 1) {
        return;
      }

      setBlocks(blocks.filter(block => block.id !== id));
    }

    function handleAddBlock(blockId) {
      if(blocks.length === 6) {
        return;
      }

      const newBlocks = [...blocks];
      const index = newBlocks.findIndex(block => block.id === blockId);

      const newBlock  = {
            id: uuidv4(),
            name: "Title",
            description: "",
            icon: "Image",
        }

        newBlocks.splice(index+1, 0, newBlock);
        setBlocks(newBlocks);
    }

    const blockElements = blocks.map(block => 
        <FeatureTypeThreeBlock 
            key={block.id}
            {...block}
            handleAddBlock={handleAddBlock}
            handleDeleteBlock={handleDeleteBlock}
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
    )
    return (
        <>
          <div className='mb-2o5x-input-gap'>
              {blockElements}
          </div>
        </>
    )
}