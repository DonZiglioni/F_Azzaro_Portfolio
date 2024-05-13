import React from 'react';
import '../styles/MagicDot.css';


function MagicDot({ color }) {
    const dot = document.getElementById('#dot');

    return (
        <div id='dot' className='dot' style={{ backgroundColor: `#159753` }}>

        </div>
    )
}

export default MagicDot