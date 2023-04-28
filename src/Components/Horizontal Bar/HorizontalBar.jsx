import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList  } from 'recharts';
import './horizontal.scss'

function HorizontalBar() {
  const data = [
    { name: 'Firewall INGRESS', value: 2},
    { name: 'Instance without', value: 5 },
    { name: 'Not encrypted with', value: 9 },
    { name: 'Instance without', value: 12},
    { name: 'Not encrypted with', value: 3 },
  ];

  const colors = {
    'Firewall INGRESS': '#0088FE',
    'Instance without': '#00C49F',
    'Not encrypted with': '#FFBB28',
  };

  const DataNames = ({ x, y, width, value}) => (
    <text
      x={x + width + 10}
      y={y + 10}
      textAnchor="start"
      dominantBaseline="central"
    >
      {value}
    </text>
  );

  return (
    <div  className="bar" style={{textAlign :"center"}}>
   <ResponsiveContainer width="50%" height={500}>
      <BarChart
        data={data}
        margin={{
          top: 30,
          right: 30,
          left: 100,
          bottom: 0,
        }}
        layout="vertical"
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" padding={{ top: 10, bottom: 10 }} />
      
        
        <Bar dataKey="value" width={null}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[entry.name]} />
          ))}
            <LabelList dataKey="value" content={<DataNames />}  />
            
          </Bar>
          <XAxis axisLine={{ strokeWidth: 0 }} />
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default HorizontalBar;
