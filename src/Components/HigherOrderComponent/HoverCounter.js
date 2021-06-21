import React from 'react';
import withCounter from './withCounter'
const HoverCounter = (props) => {
    const {count, incrementCount} = props
        return (
            <div>
                <button type="button" onMouseOver={incrementCount}>Hovered {count} time</button>
            </div>
        );
};

export default withCounter(HoverCounter)