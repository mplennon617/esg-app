import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Home() {
  
  return (
    <div className={styles.container}>
       <div>
            <h1>Profile Page</h1>
       </div>
    </div>
  )
}
