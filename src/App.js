import React, {useState,useEffect} from "react";
import "./App.css";
import {URL} from './constant'
import Header from './component/header'
import Content from './component/content'
import axios from 'axios'

function App() {

  const [data,setData]=useState(null);

   useEffect(()=>{
    axios.get(URL)
    .then((response)=>{
      console.log(response)
      setData(response)
      
    })
    .catch((err)=>{
      console.log("Something went wrong")
    })

   },[])

   console.log(data)
   
  if (!data) {
    return `The data is loading`
  }
  
  return (
    <div className="App">

      <Header />
      <Content date={data.data.date} explanation={data.data.explanation} title={data.data.title} url={data.data.url}/>
 
    </div>
  );
}

export default App;
