import React, { useState, useEffect, useRef } from 'react';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';
import '../styles/ThemeSwitch.css';

function ThemeSwitch({ theme }) {

    return (
        <div className={theme ? 'switch' : 'switch2'}>
            {
                theme ?
                    <div className='lightSwitch'>
                        <img src={sun} className='sun' />
                    </div>
                    :
                    <div className='darkSwitch'>
                        <img src={moon} className='moon' />
                    </div>
            }


            {/* 
            <div className='line'></div> */}


        </div>
    )
};

export default ThemeSwitch;