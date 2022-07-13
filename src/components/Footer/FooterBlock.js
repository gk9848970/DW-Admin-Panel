import React from 'react'
import FooterLink from './FooterLink'

export default function FooterBlock(props) {
  const {
    id,
    heading,
    links,
    handleChangePropertyBlock,
    handleAddBlock,
    handleDeleteBlock,
    handleDeleteLink,
    handleAddLink,
    handleLinkInputChange,
  } = props;

  const linkElements = links.map(link => 
    <FooterLink
      key={link.id} 
      {...link} 
      blockId={id} 
      handleDeleteLink={handleDeleteLink}
      handleLinkInputChange={handleLinkInputChange}
      handleAddLink={handleAddLink}
    />
  )

  return (
    <>
      <div>
        <div className='input__two-block-layout mb-1o5x-input-gap'>

            <div className="input__container">
                <input
                  className='input__container-input'
                  type="text" 
                  name="linkName" 
                  defaultValue={heading}
                  onChange={e => handleChangePropertyBlock(id, "heading", e.target.value)}
                />
                {   
                  heading === "" ? 
                  <label className='input__container-label'>Heading</label> : 
                  <label className='input__container-label input__container-label--up'>Heading</label>
                }
            </div>

          <div className='input__add-delete-button-container'>
            <button className='btn btn--green' onClick={() => handleAddBlock(id)}>Add Block</button>
            <button className='btn btn--red' onClick={() => handleDeleteBlock(id)}>Delete Block</button>
          </div>

        </div>

        <div className='ml-2 mb-2o5x-input-gap'>
          {linkElements}
        </div>

      </div>
    </>
  )
}
