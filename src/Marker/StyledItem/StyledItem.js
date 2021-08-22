import React, { useState } from 'react';
const StyledItem = ({text, value}) => {

    const [color, setColor] = useState("none");
    return (
        <li className="Marker" dangerouslySetInnerHTML={{__html: text.replaceAll(value, `<span class="marker">${value}</span>`)}}>
        </li>
    );
};

// first name, fi => ['', 'rst name'] => `<span class="marker">fi</span>rst name`

export default StyledItem;