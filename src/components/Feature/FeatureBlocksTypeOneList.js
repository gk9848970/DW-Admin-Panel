import React from 'react'
import FeatureTypeOneBlock from './FeatureTypeOneBlock'
import { v4 as uuidv4 } from 'uuid';

export default function FeatureBlocksTypeOneList({ blocks, setBlocks }) {
    function handleChangePropertyBlock(id, property, newValue) {
        const newBlocks = [...blocks];
        const index = newBlocks.findIndex(block => block.id === id);
        newBlocks[index][property] = newValue;
        setBlocks(newBlocks);
    }

    function handleDeleteBlock(id) {
      setBlocks(blocks.filter(block => block.id !== id));
    }

    function handleAddBlock() {
        const newBlock  = {
              id: uuidv4(),
              heading: "Heading",
              description: "Description",
              imgURL: "",
          }

        setBlocks([...blocks, newBlock]);
    }

    const blockElements = blocks.map(block => 
        <FeatureTypeOneBlock 
            key={block.id}
            {...block} 
            handleDeleteBlock={handleDeleteBlock}
            handleChangePropertyBlock={handleChangePropertyBlock}
        />
    )
    return (
        <>
          <div>
              {blockElements}
          </div>
          <div>
            <button onClick={handleAddBlock}>Add Block</button>
          </div>
        </>
    )
}
