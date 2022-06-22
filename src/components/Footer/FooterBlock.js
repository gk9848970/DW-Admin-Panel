import React from 'react'
import FooterLink from './FooterLink'

export default function FooterBlock(props) {
  const {
    id,
    heading,
    links,
    handleChangePropertyBlock,
    handleDeleteBlock,
    handleDeleteLink,
    handleAddLink,
  } = props;

  const linkElements = links.map(link => 
    <FooterLink
      key={link.id} 
      {...link} 
      blockId={id} 
      handleDeleteLink={handleDeleteLink}
    />
  )

  return (
    <>
      <div>
        <label>Heading</label>
        <input
          type="text" 
          name="linkName" 
          defaultValue={heading}
          onChange={e => handleChangePropertyBlock(id, "heading", e.target.value)}
        />
        {linkElements}
        <button onClick={() => handleAddLink(id)}>Add Link</button>
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
      </div>
    </>
  )
}
