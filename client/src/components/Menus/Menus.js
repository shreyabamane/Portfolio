import React from 'react';
import './Menus.css';
import profile from '../../Profile-pic/shreya.jpg';

function Menus() {
  return (
    <>
      <div className='navbar-profile-pic'>
        <img src={profile} alt='profile pic'></img>
      </div>
    </>
  )
}

export default Menus;
