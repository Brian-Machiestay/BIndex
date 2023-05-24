import React from "react";

function MetricInput () {
    return (
        <div className="metic-inputs">
            <div className="height">
                <input type="text" id="height" name="metric-height" value="height" /><br />
                <label for="height">Height</label>
            </div>
            <div className="weight">
                <input type="text" id="weight" name="metric-weight" value="weight" /><br />
                <label for="weight">Weight</label>
            </div>
        </div>
    )
}

export default MetricInput;