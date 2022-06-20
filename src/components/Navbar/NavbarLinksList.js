import React from 'react'
import Navlink from './Navlink'
import { v4 as uuidv4 } from 'uuid';

export default function NavbarLinksList({ links, setLinks }) {
    function handleDeleteNavlink(id) {
        setLinks(links.filter(link => link.id !== id));
    }

    function handleAddNavlink() {
        const newNavlink  = {
            id: uuidv4(),
            text: "New Link",
            linkURL: "fake.url",
        }

        setLinks([...links, newNavlink]);
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
        />
    )
    return (
        <div>
            {linkElements}
            <button onClick={handleAddNavlink}>Add Link</button>
        </div>
    )
}
