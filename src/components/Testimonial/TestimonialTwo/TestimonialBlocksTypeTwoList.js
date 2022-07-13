import React from 'react'
import TestimonialTypeTwoBlock from './TestimonialTypeTwoBlock'
import { v4 as uuidv4 } from 'uuid';

export default function TestimonialBlocksTypeTwoList({ blocks, setBlocks }) {
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
              heading: "Heading",
              subHeading: "",
              description: "Description",
        }

        newBlocks.splice(index+1, 0, newBlock);
        setBlocks(newBlocks);
    }

    const blockElements = blocks.map(block => 
        <TestimonialTypeTwoBlock 
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
