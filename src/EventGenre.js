import { data } from 'cheerio/lib/api/attributes';
import { getSnapshotData } from 'jest-snapshot/build/utils';
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

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

const getData = (events) => {
  const data = genres.map((genre)=>{

    const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;


    return { name: genre, value };
  });

return data;
}

return (
<ResponsiveContainer height={400}>
  <PieChart width={400} height={400}>
    <Pie
    data={getData(events)}
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