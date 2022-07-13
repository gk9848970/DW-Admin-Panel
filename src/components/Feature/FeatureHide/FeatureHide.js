import React, { useContext } from 'react'
import { FeatureContext } from '../Feature';

export default function FeatureHide() {
  const { handlePostFeatureData } = useContext(FeatureContext);
  return (
    <>
      <div className='settings__hidden-text'>Feature is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostFeatureData(dataTobeSent);
      }}>
        Post Feature Data
      </button>
    </>
  )
}