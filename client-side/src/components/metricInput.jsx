import React from "react";

function MetricInput () {
    return (
        <div className="metric-inputs">
            <div className="height">
                <label htmlFor="height">Height</label><br />
                <div className="unit">
                    <input type="text" id="height" name="metric-height" value="0" /><p>cm</p>
                </div>
            </div>
            <div className="weight">
                <label htmlFor="weight">Weight</label><br />
                <div className="unit">
                    <input type="text" id="weight" name="metric-weight" value="0" /><p>kg</p>
                </div>
            </div>
        </div>
    )
}

export default MetricInput;