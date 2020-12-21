import {useRef} from 'react';
import {useDoubleClick} from 'use-double-click';

const Button = () =>{
    const buttonRef = useRef();

    useDoubleClick({
        onSingleClick : e => console.log(e, 'single click'),
        onDoubleClick : e => console.log(e, 'double click'),
        ref : buttonRef,
        latency : 250
    });

    return (<button ref={buttonRef}>Click Me</button>)
}

export default Button