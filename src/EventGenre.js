import React, {useState, useEffect } from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

const data = [
  { name: 'Group A',
    value: 400
  },
  { name: 'Group B',
    value: 300
  },
  { name: 'Group C',
    value: 300
  },
  { name: 'Group D',
    value: 200
  }
];

return (
<ResponsiveContainer height={400}>
  <PieChart width={400} height={400}>
    <Pie
    data={data}
    cx={200}
    cy={200}
    labelLine={false}
    outerRadius={80}
    fill="#8884d8"
    dataKey="value"
    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
    />
  </PieChart>
</ResponsiveContainer>
)



};


export default EventGenre;