import React from 'react'
import FormBlock from './FormBlock'
import { v4 as uuidv4 } from 'uuid';

export default function FormBlocksList({ blocks, setBlocks }) {
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
        const newBlocks = [...blocks];
        const index = newBlocks.findIndex(block => block.id === blockId);

        const newBlock  = {
            id: uuidv4(),
            labelText: "",
            placeholderText: "",
            type: "text", // Static fixed Field
        }

        newBlocks.splice(index+1, 0, newBlock);
        setBlocks(newBlocks);
    }

    const blockElements = blocks.map(block => 
        <FormBlock 
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
