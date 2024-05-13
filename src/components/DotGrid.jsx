import React from 'react';
import MagicDot from './MagicDot';

function DotGrid() {

    let dotArray = [];

    for (let i = 0; i < 400; i++) {
        dotArray.push(i)
    }

    return (
        <div
            className='dot-grid'
            style={{
                height: '420px',
                width: '420px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            }}
        >
            {
                dotArray.map((dot, index) => {
                    return (
                        <div className='dot' key={index}>
                            <MagicDot />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DotGrid