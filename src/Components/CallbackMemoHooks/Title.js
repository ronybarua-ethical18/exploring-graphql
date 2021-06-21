import React from 'react';

const Title = () => {
    console.log('rendering title component')
    return (
        <div>
            <p>useCallback and useMemo Hooks are Covered</p>
        </div>
    );
};

export default React.memo(Title);