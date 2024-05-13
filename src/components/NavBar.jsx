import React, { useState } from 'react';
import menu from '../assets/square-menu.svg';
import menu2 from '../assets/menu2.svg';
import logo3 from '../assets/FALogo3.png';
import logo4 from '../assets/FALogo5.png';
import ThemeSwitch from './ThemeSwitch.jsx'
import '../styles/NavBar.css';

function NavBar({ changeTheme, theme, openMenu }) {

    return (
        <div className={theme ? 'nav' : 'nav-dark'}>
            {
                theme ?
                    <>
                        <img src={menu} className='menu' onClick={() => openMenu()} />
                        <img src={logo3} className='logo' />
                        <div onClick={() => changeTheme()}>
                            <ThemeSwitch theme={theme} />
                        </div>
                    </>
                    :
                    <>
                        <img src={menu2} className='menu2' onClick={() => openMenu()} />
                        <img src={logo4} className='logo2' />
                        <div onClick={() => changeTheme()}>
                            <ThemeSwitch theme={theme} />
                        </div>
                    </>
            }


        </div>
    )
};

export default NavBar;