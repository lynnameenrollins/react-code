import React from 'react';

function ChildComponent(props) {
    const data = "from child to parent";

    return (
        <div>
            <h1>{props.data}</h1>
            {/* <button onClick={() => props.toParent(data)}> Click Child</button> */}
        </div>
    );
}

export default ChildComponent;