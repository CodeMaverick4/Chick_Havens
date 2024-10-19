import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { priceRange: '0-100', sales: 400 },
  { priceRange: '100-200', sales: 700 },
  { priceRange: '200-300', sales: 600 },
  { priceRange: '300-400', sales: 800 },
  { priceRange: '400-500', sales: 900 },
  { priceRange: '500+', sales: 1200 },
];

const SimpleBarChart: React.FC = () => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
      <XAxis dataKey="priceRange"  tick={{fill:'#61bdd6'}} axisLine={{ stroke: '#61bdd6' }}/>
      <YAxis  tick={{fill:'#61bdd6'}} axisLine={{ stroke: '#61bdd6' }}/>
      <Bar dataKey="sales" fill="#cf4a53" barSize={30} />
    </BarChart>
  </ResponsiveContainer>
);

export default SimpleBarChart;
