import React, { useState } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import Auth from '../Auth/Auth';
import EtatduStock from '../EtatduStock/EtatduStock';
import Calendar from '../Calendar/Calendar';
import Navbar from '../../Navbar/Navbar';
import ListeGamme from '../ListeGamme/ListeGamme';
import ListeType from '../ListeType/ListeType';
import ListeArticles from '../ListeArticles/ListeArticles';

export default function Home() {
    
const {user} = useContext(UserContext);

console.log(user);
  return (
    <div>   
        {user === null ? <Auth /> : <div style={{
      width: "auto",
      padding: "0px",
     // margin:"30px",
    //  display: "flex",
     // flexDirection: "row",
      //justifycontent:" center",
     // alignItems:"center"
  }}>
    
   
   
     <ListeGamme/> <ListeType/> 
     
     </div>
     }
        {/* <Maps/> */}
    </div>
  )
}
