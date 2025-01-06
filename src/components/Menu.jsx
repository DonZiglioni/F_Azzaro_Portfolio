import React from 'react';
import '../styles/Menu.css';
import close from '../assets/close.svg';
import closeDark from '../assets/close-dark.svg';
import { useNavigate, useNavigation } from 'react-router-dom';

function Menu({ theme, openMenu }) {
    const navigate = useNavigate();
    return (
        <>
            {
                theme ?
                    <div className='popup-menu'>
                        <img src={close} className='close-btn' onClick={() => openMenu()} />
                        <div className='nav-links'>
                            <p className='nav-link' onClick={() => {
                                openMenu();
                                navigate('/');
                            }
                            } > About</p>
                            <p className='nav-link' onClick={() => {
                                openMenu();
                                navigate('/career');
                            }}>Career</p>
                            <p className='nav-link' onClick={() => {
                                openMenu();
                                navigate('/skillset');
                            }}>Skillset</p>
                            {/* <p className='nav-link' onClick={() => {
                                openMenu();
                                navigate('/projects');
                            }}>Projects</p> */}
                            <p className='nav-link' onClick={() => {
                                openMenu();
                                navigate('/writing');
                            }}>Writing</p>
                        </div>
                    </div>
                    :
                    <div className='popup-menu-dark'>
                        <img src={closeDark} className='close-btn' onClick={() => openMenu()} />
                        <div className='nav-links-dark'>
                            <p className='nav-link-dark' onClick={() => {
                                openMenu();
                                navigate('/');
                            }
                            } > About</p>
                            <p className='nav-link-dark' onClick={() => {
                                openMenu();
                                navigate('/career');
                            }}>Career</p>
                            <p className='nav-link-dark' onClick={() => {
                                openMenu();
                                navigate('/skillset');
                            }}>Skillset</p>
                            {/* <p className='nav-link-dark' onClick={() => {
                                openMenu();
                                navigate('/projects');
                            }}>Projects</p> */}
                            <p className='nav-link-dark' onClick={() => {
                                openMenu();
                                navigate('/writing');
                            }}>Writing</p>
                        </div>
                    </div >
            }
        </>
    )
}

export default Menu