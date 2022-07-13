import React from 'react'
import Navlink from './Navlink'
import { v4 as uuidv4 } from 'uuid';

export default function NavbarLinksList({ links, setLinks }) {
    function handleDeleteNavlink(id) {
        if(links.length === 1) {
            return;
        }
        setLinks(links.filter(link => link.id !== id));
    }

    function handleAddNavlink(linkId) {
        const newLinks = [...links];
        const index = newLinks.findIndex(link => link.id === linkId);

        const newNavlink  = {
            id: uuidv4(),
            text: "New Link",
            linkURL: "fake.url",
        }

        newLinks.splice(index+1, 0, newNavlink);

        setLinks(newLinks);
    }

    function handleNavlinkChange(id, property, newValue) {
        const newLinks = [...links];
        const index = newLinks.findIndex(link => link.id === id);
        const linkToChange = newLinks[index];
        linkToChange[`${property}`] = newValue;
        setLinks(newLinks);
    }
    
    const linkElements = links.map(link => 
        <Navlink 
            key={link.id} 
            {...link} 
            handleDeleteNavlink={handleDeleteNavlink}
            handleNavlinkChange={handleNavlinkChange}
            handleAddNavlink={handleAddNavlink}
        />
    )
    return (
        <div className='mb-2x-input-gap'>
            {linkElements}
        </div>
    )
}
