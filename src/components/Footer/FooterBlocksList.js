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
        if(blocks.length === 1) {
            return;
        }
        
      setBlocks(blocks.filter(block => block.id !== id));
    }

    function handleAddBlock(blockId) {
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

        const newBlocks = [...blocks];
        const index = newBlocks.findIndex(block => block.id === blockId);
        newBlocks.splice(index+1, 0, newBlock);

        setBlocks(newBlocks);
    }

    function handleDeleteLink(blockId, linkId) {
        const newBlocks = [...blocks]
        const index = newBlocks.findIndex(block => block.id === blockId);

        if(newBlocks[index].links.length === 1) {
            return;
        }

        const modifiedLinks = newBlocks[index].links.filter(link => link.id !== linkId);
        newBlocks[index].links = modifiedLinks;
        setBlocks(newBlocks);
    }

    function handleAddLink(blockId, linkId) {
        const newBlocks = [...blocks]
        const indexBlock = newBlocks.findIndex(block => block.id === blockId);
        const indexLink = newBlocks[indexBlock].links.findIndex(link => link.id === linkId)

        const newLink = {
            id: uuidv4(),
            text: "Link Name",
            linkURL: "link url",
        }

        newBlocks[indexBlock].links.splice(indexLink+1, 0, newLink);

        setBlocks(newBlocks);
    }

    function handleLinkInputChange(blockId, linkId, property, newValue) {
        const newBlocks = [...blocks]
        const indexBlock = newBlocks.findIndex(block => block.id === blockId);
        const linkIndex = newBlocks[indexBlock].links.findIndex(link => link.id === linkId);
        const linksModified = newBlocks[indexBlock].links[linkIndex];
        linksModified[property] = newValue;

        setBlocks(newBlocks);
    }

    const blockElements = blocks.map(block => 
        <FooterBlock 
            key={block.id} 
            {...block}
            handleAddBlock={handleAddBlock}
            handleDeleteBlock={handleDeleteBlock}
            handleChangePropertyBlock={handleChangePropertyBlock}
            handleAddLink={handleAddLink}
            handleDeleteLink={handleDeleteLink}
            handleLinkInputChange={handleLinkInputChange}
        />
    )
    return (
        <>
          <div>
              {blockElements}
          </div>
        </>
    )
}
