import React, {useState, useEffect } from 'react';
import { Pie, PieChart, Cell, ResponsiveContainer, Legend } from 'recharts';

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

const colors = ['#8884d7', '#d1ed57', '#a4de6b', '#8dd1e1', '#82a6ec', '#81ca9c'];

return (
<ResponsiveContainer height={400} width='20%'  className="recharts-responsive-container">

  <PieChart height={400}>
    <Pie
    data={data}
    cx={200}
    cy={200}
    labelLine={false}
    outerRadius={80}
    fill="#8884d8"
    dataKey="value"
    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
    >
    {
      data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={colors[index]}/>
      ))
    }
    </Pie>
    <Legend align="left" verticalAlign="bottom" height={36}/>
  </PieChart>
</ResponsiveContainer>
)



};


export default EventGenre;