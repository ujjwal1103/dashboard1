import './sales.css'
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector} from 'recharts';

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


  const data2 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];
  

const SalesStatistic = () => {
  
  
    
  return (
    <div className='sales'>
       <div className="container2">
       <ResponsiveContainer width="60%" height="70%">
        <BarChart width={100} height={30} data={data}>
          <Bar dataKey="pv" fill="red" />
        </BarChart>
      </ResponsiveContainer>
       </div>
       <div className="container2">
       <ResponsiveContainer width="60%" height="70%">
        <BarChart width={100} height={30} data={data}>
          <Bar dataKey="uv" fill="red" />
          <Bar dataKey="pv" fill="green" />
        </BarChart>
      </ResponsiveContainer>
       </div>
       <div className="container2">
       <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data2}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      </ResponsiveContainer>
       </div>
       <div className="container2">
          
       </div>
    </div>
  )
}

export default SalesStatistic