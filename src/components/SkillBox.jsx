import React from 'react';
import '../styles/SkillBox.css';

function SkillBox({ title, img, info, theme }) {
    return (
        <>
            {
                theme ?
                    <div className='skill-box'>
                        {/* <span className='skill-title'>{title}</span> */}
                        <img className='skill-img' src={img} />
                    </div>
                    :
                    <div className='skill-box-dark'>
                        {/* <span className='skill-title'>{title}</span> */}
                        <img className='skill-img' src={img} />
                    </div>
            }
        </>
    )
}

export default SkillBox