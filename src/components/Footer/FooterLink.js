import React from 'react'

export default function FooterLink(props) {
  const { 
    id,
    blockId,
    text,
    linkURL,
    handleDeleteLink,
  } = props;

  return (
    <div>
      <label>Link Name</label>
      <input 
          type="text"
          name="linkName" 
          defaultValue={text}
      />
      <label>Link Url</label>
      <input 
          type="text"
          name="linkName" 
          defaultValue={linkURL}
      />
      <button onClick={() => handleDeleteLink(blockId, id)}>Delete Link</button>
    </div>
  )
}
