import React, { useContext } from 'react'
import { HeaderContext } from '../Header';

export default function HeaderHide() {
  const { handlePostHeaderData } = useContext(HeaderContext);
  return (
    <>
      <div className='settings__hidden-text'>Header is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostHeaderData(dataTobeSent);
      }}>
        Post Header Data
      </button>
    </>
  )
}