import React, {useState,useEffect} from "react";
import "./App.css";
import {url,apiKey} from './constant'
import Header from './component/header'
import Content from './component/content'
import axios from 'axios'
import Calendar from 'react-calendar'

function App() {

  const [data,setData]=useState(null);
  const [date,setDate]=useState(new Date());

   useEffect(()=>{
     //${url}${apiKey}&date=${getDate(date)}
    axios.get(`${url}${apiKey}&date=${getDate(date)}`)
    .then((response)=>{
      console.log(response)
      setData(response)
      
    })
    .catch((err)=>{
      console.log("The information of this day doesn't exist")
    })

   },[date])


   function getDate(date){

    const d = new Date(date);
    console.log(d)
    let month=''+(d.getMonth()+1)
    console.log(month)
    let day=''+(d.getDate())
    console.log(day)
    const year=d.getFullYear()
    console.log(year)
     
   

  
    if(month.length<2) month='0'+month
    if(month.length<2) day='0'+day
   
     return [year,month,day].join('-')
      
    }
   
  if (!data) {
    return `The data is loading`
  }
  
  return (


    <div className="App">

      <Header />
  
       <div className="main-content">

      <div className="date">
        <p>Select the Date</p>
      <Calendar onChange={date=>setDate(date)} value={date} />
      </div>
      <div className="info">
      <Content date={data.data.date} explanation={data.data.explanation} title={data.data.title} url={data.data.url}/>
      </div>
      </div>
    </div>
  );
}

export default App;
