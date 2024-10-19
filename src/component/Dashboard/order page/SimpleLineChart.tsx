import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Page A', uv: 400 },
  { name: 'Page B', uv: 300 },
  { name: 'Page C', uv: 500 },
  { name: 'Page D', uv: 200 },
  { name: 'Page E', uv: 700 },
  { name: 'Page F', uv: 600 },
];

const SimpleLineChart: React.FC = () => {
  return (
    <div className="w-32 h-9 ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} >                    
          <Line type="monotone" dataKey="uv" stroke="green" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleLineChart;
