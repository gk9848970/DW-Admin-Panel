import React, { useContext } from 'react'
import { FormContext } from '../Form';

export default function FormHide() {
  const { handlePostFormData } = useContext(FormContext);
  return (
    <>
      <div className='settings__hidden-text'>Form is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostFormData(dataTobeSent);
      }}>
        Post Form Data
      </button>
    </>
  )
}