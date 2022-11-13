import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useRouter } from 'next/router';

export default function Profile {
  
  const router = useRouter()
  const { pid } = router.query;

  return (
    <div className={styles.container}>
       <div>
            <h1>Profile Page for company {pid}</h1>
       </div>
    </div>
  )
}

export async function getStaticPaths() { 
  // Return a list of possible value for id
}

export async function getStaticProps({ params }) {
  const data = await repo.getCompanyData(company);
  // Fetch necessary data for the blog post using params.id
}