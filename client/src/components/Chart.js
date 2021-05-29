import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Chart from "react-google-charts";
function ChartComponent() {
    const chartData1 = [
        [ 'Task', 'Hours per Day' ],
        [ 'Happy', 10 ],
        [ 'Neutral', 0 ],
        [ 'Angry', 2 ],
        [ 'Surprised', 4 ],
        [ 'Fearful', 0 ],
        [ 'Disgusted', 0 ]
      ];
    return (
        <div>
        heyyyy
        <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={chartData1}
            options={{
                title: 'Emotions',
                // Just add this option
                is3D: true,
            }}
            rootProps={{ 'data-testid': '1' }}
        />
        </div>
    )
}

export default ChartComponent
