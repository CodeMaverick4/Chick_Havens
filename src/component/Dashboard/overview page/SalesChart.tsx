import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface SalesData {
  name: string;
  sales: number;
}

const quarterlyData: SalesData[] = [
  { name: 'Q1', sales: 4000 },
  { name: 'Q2', sales: 3000 },
  { name: 'Q3', sales: 5000 },
  { name: 'Q4', sales: 2000 },
];

const yearlyData: SalesData[] = [
  { name: '2019', sales: 12000 },
  { name: '2020', sales: 18000 },
  { name: '2021', sales: 22000 },
  { name: '2022', sales: 16000 },
];

const SalesChart = () => {
  const [data, setData] = useState<SalesData[]>(quarterlyData);

  return (
    <div className="p-2 sm:p-6 rounded-lg shadow-lg  min-w-[300px] lg:w-full border border-border-C bg-background">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[2vw] font-semibold underline underline-offset-8 decoration-accent decoration-1">Sales Overview</h2>
        <select
          className="px-4 py-2 rounded-lg outline-none border-2 border-border-C bg-primary"
          onChange={(e) => setData(e.target.value === 'yearly' ? yearlyData : quarterlyData)}
        >
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={270}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{fill:'#cf4a53'}} axisLine={{ stroke: '#61bdd6' }} />
          <YAxis tick={{fill:'#cf4a53'}} axisLine={{ stroke: '#61bdd6' }} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#cf4a53" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
