import React from 'react';
import NavBar from './NavBar';
import '../styles/Home.css';
import { Breakpoint } from 'react-socks';
import ThemeSwitch from './ThemeSwitch';
import LogoWhite from '../assets/logo-white.png';
import LogoBlack from '../assets/logo.png';
import Socials from './Socials';
import Menu from './Menu';
import NavBarLg from './NavBarLg';
import DotGrid from './DotGrid';

function Home({ changeTheme, theme, openMenu, menu }) {
    return (
        <>
            <Breakpoint small down>
                <div className={theme ? 'home' : 'home-dark'}>
                    <NavBar changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }

                    {
                        theme ?
                            <div className='container'>
                                <img src={LogoBlack} className='logo-real' />
                                <p className='heading-dark'>
                                    I am a <b>Software Engineer, Developer, Audio Engineer,</b> and <b>Creator</b> who is passionate about Cyber Security, Computer Science, and Technology.
                                </p>

                                <p className='heading-dark'>
                                    I am <b>determined</b> to utilize my knowledge and expertise in <b>business, science, and engineering</b> to play a vital role in <b>evolving our future</b>.
                                </p>
                                <Socials theme={theme} />
                                <p className='copyright'>Created by Frank Azzaro ©2024</p>
                            </div>
                            :
                            <div className='container'>
                                <img src={LogoWhite} className='logo-real' />
                                <p className='heading'>
                                    I am a <b>Software Engineer, Developer, Audio Engineer,</b> and <b>Creator</b> who is passionate about Cyber Security, Computer Science, and Technology.
                                </p>

                                <p className='heading'>
                                    I am <b>determined</b> to utilize my knowledge and expertise in <b>business, science, and engineering</b> to play a vital role in <b>evolving our future</b>.
                                </p>
                                <Socials theme={theme} />
                                <p className='copyright-dark'>Created by Frank Azzaro ©2024</p>
                            </div>
                    }

                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className={theme ? 'home' : 'home-dark'}>
                    <NavBarLg changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    <div className='grid-left'>
                        <DotGrid />
                    </div>
                    <div className='grid-right'>
                        <DotGrid />
                    </div>
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }

                    {
                        theme ?
                            <div className='container'>
                                <img src={LogoBlack} className='logo-real' />
                                <p className='heading-dark'>
                                    I am a <b>Software Engineer, Developer, Audio Engineer,</b> and <b>Creator</b> who is passionate about Cyber Security, Computer Science, and Technology.
                                </p>

                                <p className='heading-dark'>
                                    I am <b>determined</b> to utilize my knowledge and expertise in <b>business, science, and engineering</b> to play a vital role in <b>evolving our future</b>.
                                </p>
                                <Socials theme={theme} />
                                <p className='copyright'>Created by Frank Azzaro ©2024</p>
                            </div>
                            :
                            <div className='container'>
                                <img src={LogoWhite} className='logo-real' />
                                <p className='heading'>
                                    I am a <b>Software Engineer, Developer, Audio Engineer,</b> and <b>Creator</b> who is passionate about Cyber Security, Computer Science, and Technology.
                                </p>

                                <p className='heading'>
                                    I am <b>determined</b> to utilize my knowledge and expertise in <b>business, science, and engineering</b> to play a vital role in <b>evolving our future</b>.
                                </p>
                                <Socials theme={theme} />
                                <p className='copyright-dark'>Created by Frank Azzaro ©2024</p>
                            </div>
                    }

                </div>
            </Breakpoint>
        </>
    )
}

export default Home