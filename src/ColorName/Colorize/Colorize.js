import React from 'react';

const Colorize = (prop) => {
    return (
        <div style={{color:prop.children}}>
            {prop.children}
        </div>
    );
};

export default Colorize;