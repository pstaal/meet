import React, {useState, useEffect } from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {

const [data, setData] = useState([]);



const getData = () => {
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
  const data = genres.map((genre)=>{

    const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;


    return { name: genre, value };
  });

return data;
};

useEffect(() => { setData(() => getData()); }, [events]);


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