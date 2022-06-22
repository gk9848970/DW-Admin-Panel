import React from 'react'
import FooterBlock from './FooterBlock'
import { v4 as uuidv4 } from 'uuid';

export default function FooterBlocksList({ blocks, setBlocks }) {
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

    function handleDeleteLink(blockId, linkId) {
        const newBlocks = [...blocks]
        const index = newBlocks.findIndex(block => block.id === blockId);
        const modifiedLinks = newBlocks[index].links.filter(link => link.id !== linkId);
        newBlocks[index].links = modifiedLinks;
        setBlocks(newBlocks);
    }

    function handleAddLink(blockId) {
        const newBlocks = [...blocks]
        const index = newBlocks.findIndex(block => block.id === blockId);
        newBlocks[index].links.push({
            id: uuidv4(),
            text: "Link Name",
            linkURL: "link url",
        })
        setBlocks(newBlocks);
    }

    const blockElements = blocks.map(block => 
        <FooterBlock 
            key={block.id} 
            {...block} 
            handleDeleteBlock={handleDeleteBlock}
            handleDeleteLink={handleDeleteLink}
            handleAddLink={handleAddLink}
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
