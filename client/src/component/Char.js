import React from "react";
import { Chart } from 'react-charts'

export default function Char() {
    const data = React.useMemo(
        () => [
          {
            label: 'Series 2',
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ],
        []
      )
    
      const axes = React.useMemo(
        () => [
          { primary: true, type: 'linear', position: 'bottom' },
          { type: 'linear', position: 'left' }
        ],
        []
      )
    
      const lineChart = (
        // A react-chart hyper-responsively and continuusly fills the available
        // space of its parent element automatically
        <div
          style={{
            width: '400px',
            height: '300px'
          }}
        >
          <Chart data={data} axes={axes} />
        </div>
      )

  return (
    <div>
      <p>{ lineChart } </p>
    </div>
  );
}
