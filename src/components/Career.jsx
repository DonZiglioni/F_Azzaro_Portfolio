import React from 'react';
import { Breakpoint } from 'react-socks';
import Menu from './Menu.jsx';
import NavBar from './NavBar';
import NavBarLg from './NavBarLg.jsx';
import '../styles/Career.css';
import file from '../assets/file-text.svg';
import file2 from '../assets/file-text2.svg';
import download from '../assets/download.svg';
import download2 from '../assets/download-dark.svg';
import InfoBox from './InfoBox.jsx';
import DotGrid from './DotGrid';
import FAResume from '../assets/Frank_Azzaro_Resume.pdf';

function Career({ changeTheme, theme, openMenu, menu }) {
    return (
        <>
            <Breakpoint small down>
                <div className={theme ? 'career' : 'career-dark'}>
                    <NavBar changeTheme={changeTheme} theme={theme} openMenu={openMenu} />
                    {
                        menu ? <Menu theme={theme} openMenu={openMenu} /> : null
                    }
                    {
                        theme ?
                            <div className='resume'>
                                <div className='section-header'>
                                    <h1 className='title'>Career</h1>
                                    <img src={file} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='horizontal'>
                                    <span className='text'>Download Resume: </span>
                                    <a href={FAResume} download='Frank_Azzaro_Resume.pdf' target='_blank'><img src={download} className='download-link' /></a>
                                </div>
                                <div className='section-header'>
                                    <h1 className='title'>Employment</h1>
                                </div>
                                <div className='resume-section'>
                                    <InfoBox
                                        title={'Wal*Mart'}
                                        subtitle={'Field Support Specialist IV'}
                                        info={`
                                    Strengthened my expertise in IT by managing the access of over 2.3 million
                                    employee’s using Active Directory, while ensuring our security protocols are
                                    properly explained and implemented by employees every day
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'The Conflux'}
                                        subtitle={'Audio Engineer & Songwriter'}
                                        info={`
                                    Successfully operated sessions in several professional recording studios, 
                                    while mixing and mastering thousands of songs, voiceovers, and post-production
                                    projects for both independent and large corporate clients
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'KeyBank'}
                                        subtitle={'Licensed Relationship Manager'}
                                        info={`
                                    Expanded my knowledge of the financial industry while being a trustworthy
                                    and reliable investment representative, helping to improve every client’s 
                                    overall financial wellness
                                    `}
                                        theme={theme}
                                    />
                                    <div className='section-header'>
                                        <h1 className='title'>Education</h1>
                                    </div>
                                    <InfoBox
                                        title={'Springboard'}
                                        subtitle={'2023-2024'}
                                        info={`Software Development Degree`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'CRAS'}
                                        subtitle={'Graduated 06/2006'}
                                        info={`Master of Recording Arts and Sciences`}
                                        theme={theme} />
                                    <div className='section-header'>
                                        <h1 className='title'>Certifications</h1>
                                    </div>
                                    <InfoBox
                                        title={'IBM (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Full Stack Developer Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Cyber Security Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Stanford (Coursera)'}
                                        subtitle={'2024'}
                                        info={`Machine Learning Specialization Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2024'}
                                        info={`IT Support Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2023'}
                                        info={`Practical Ethical Hacking Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Bug Bounty Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Guide to IOT and Hardware Hacking Certificate`}
                                        theme={theme} />
                                </div>
                            </div>
                            :
                            <div className='resume'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Career</h1>
                                    <img src={file2} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='horizontal'>
                                    <span className='text-dark'>Download Resume: </span>
                                    <a href={FAResume} download='Frank_Azzaro_Resume.pdf' target='_blank'><img src={download2} className='download-link' /></a>
                                </div>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Employment</h1>
                                </div>
                                <div className='resume-section'>
                                    <InfoBox
                                        title={'Wal*Mart'}
                                        subtitle={'Field Support Specialist IV'}
                                        info={`
                                    Strengthened my expertise in IT by managing the access of over 2.3 million
                                    employee’s using Active Directory, while ensuring our security protocols are
                                    properly explained and implemented by employees every day
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'The Conflux'}
                                        subtitle={'Audio Engineer & Songwriter'}
                                        info={`
                                    Successfully operated sessions in several professional recording studios, 
                                    while mixing and mastering thousands of songs, voiceovers, and post-production 
                                    projects for both independent and large corporate clients
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'KeyBank'}
                                        subtitle={'Licensed Relationship Manager'}
                                        info={`
                                    Expanded my knowledge of the financial industry while being a trustworthy
                                    and reliable investment representative, helping to improve every client’s 
                                    overall financial wellness
                                    `}
                                        theme={theme}
                                    />
                                    <div className='section-header'>
                                        <h1 className='title-dark'>Education</h1>
                                    </div>
                                    <InfoBox
                                        title={'Springboard'}
                                        subtitle={'2023-2024'}
                                        info={`Software Development Degree`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'CRAS'}
                                        subtitle={'Graduated 06/2006'}
                                        info={`Master of Recording Arts and Sciences`}
                                        theme={theme} />
                                    <div className='section-header'>
                                        <h1 className='title-dark'>Certifications</h1>
                                    </div>
                                    <InfoBox
                                        title={'IBM (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Full Stack Developer Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Cyber Security Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Stanford (Coursera)'}
                                        subtitle={'2024'}
                                        info={`Machine Learning Specialization Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2024'}
                                        info={`IT Support Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2023'}
                                        info={`Practical Ethical Hacking Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Bug Bounty Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Guide to IOT and Hardware Hacking Certificate`}
                                        theme={theme} />
                                </div>
                            </div>
                    }
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className={theme ? 'career' : 'career-dark'}>
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
                            <div className='resume'>
                                <div className='section-header'>
                                    <h1 className='title'>Career</h1>
                                    <img src={file} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='horizontal'>
                                    <span className='text'>Download Resume: </span>
                                    <a href={FAResume} download='Frank_Azzaro_Resume.pdf' target='_blank'><img src={download} className='download-link' /></a>
                                </div>
                                <div className='section-header'>
                                    <h1 className='title'>Employment</h1>
                                </div>
                                <div className='resume-section'>
                                    <InfoBox
                                        title={'Wal*Mart'}
                                        subtitle={'Field Support Specialist IV'}
                                        info={`
                                    Strengthened my expertise in IT by managing the access of over 2.3 million
                                    employee’s using Active Directory, while ensuring our security protocols are
                                    properly explained and implemented by employees every day
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'The Conflux'}
                                        subtitle={'Audio Engineer & Songwriter'}
                                        info={`
                                    Successfully operated sessions in several professional recording studios, 
                                    while mixing and mastering thousands of songs, voiceovers, and post-production
                                    projects for both independent and large corporate clients
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'KeyBank'}
                                        subtitle={'Licensed Relationship Manager'}
                                        info={`
                                    Expanded my knowledge of the financial industry while being a trustworthy
                                    and reliable investment representative, helping to improve every client’s 
                                    overall financial wellness
                                    `}
                                        theme={theme}
                                    />
                                    <div className='section-header'>
                                        <h1 className='title'>Education</h1>
                                    </div>
                                    <InfoBox
                                        title={'Springboard'}
                                        subtitle={'2023-2024'}
                                        info={`Software Development Degree`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'CRAS'}
                                        subtitle={'Graduated 06/2006'}
                                        info={`Master of Recording Arts and Sciences`}
                                        theme={theme} />
                                    <div className='section-header'>
                                        <h1 className='title'>Certifications</h1>
                                    </div>
                                    <InfoBox
                                        title={'IBM (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Full Stack Developer Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Cyber Security Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Stanford (Coursera)'}
                                        subtitle={'2024'}
                                        info={`Machine Learning Specialization Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2024'}
                                        info={`IT Support Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2023'}
                                        info={`Practical Ethical Hacking Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Bug Bounty Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Guide to IOT and Hardware Hacking Certificate`}
                                        theme={theme} />
                                </div>
                            </div>
                            :
                            <div className='resume'>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Career</h1>
                                    <img src={file2} />
                                </div>
                                <hr className='ruler'></hr>
                                <div className='horizontal'>
                                    <span className='text-dark'>Download Resume: </span>
                                    <a href={FAResume} download='Frank_Azzaro_Resume.pdf' target='_blank'><img src={download2} className='download-link' /></a>
                                </div>
                                <div className='section-header'>
                                    <h1 className='title-dark'>Employment</h1>
                                </div>
                                <div className='resume-section'>
                                    <InfoBox
                                        title={'Wal*Mart'}
                                        subtitle={'Field Support Specialist IV'}
                                        info={`
                                    Strengthened my expertise in IT by managing the access of over 2.3 million
                                    employee’s using Active Directory, while ensuring our security protocols are
                                    properly explained and implemented by employees every day
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'The Conflux'}
                                        subtitle={'Audio Engineer & Songwriter'}
                                        info={`
                                    Successfully operated sessions in several professional recording studios, 
                                    while mixing and mastering thousands of songs, voiceovers, and post-production 
                                    projects for both independent and large corporate clients
                                    `}
                                        theme={theme}
                                    />
                                    <InfoBox
                                        title={'KeyBank'}
                                        subtitle={'Licensed Relationship Manager'}
                                        info={`
                                    Expanded my knowledge of the financial industry while being a trustworthy
                                    and reliable investment representative, helping to improve every client’s 
                                    overall financial wellness
                                    `}
                                        theme={theme}
                                    />
                                    <div className='section-header'>
                                        <h1 className='title-dark'>Education</h1>
                                    </div>
                                    <InfoBox
                                        title={'Springboard'}
                                        subtitle={'2023-2024'}
                                        info={`Software Development Degree`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'CRAS'}
                                        subtitle={'Graduated 06/2006'}
                                        info={`Master of Recording Arts and Sciences`}
                                        theme={theme} />
                                    <div className='section-header'>
                                        <h1 className='title-dark'>Certifications</h1>
                                    </div>
                                    <InfoBox
                                        title={'IBM (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Full Stack Developer Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2023'}
                                        info={`Cyber Security Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Stanford (Coursera)'}
                                        subtitle={'2024'}
                                        info={`Machine Learning Specialization Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'Google (Coursera)'}
                                        subtitle={'2024'}
                                        info={`IT Support Professional Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2023'}
                                        info={`Practical Ethical Hacking Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Bug Bounty Certificate`}
                                        theme={theme} />
                                    <InfoBox
                                        title={'TCM Security'}
                                        subtitle={'2024'}
                                        info={`Practical Guide to IOT and Hardware Hacking Certificate`}
                                        theme={theme} />
                                </div>
                            </div>
                    }
                </div>
            </Breakpoint>
        </>
    )
}

export default Career