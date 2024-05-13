import React from 'react';
import Menu from './Menu.jsx';
import NavBar from './NavBar';
import NavBarLg from './NavBarLg.jsx';
import pen from '../assets/writing.svg';
import pen2 from '../assets/writing-dark.svg';
import InfoBox from '../components/InfoBox.jsx'
import { Breakpoint } from 'react-socks';
import DotGrid from './DotGrid';
import '../styles/Blog.css';


function Blog({ changeTheme, theme, openMenu, menu }) {
    return (
        <>
            <Breakpoint small down>
                <div className={theme ? 'blog' : 'blog-dark'}>
                    <NavBar changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }
                    {
                        theme ?
                            <div className='writing'>
                                <div className='section-header'>
                                    <h1 className='title'>Writing</h1>
                                    <img src={pen} />
                                </div>
                                <hr className='ruler'></hr>
                                <InfoBox title={'Coming Soon!'} subtitle={'Fall 2024'} info={'To Be Continued...'} />
                            </div>
                            :
                            <div className='writing'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Writing</h1>
                                    <img src={pen2} />
                                </div>
                                <hr className='ruler'></hr>
                                <InfoBox title={'Coming Soon!'} subtitle={'Fall 2024'} info={'To Be Continued...'} />
                            </div>
                    }
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className={theme ? 'blog' : 'blog-dark'}>
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
                            <div className='writing'>
                                <div className='section-header'>
                                    <h1 className='title'>Writing</h1>
                                    <img src={pen} />
                                </div>
                                <hr className='ruler'></hr>
                                <InfoBox title={'Coming Soon!'} subtitle={'Fall 2024'} info={'To Be Continued...'} />
                            </div>
                            :
                            <div className='writing'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Writing</h1>
                                    <img src={pen2} />
                                </div>
                                <hr className='ruler'></hr>
                                <InfoBox title={'Coming Soon!'} subtitle={'Fall 2024'} info={'To Be Continued...'} />
                            </div>
                    }
                </div>
            </Breakpoint>
        </>
    )
}

export default Blog