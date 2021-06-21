import React from 'react';
import useWindowWidth from './useWindowWidth';

const LayoutComponentOne = () => {
    const onSmallScreen = useWindowWidth(596)
    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'small': 'large'}</h1>
        </div>
    );
};

export default LayoutComponentOne;