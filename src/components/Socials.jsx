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
                        <img src={gitHub} className='social-link' />
                        <img src={email} className='social-link' />
                        <img src={resume} className='social-link' />
                        <img src={linkedin} className='social-link' />
                        <img src={youtube} className='social-link' />
                    </div>
                    :
                    <div className='social-box-dark'>
                        <img src={gitHub2} className='social-link' />
                        <img src={email2} className='social-link' />
                        <img src={resume2} className='social-link' />
                        <img src={linkedin2} className='social-link' />
                        <img src={youtube2} className='social-link' />
                    </div>
            }

        </>
    )
}

export default Socials