import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

type ProductData = {
  status: string;
  value: number;
};

const productData: ProductData[] = [
  { status: 'Sold', value: 200 },
  { status: 'Unsold', value: 100 },
];

// Define custom colors for pie chart slices
const COLORS = ['#00C49F', '#FFBB28'];

const ProductsPieChart: React.FC = () => {
  return (
    <div style={styles.chartContainer} className='border border-black'>
      <h3 style={styles.chartTitle}>Products Sold vs Unsold</h3>
      <PieChart width={260} height={260}>
        <Pie
          data={productData}
          cx="50%" // Centering in the div
          cy="50%" 
          outerRadius={60} // Make the chart smaller
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`} // Label with percentage
        >
          {productData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

// Simple inline styles for centering and beautification
const styles = {
  chartContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f9f9f9',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    height: '300px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    // margin: '10px auto',
  },
  chartTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as const,
    marginBottom: '0px',
  },
};

export default ProductsPieChart;
