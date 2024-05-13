import { Breakpoint } from 'react-socks';
const Example = () => {
    return (


        <div>
            <Breakpoint small down>
                <div>I will render only in mobile devices</div>
            </Breakpoint>

            <Breakpoint medium only>
                <div>I will render only in tablets (iPad, etc...)</div>
            </Breakpoint>

            <Breakpoint medium down>
                <div>I will render in tablets (iPad, etc...) and everything below (mobile devices)</div>
            </Breakpoint>

            <Breakpoint medium up>
                <div>I will render in tablets (iPad, etc...) and everything above (laptops, desktops)</div>
            </Breakpoint>

            <Breakpoint large up>
                <div>I will render in laptops, desktops and everything above</div>
            </Breakpoint>

            {/* Add breakpoints on the fly using custom queries */}

            <Breakpoint customQuery="(min-width: 500px)">
                <div style={{ backgroundColor: 'red' }}>
                    Custom breakpoint: (min-width : 500px)
                </div>
            </Breakpoint>

            <Breakpoint customQuery="(max-width: 1000px)">
                <div style={{ backgroundColor: 'yellow' }}>
                    Custom breakpoint: (max-width : 1000px)
                </div>
            </Breakpoint>

            <Breakpoint customQuery="(min-width: 500px) and (max-width: 700px)">
                <div style={{ backgroundColor: 'lightblue' }}>
                    Custom breakpoint: (min-width : 500px) && (max-width : 700px)
                </div>
            </Breakpoint>
        </div>

    );
};

export default Example;