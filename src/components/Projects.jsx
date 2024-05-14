import React from 'react';
import NavBar from './NavBar';
import NavBarLg from './NavBarLg';
import Menu from './Menu';
import ProjectBox from './ProjectBox';
import project from '../assets/proj.svg';
import projectDark from '../assets/projDark.svg';
import apImg from '../assets/screenshotAP.png';
import bodImg from '../assets/screenshotBOD.png';
import github from '../assets/github-icon-1.svg';
import github2 from '../assets/github-icon-2.svg';
import DotGrid from './DotGrid';
import { Breakpoint } from 'react-socks';
import '../styles/Projects.css';

function Projects({ changeTheme, theme, openMenu, menu }) {
    return (
        <>
            <Breakpoint small down>
                <div className={theme ? 'projects' : 'projects-dark'}>
                    <NavBar changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }
                    {
                        theme ?
                            <div className='project-list'>
                                <div className='section-header'>
                                    <h1 className='title'>Projects</h1>
                                    <img src={project} />
                                </div>
                                <hr className='ruler'></hr>
                                <a href='https://www.amaizingpuzzles.com' target='_blank'>
                                    <ProjectBox
                                        title='Amaizing Puzzles'
                                        img={apImg}
                                        info='A jigsaw puzzle company ran entirely by atrificial inteligence!'
                                        theme={theme}
                                    /></a>
                                <a href='https://www.boxofdominoes.com' target='_blank'>
                                    <ProjectBox
                                        title='Box of Dominoes API'
                                        img={bodImg}
                                        info='An API simulating a box of dominoes for everyone to enjoy!'
                                        theme={theme}
                                    /></a>
                                <a href='https://github.com/DonZiglioni' target='_blank'>
                                    <ProjectBox
                                        title='GitHub'
                                        img={github}
                                        info='Links to over 75+ personal projects and repositories'
                                        theme={theme}
                                    /></a>
                            </div>
                            :
                            <div className='project-list-dark'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Projects</h1>
                                    <img src={projectDark} />
                                </div>
                                <hr className='ruler'></hr>
                                <a href='https://www.amaizingpuzzles.com' target='_blank'>
                                    <ProjectBox
                                        title='Amaizing Puzzles'
                                        img={apImg}
                                        info='A jigsaw puzzle company ran entirely by atrificial inteligence!'
                                        theme={theme}
                                    /></a>
                                <a href='https://www.boxofdominoes.com' target='_blank'>
                                    <ProjectBox
                                        title='Box of Dominoes API'
                                        img={bodImg}
                                        info='An API simulating a box of dominoes for everyone to enjoy!'
                                        theme={theme}
                                    /></a>
                                <a href='https://github.com/DonZiglioni' target='_blank'>
                                    <ProjectBox
                                        title='GitHub'
                                        img={github2}
                                        info='Links to over 75+ personal projects and repositories'
                                        theme={theme}
                                    /></a>
                            </div>
                    }
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className={theme ? 'projects' : 'projects-dark'}>
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
                            <div className='project-list-lg'>
                                <div className='section-header'>
                                    <h1 className='title'>Projects</h1>
                                    <img src={project} />
                                </div>
                                <hr className='ruler'></hr>
                                <a href='https://www.amaizingpuzzles.com' target='_blank'>
                                    <ProjectBox
                                        title='Amaizing Puzzles'
                                        img={apImg}
                                        info='A jigsaw puzzle company ran entirely by atrificial inteligence!'
                                        theme={theme}
                                    /></a>
                                <a href='https://www.boxofdominoes.com' target='_blank'>
                                    <ProjectBox
                                        title='Box of Dominoes API'
                                        img={bodImg}
                                        info='An API simulating a box of dominoes for everyone to enjoy!'
                                        theme={theme}
                                    /></a>
                                <a href='https://github.com/DonZiglioni' target='_blank'>
                                    <ProjectBox
                                        title='GitHub'
                                        img={github}
                                        info='Links to over 75+ personal projects and repositories'
                                        theme={theme}
                                    /></a>
                            </div>
                            :
                            <div className='project-list-dark-lg'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Projects</h1>
                                    <img src={projectDark} />
                                </div>
                                <hr className='ruler'></hr>
                                <a href='https://www.amaizingpuzzles.com' target='_blank'>
                                    <ProjectBox
                                        title='Amaizing Puzzles'
                                        img={apImg}
                                        info='A jigsaw puzzle company ran entirely by atrificial inteligence!'
                                        theme={theme}
                                    /></a>
                                <a href='https://www.boxofdominoes.com' target='_blank'>
                                    <ProjectBox
                                        title='Box of Dominoes API'
                                        img={bodImg}
                                        info='An API simulating a box of dominoes for everyone to enjoy!'
                                        theme={theme}
                                    /></a>
                                <a href='https://github.com/DonZiglioni' target='_blank'>
                                    <ProjectBox
                                        title='GitHub'
                                        img={github2}
                                        info='Links to over 75+ personal projects and repositories'
                                        theme={theme}
                                    /></a>
                            </div>
                    }
                </div>
            </Breakpoint>
        </>
    )
}

export default Projects