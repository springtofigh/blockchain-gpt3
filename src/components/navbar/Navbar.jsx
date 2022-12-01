import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo.svg';
import { RiMenu2Line, RiCloseLine } from 'react-icons/ri';


const Menu = () => (
  <>
          <p><a href="#home">خانه</a></p>
          <p><a href="#wgpt3">درباره پروژه</a></p>
          <p><a href="#possibility">پروژه Open AI</a></p>
          <p><a href="#features">چشم انداز</a></p>
          <p><a href="#blog">مقالات</a></p>
  </>
)

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3-navbar'>
      <div className='gpt3-navbar-links'>
        <div className="gpt3-navbar-logo">
          <img src={Logo} alt="" />
        </div>
        <div className='gpt3-navbar-links-container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3-navbar-sign'>
        <p>ورود</p>
        <button type='button'>ثبت نام</button>
      </div>
      <div className='gpt3-navbar-menu'>
        {
          toggleMenu ?
          <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} /> :
          <RiMenu2Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {
          toggleMenu && (
            <div className='gpt3-navbar-menu-container scale-up-center'>
              <div className='gpt3-navbar-menu-container-links'>
              <Menu/>
              <div className='gpt3-navbar-menu-container-links-sign'>
                <p>ورود</p>
                <button type='button'>ثبت نام</button>
              </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Header;