import React from 'react';
import { useEffect, useRef } from 'react';
import Input from './Input'
const Form = () => {
    const inputRef = useRef() 
    useEffect(() =>{
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <Input ref={inputRef} type="text" placeholder="Enter Something"></Input>
        </div>
    );
};

export default Form;