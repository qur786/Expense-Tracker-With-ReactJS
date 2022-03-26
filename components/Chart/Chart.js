import { ChartBar } from "./ChartBar";
import "./Chart.css";

export function Chart (props) {
    const values = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...values);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => 
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum}
                label={dataPoint.label} 
            />)}
        </div>
    )
}