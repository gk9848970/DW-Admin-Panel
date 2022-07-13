import React, { useContext } from 'react'
import { FooterContext } from '../Footer';

export default function FooterHide() {
  const { handlePostFooterData } = useContext(FooterContext);
  return (
    <>
      <div className='settings__hidden-text'>Footer is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostFooterData(dataTobeSent);
      }}>
        Post Footer Data
      </button>
    </>
  )
}