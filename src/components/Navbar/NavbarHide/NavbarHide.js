import React, { useContext } from 'react'
import { NavbarContext } from '../Navbar';

export default function NavbarHide() {
  const { handlePostNavbarData } = useContext(NavbarContext);
  return (
    <>
      <div className='settings__hidden-text'>Navbar is Choosen to be hidden</div>
      <button
          className='btn btn--purple'
          onClick={() => {
            const dataTobeSent = {};
            handlePostNavbarData(dataTobeSent);
      }}>
        Post Navbar Data
      </button>
    </>
  )
}