import React from 'react';
import '../styles/Socials.css';
import gitHub from '../assets/github-icon-1.svg';
import email from '../assets/mail.svg';
import resume from '../assets/file-text.svg';
import linkedin from '../assets/logo-linkedin.svg';
import youtube from '../assets/youtube.svg';
import gitHub2 from '../assets/github-icon-2.svg';
import email2 from '../assets/mail2.svg';
import resume2 from '../assets/file-text2.svg';
import linkedin2 from '../assets/logo-linkedin2.svg';
import youtube2 from '../assets/youtube2.svg';


function Socials({ theme }) {

    return (
        <>
            {
                theme ?
                    <div className='social-box'>
                        <a href='https://github.com/DonZiglioni' target='_blank'><img src={gitHub} className='social-link' /></a>
                        <a href='mailto:shift2bass@gmail.com?' target='_blank'><img src={email} className='social-link' /></a>
                        <a href='/career' target='_blank'><img src={resume} className='social-link' /></a>
                        <a href='https://www.linkedin.com/in/frankazzaro/' target='_blank'><img src={linkedin} className='social-link' /></a>
                        <a href='https://www.youtube.com/c/DonZiglioni' target='_blank'><img src={youtube} className='social-link' /></a>
                    </div>
                    :
                    <div className='social-box-dark'>
                        <a href='https://github.com/DonZiglioni' target='_blank'><img src={gitHub2} className='social-link' /></a>
                        <a href='mailto:shift2bass@gmail.com?' target='_blank'><img src={email2} className='social-link' /></a>
                        <a href='/career' target='_blank'><img src={resume2} className='social-link' /></a>
                        <a href='https://www.linkedin.com/in/frankazzaro/' target='_blank'><img src={linkedin2} className='social-link' /></a>
                        <a href='https://www.youtube.com/c/DonZiglioni' target='_blank'><img src={youtube2} className='social-link' /></a>
                    </div>
            }

        </>
    )
}

export default Socials