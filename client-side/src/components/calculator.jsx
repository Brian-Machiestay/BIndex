import React from "react";
import MetricInput from "./metricInput";
import BMIResult from "./BMIResult";

function Calc () {
    return (
        <div className="bmi-div">
            <h2>Enter your details below</h2>
            <div className="metric-options">
                <div className="metric">
                    <input type="radio" id="metric" name="metric-options" value="metric" checked="checked" />
                    <label for="Metric">Metric</label>
                </div>
                <div className="imperial">
                    <input type="radio" id="imperial" name="metric-options" value="imperial" />
                    <label for="imperial">Imperial</label><br />
                </div>
            </div>
            <MetricInput></MetricInput>
            <BMIResult></BMIResult>
        </div>
    )
}

export default Calc;