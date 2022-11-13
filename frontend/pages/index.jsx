import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  
  return (
    <div className={styles.container}>
       <div>
        <h1>Environmental Impact</h1>
          <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        <h1>Assets</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        <h1>Gross Profit</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        <h1>Recommendation Trends</h1>
        <LineChart width={500} height={300} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
        </LineChart>
        <h1>Quote</h1>
       </div>
    </div>
  )
}
