
import './App.css';
import { BarChart, XAxis, YAxis, Bar} from 'recharts';
import { useState, useEffect } from "react";
//import {Barchart} from 'C:/xampp/htdocs/my-react-app/node_modules/recharts/src/chart/BarChart';

//C:\xampp\htdocs\my-react-app\node_modules\recharts\es6\chart
function App() {

  const data = [
      {name: '2013-01', value:52.5},
      {name: '2013-02', value:50},
      {name: '2013-03', value:30},
      {name: '2013-04', value:60},
      {name: '2013-05', value:34},
      {name: '2013-06', value:15},
      {name: '2013-07', value:57.5},

  ]
  return (
    <div>
         <BarChart width={400} height={500} data={data}>
           <XAxis datakey="name"/>
           <YAxis datakey="value"/>
           <Bar datakey="value" fill='blue'/>
         </BarChart>
       </div>
  )
}

export default App;
