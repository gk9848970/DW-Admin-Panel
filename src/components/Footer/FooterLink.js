import React from 'react'

export default function FooterLink(props) {
  const { 
    id,
    blockId,
    text,
    linkURL,
    handleDeleteLink,
    handleLinkInputChange,
  } = props;

  return (
    <div>
      <label>Link Name</label>
      <input 
          type="text"
          name="linkName" 
          defaultValue={text}
          onChange={e => handleLinkInputChange(blockId, id, "text", e.target.value)}
      />
      <label>Link Url</label>
      <input 
          type="text"
          name="linkName" 
          defaultValue={linkURL}
          onChange={e => handleLinkInputChange(blockId, id, "linkURL", e.target.value)}
      />
      <button onClick={() => handleDeleteLink(blockId, id)}>Delete Link</button>
    </div>
  )
}
