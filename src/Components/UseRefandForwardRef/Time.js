import React from 'react';
import { useEffect, useRef } from 'react';
import { useState } from 'react';

const Time = () => {
    const [date, setDate] = useState(new Date())
    const buttonRef = useRef()

    const tick = () =>{
        setDate(new Date())
    }
    useEffect(() =>{
        buttonRef.current = setInterval(tick, 1000)

        return () => {
            
        }
    }, [])

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p><button type="button" onClick={() => clearInterval( buttonRef.current)}>Cleanup</button></p>
        </div>
    );
};

export default Time