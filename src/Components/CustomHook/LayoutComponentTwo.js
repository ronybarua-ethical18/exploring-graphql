import React from 'react';
import useWindowWidth from './useWindowWidth'
const LayoutComponentTwo = () => {
    const onSmallScreen = useWindowWidth(768)
    return (
        <div className={onSmallScreen ? 'small' : 'large'}>
            <h1>The design will be applied based on class name</h1>
        </div>
    );
};

export default LayoutComponentTwo;