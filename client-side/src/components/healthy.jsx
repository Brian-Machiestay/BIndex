import React from "react";


function Healthy (props) {

    return (
        <div className= { props.name }>
            { props.icon }
            { props.text }
        </div>
    )
}

export default Healthy;
