import React, { useContext } from 'react'
import { BrandContext } from '../Brand';

export default function BrandHide() {
  const { handlePostBrandData } = useContext(BrandContext);
  return (
    <>
      <div className='settings__hidden-text'>Brand is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostBrandData(dataTobeSent);
      }}>
        Post Brand Data
      </button>
    </>
  )
}
