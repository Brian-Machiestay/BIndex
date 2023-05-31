import React from "react";


function Healthy (props) {

    return (
        <div className= { props.name }>
            <div>{ props.icon } </div>
            <p> { props.text }</p>
        </div>
    )
}

export default Healthy;
