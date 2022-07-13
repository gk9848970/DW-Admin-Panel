import React from 'react'
import svgAdd from '../../assets/add.svg'
import svgDelete from '../../assets/delete.svg'

export default function FooterLink(props) {
  const { 
    id,
    blockId,
    text,
    linkURL,
    handleDeleteLink,
    handleLinkInputChange,
    handleAddLink,
  } = props;

  return (
    <div className="input__two-block-layout mb-1x-input-gap">
      <div className="input__container">
        <input
            className='input__container-input'
            type="text"
            name="linkName" 
            defaultValue={text}
            onChange={e => handleLinkInputChange(blockId, id, "text", e.target.value)}
        />
        {   
            text === "" ? 
            <label className='input__container-label'>Link Name</label> : 
            <label className='input__container-label input__container-label--up'>Link Name</label>
        }
      </div>

      <div className="input__container">
        <input
            className='input__container-input' 
            type="text"
            name="linkName" 
            defaultValue={linkURL}
            onChange={e => handleLinkInputChange(blockId, id, "linkURL", e.target.value)}
        />
        {   
            linkURL === "" ? 
            <label className='input__container-label'>Link URL</label> : 
            <label className='input__container-label input__container-label--up'>Link URL</label>
        }
      </div>

      <div className='input__add-delete-button-container'>
          <button className='input__add-button' onClick={() => handleAddLink(blockId, id)}>
              <img src={svgAdd} alt="Add Link" />
          </button>
          <button className='input__delete-button' onClick={() => handleDeleteLink(blockId, id)}>
              <img src={svgDelete} alt="Delete Link" />    
          </button>
      </div>
      
    </div>
  )
}
