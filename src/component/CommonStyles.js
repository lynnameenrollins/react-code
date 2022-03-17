import React from 'react';
import {style} from './style';

function CommonStyles(props) {
    return (
    
        <div style = {style.TodoComponent}>
            <h2 style={style.Header}> To Do</h2>
        </div>
    );
}


export default CommonStyles;