import React from 'react';

const ButtonComponent = ({handleClick, children}) => {
    console.log(`rendering button ${children}`);
    return (
        <div>
            <button onClick={handleClick} type="button">{children}</button>
        </div>
    );
};

export default React.memo(ButtonComponent);