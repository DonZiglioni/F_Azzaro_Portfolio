import React from 'react';
import '../styles/InfoBox.css';

function InfoBox({ title, subtitle, info, theme }) {
    return (
        <>
            {
                theme ?
                    <div className='info-box'>
                        <div className='section'>
                            <p className='info-title'>{title}</p>
                        </div>
                        <div className='section2'>
                            <p className='info-subtitle'>{subtitle}</p>
                        </div>
                        <div className='section3'>
                            <p className='info-info'>{info}</p>
                        </div>
                    </div>
                    :
                    <div className='info-box-dark'>
                        <div className='section'>
                            <p className='info-title'>{title}</p>
                        </div>
                        <div className='section2'>
                            <p className='info-subtitle'>{subtitle}</p>
                        </div>
                        <div className='section3'>
                            <p className='info-info'>{info}</p>
                        </div>
                    </div>

            }

        </>
    )
}

export default InfoBox