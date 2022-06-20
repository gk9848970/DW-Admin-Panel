import React from 'react'
import FooterBlock from './FooterBlock'
import { v4 as uuidv4 } from 'uuid';

export default function FooterBlocksList({ blocks, setBlocks }) {
    console.log(blocks);
    function handleDeleteBlock(id) {
      setBlocks(blocks.filter(block => block.id !== id));
    }

    function handleAddBlock() {
        const newBlock  = {
              id: uuidv4(),
              heading: "Heading",
              links: [
                  {
                      id: uuidv4(),
                      text: "Link Name",
                      linkURL: "www.bing.com",
                  },
              ],
          }

        setBlocks([...blocks, newBlock]);
    }

    const blockElements = blocks.map(block => 
        <FooterBlock 
            key={block.id} 
            {...block} 
            handleDeleteBlock={handleDeleteBlock}
        />
    )
    return (
        <>
          <div>
              {blockElements}
          </div>
          <div>
            <button onClick={handleAddBlock}>Add Links Block</button>
          </div>
        </>
    )
}
