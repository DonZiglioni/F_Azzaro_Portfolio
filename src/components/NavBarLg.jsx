import React, { useState } from 'react';
import menu from '../assets/square-menu.svg';
import menu2 from '../assets/menu2.svg';
import logo3 from '../assets/FALogo3.png';
import logo4 from '../assets/FALogo5.png';
import ThemeSwitch from './ThemeSwitch.jsx'
import { useNavigate } from 'react-router-dom';
import '../styles/NavBar.css';

function NavBarLg({ changeTheme, theme, openMenu }) {
    const navigate = useNavigate();
    return (
        <div className={theme ? 'nav-lg' : 'nav-dark-lg'}>
            {
                theme ?
                    <>
                        <div className='left-nav'>
                            <img src={logo3} className='logo-lg' />
                            {/* <img src={menu} className='menu' onClick={() => openMenu()} /> */}
                            <a className='lg-link' onClick={() => navigate('/')}>About</a>
                            <a className='lg-link' onClick={() => navigate('/career')}>Career</a>
                            <a className='lg-link' onClick={() => navigate('/skillset')}>Skillset</a>
                            <a className='lg-link' onClick={() => navigate('/projects')}>Projects</a>
                            <a className='lg-link' onClick={() => navigate('/writing')} >Writing</a>
                        </div>
                        <div className='lg-switch' onClick={() => changeTheme()}>
                            <ThemeSwitch theme={theme} />
                        </div>
                    </>
                    :
                    <>
                        <div className='left-nav'>
                            <img src={logo4} className='logo2-lg' />
                            {/* <img src={menu2} className='menu2' onClick={() => openMenu()} /> */}
                            <a className='lg-link-dark' onClick={() => navigate('/')}>About</a>
                            <a className='lg-link-dark' onClick={() => navigate('/career')}>Career</a>
                            <a className='lg-link-dark' onClick={() => navigate('/skillset')}>Skillset</a>
                            <a className='lg-link-dark' onClick={() => navigate('/projects')}>Projects</a>
                            <a className='lg-link-dark' onClick={() => navigate('/writing')} >Writing</a>
                        </div>
                        <div className='lg-switch' onClick={() => changeTheme()}>
                            <ThemeSwitch theme={theme} />
                        </div>
                    </>
            }


        </div>
    )
};

export default NavBarLg;