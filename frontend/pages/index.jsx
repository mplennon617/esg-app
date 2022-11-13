import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  
  return (
    <div className={styles.container}>
       <div>
        <h1>Environmental Impact</h1>
        <h1>Assets</h1>
        <h1>Gross Profit</h1>
        <h1>Recommendation Trends</h1>
        <h1>Quote</h1>
       </div>
    </div>
  )
}
