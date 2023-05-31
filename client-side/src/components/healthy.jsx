import React from "react";


function Healthy (props) {

    return (
        <div className= {`${ props.name } tips`}>
            <div className="icon">{ props.icon } </div>
            <p className="tip-title"> { props.title }</p>
            <p> { props.text }</p>
        </div>
    )
}

export default Healthy;
