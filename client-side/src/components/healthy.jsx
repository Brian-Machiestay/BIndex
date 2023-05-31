import React from "react";


function Healthy (props) {

    return (
        <div className= {`${ props.name } tips`}>
            <div className={`icon ${props.iconName}`}>{ props.icon } </div>
            <div className="sub-items">
                <p className="tip-title"> { props.title }</p>
                <p> { props.text }</p>
            </div>
        </div>
    )
}

export default Healthy;
