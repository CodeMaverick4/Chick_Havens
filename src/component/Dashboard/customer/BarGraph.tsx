import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dataByState = {
  "USA": [
    { location: 'California', customers: 400 },
    { location: 'Texas', customers: 300 },
    { location: 'New York', customers: 500 },
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
  ],
  "Canada": [
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
  ],
  "Canad1": [
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
  ],
  "Canad2": [
    { location: 'Ontario', customers: 200 },
    { location: 'Quebec', customers: 150 },
    { location: 'British Columbia', customers: 250 },
  ]
};

const CustomerBarChart: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<keyof typeof dataByState>('USA');
  
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRegion(event.target.value as keyof typeof dataByState);
  };

  return (
    <div className='flex flex-col gap-6 bg-background p-5 border border-borderC rounded-md text-text'>
      <h2 className='text-center'>Number of Customers by Location</h2>

      {/* Dropdown to select state or country */}
      <div>
        <label htmlFor="region-select">Select a region:</label>
        <select id="region-select" value={selectedRegion} onChange={handleRegionChange} className='bg-background border border-borderC rounded-md'>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>
      </div>

      {/* Bar chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataByState[selectedRegion]}>
          <XAxis dataKey="location" tick={{fill:'#61bdd6'}} axisLine={{ stroke: '#61bdd6' }}/>
          <YAxis tick={{fill:'#61bdd6'}} axisLine={{ stroke: '#61bdd6' }} />
          <Tooltip />
          <Bar dataKey="customers" fill="#cf4a53" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomerBarChart;
