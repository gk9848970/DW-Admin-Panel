import React from 'react'

export default function Navlink(props) {
    const {
        id,
        text,
        linkURL,
        handleDeleteNavlink,
        handleNavlinkChange,
    } = props;

    return (
        <div className="navlink">
            <label>Link Name</label>
            <input 
                type="text"
                name="linkName" 
                defaultValue={text}
                onChange={e => handleNavlinkChange(id, "text", e.target.value)}
            />

            <label>Link URL</label>
            <input 
                type="text" 
                name="linkURL" 
                defaultValue={linkURL}
                onChange={e => handleNavlinkChange(id, "linkURL", e.target.value)}
            />

            <button onClick={() => handleDeleteNavlink(id)}>Delete Link</button>
        </div>
    )
}
