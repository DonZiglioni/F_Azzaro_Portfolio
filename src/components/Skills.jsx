import React from 'react';
import { Breakpoint } from 'react-socks';
import NavBar from './NavBar.jsx';
import NavBarLg from './NavBarLg.jsx';
import Menu from './Menu.jsx';
import '../styles/Skills.css';
import skills from '../assets/skills.svg';
import skills2 from '../assets/skills2.svg';
import skillsDark from '../assets/skills-dark.svg';
import skillsLight from '../assets/skills2-light.svg';
import InfoBox from './InfoBox.jsx';
import SkillBox from './SkillBox.jsx';
import html from '../assets/logos/html-1.svg'
import js from '../assets/logos/logo-javascript.svg'
import css from '../assets/logos/css-3.svg'
import react from '../assets/logos/react-2.svg'
import reactNative from '../assets/logos/react-native-1.svg'
import node from '../assets/logos/nodejs-icon.svg'
import python from '../assets/logos/python-4.svg'
import sql from '../assets/logos/mysql-logo.svg'
import mongo from '../assets/logos/mongodb-icon-2.svg'
import git from '../assets/logos/git.svg'
import linux from '../assets/logos/linux-tux.svg'
import typescript from '../assets/logos/typescript.svg'
import ae from '../assets/logos/AfterEffects.svg'
import ps from '../assets/logos/photoshop.svg'
import ill from '../assets/logos/Illustrator.svg'
import blender from '../assets/logos/Blender.svg'
import figma from '../assets/logos/Figma.svg'
import tailwind from '../assets/logos/tailwindcss.svg'
import DotGrid from './DotGrid';

function Skills({ changeTheme, theme, openMenu, menu }) {

    const softwareSkills = [
        {
            "skill": 'React.js',
            "image": react,
        },

        {
            "skill": 'JavaScript',
            "image": js,
        },
        {
            "skill": 'React Native',
            "image": reactNative,
        },
        {
            "skill": 'TypeScript',
            "image": typescript,
        },
        {
            "skill": 'HTML',
            "image": html,
        },
        {
            "skill": 'CSS',
            "image": css,
        },

        {
            "skill": 'Python',
            "image": python,
        },
        {
            "skill": 'Linux/Unix',
            "image": linux,
        },
        {
            "skill": 'Node.js',
            "image": node,
        },
        {
            "skill": 'SQL/NoSQL',
            "image": sql,
        },
        {
            "skill": 'Mongo',
            "image": mongo,
        },
        {
            "skill": 'Git',
            "image": git,
        },
    ]

    const designSkills = [
        {
            "skill": 'Photoshop',
            "image": ps,
        },
        {
            "skill": 'AfterEffects',
            "image": ae,
        },

        {
            "skill": 'Blender3D',
            "image": blender,
        },
        {
            "skill": 'Figma',
            "image": figma,
        },
        {
            "skill": 'Illustrator',
            "image": ill,
        },
        {
            "skill": 'Tailwind',
            "image": tailwind,
        },
    ]
    return (
        <>
            <Breakpoint small down>
                <div className={theme ? 'skills' : 'skills-dark'}>
                    <NavBar changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }
                    {
                        theme ?
                            <div className='skillset'>
                                <div className='section-header'>
                                    <h1 className='title'>Skillset</h1>
                                    <img src={skillsLight} style={{ height: '30px', marginTop: '23px' }} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='section-header'>
                                    <h1 className='title'>Software Development</h1>
                                </div>
                                <div className='skills-section'>
                                    {softwareSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                                <div className='section-header'>
                                    <h1 className='title'>Design</h1>
                                </div>
                                <div className='skills-section'>
                                    {designSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>

                            </div>
                            :
                            <div className='skillset'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Skillset</h1>
                                    <img src={skillsDark} style={{ height: '30px', marginTop: '23px' }} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Software Development</h1>
                                </div>
                                <div className='skills-section'>
                                    {softwareSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Design</h1>
                                </div>
                                <div className='skills-section'>
                                    {designSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                            </div>
                    }
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className={theme ? 'skills' : 'skills-dark'}>
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
                            <div className='skillset'>
                                <div className='section-header'>
                                    <h1 className='title'>Skillset</h1>
                                    <img src={skillsLight} style={{ height: '30px', marginTop: '23px' }} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='section-header'>
                                    <h1 className='title'>Software Development</h1>
                                </div>
                                <div className='skills-section-lg'>
                                    {softwareSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                                <div className='section-header'>
                                    <h1 className='title'>Design</h1>
                                </div>
                                <div className='skills-section-lg'>
                                    {designSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>

                            </div>
                            :
                            <div className='skillset'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Skillset</h1>
                                    <img src={skillsDark} style={{ height: '30px', marginTop: '23px' }} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Software Development</h1>
                                </div>
                                <div className='skills-section-lg'>
                                    {softwareSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Design</h1>
                                </div>
                                <div className='skills-section-lg'>
                                    {designSkills.map((skill, index) => {
                                        return <SkillBox key={index} title={skill.skill} img={skill.image} theme={theme} />
                                    })}
                                </div>
                            </div>
                    }
                </div>
            </Breakpoint>

        </>
    )
}

export default Skills