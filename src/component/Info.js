import React, { useEffect, useState } from "react";
import "./info.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Navbar from "../component/Navbar";
import { FooterContainer } from "../container/footer";
import { GlobalStyles } from "../global-styles";
import c1 from './imagecard/c1.jpg'
import c2 from './imagecard/c2.jpg'
import c3 from './imagecard/c3.jpg'
import c4 from './imagecard/c4.jpg'
import c5 from './imagecard/c5.jpg'
// import Skeleton from 'react-loading-skeleton' 
import InfoCard from './InfoCard'


function Info() {
  const [infos,setInfos]=useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/infos")
    // fetch("http://198.168.43.112:3000/ru/adata")
     
    .then(res=>res.json())
    .then(data=>setInfos(data))
   },[])
  console.log(infos)

    return (
      <div  >
        <Navbar />
        <Card.Title className="title-main">
            Services Related To Car Painting
          </Card.Title>

        <div >
        {infos.map(info => (
          <div key={info.title}>
            <InfoCard info={info} />
          </div>
        ))}
        </div>
          

        <GlobalStyles />
        <FooterContainer />
         </div>
    );
  
}

export default Info;
