import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Search from '../components/Search'
import Slider from '../components/Slider'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let initArr = [5,5,5,5,5];

export default function Home() {
  
  const [sliders, setSliders] = useState(initArr);
  const namesArr = ["Environmental Impact", "Assets", "Gross Profit", "Recommendation Trends", "Quote"];

  // const updateSliders = (idx, val) => {
  //   setSliders(sliders.map(i => 
  //     i === idx ? val : sliders[i]
  //   ));
  // }
  
  const onsliderchange = (idx, newVal) => {
    console.log("onsliderchange, set",idx,"to",newVal);
    const newSliders = sliders.map((currVal,currIdx) => (currIdx === idx ? Number(newVal) : Number(currVal)));
    console.log("newSliders:",newSliders);
    setSliders(newSliders);
    // console.log(sliders);
  }

  return (
    <div className={styles.container}>
       <div>
          {
            namesArr.map((val, idx) => (
              <Slider label={val} idx={idx} onChange={onsliderchange}></Slider>
            ))
          }
       </div>

    <Search></Search>
    </div>
  )
}