import React from 'react';
import '../styles/ProjectBox.css';

function ProjectBox({ title, img, info, theme }) {
    return (
        <>
            {
                theme ?
                    <div className='project-box'>
                        <span className='project-title'>{title}</span>

                        <img className='project-img' src={img} />
                        <span className='project-info'>{info}</span>

                    </div>
                    :
                    <div className='project-box-dark'>
                        <span className='project-title-dark'>{title}</span>

                        <img className='project-img-dark' src={img} />
                        <span className='project-info-dark'>{info}</span>

                    </div>
            }

        </>
    )
}

export default ProjectBox