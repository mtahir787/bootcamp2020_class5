import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = () => {
    return (
        <>
            <Child />
            <hr style={{marginTop: 50}}/>
            <Child2 />
        </>
    )
}

export default Parent;