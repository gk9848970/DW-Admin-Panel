import React from 'react'

export default function FooterBlock(props) {
  const {
    id,
    heading,
    // links,
    handleDeleteBlock,
  } = props;

  return (
    <>
      <div>
        <label>Heading</label>
        <input
          type="text" 
          name="linkName" 
          defaultValue={heading}
        />
        <button onClick={() => handleDeleteBlock(id)}>Delete Block</button>
      </div>
    </>
  )
}
