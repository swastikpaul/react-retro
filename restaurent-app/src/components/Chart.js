import React, { Component } from 'react';
import {ResponsiveContainer, BarChart, Tooltip, Bar, XAxis, YAxis} from 'recharts';
import "./style.css";   
import Home from './Home';
const Array = [
    {
      name : "Testy Food",
      Food : "15",
      Fee : "17$"
  
    },
    {
      name : "Cake",
      Food : "77",
      Fee : "137$"
  
    },
    {
      name : "Pixzza",
      Food : "35",
      Fee : "160$"
  
    },
    {
      name : "Pops",
      Food : "65",
      Fee : "30$"
  
    },
    {
      name : "Dips",
      Food : "10",
      Fee : "60$"
  
    },
    
  
  ]
class Chart extends Component {

    render() {
        return (
       
            <div  > 
              <Home></Home>
                <ResponsiveContainer width={500} aspect={2} className='chart'>
                    <BarChart data={Array} width={700} height={600} >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Food" fill='red' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

export default Chart;