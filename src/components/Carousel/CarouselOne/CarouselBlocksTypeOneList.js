import React from 'react'
import CarouselTypeOneBlock from './CarouselTypeOneBlock'
import { v4 as uuidv4 } from 'uuid';

export default function CarouselBlocksTypeOneList({ blocks, setBlocks }) {
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
            heading: "",
            description: "Description",
            imgURL: "",
        }

        newBlocks.splice(index+1, 0, newBlock);
        setBlocks(newBlocks);
    }

    

    const blockElements = blocks.map(block => 
        <CarouselTypeOneBlock 
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
