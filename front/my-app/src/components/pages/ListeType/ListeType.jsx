import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";

export default function ListeProprietaire() {
    const [typearticle, setTypearticle] = useState([]);
    const token = localStorage.getItem('token');
 
  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/stock/typearticle', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
      })
      .then(response => {
        console.log(response.data)
        setTypearticle(response.data);
      })
      .catch(error => {
        console.error(error);
      });  
  }, []);
  const faireRedirection = () =>{ 
    window.location.href = '/addTypeArticle';
    
  }
  return (
    <div         
    style={{
      width: "100%",
      padding: "20px",
      margin:"30px",
      display: "flex",
      flexDirection: "column",
      justifycontent:" center",
      alignItems:"center"
  }}
       >
        <div>
<h3 style={{
   fontSize:"20px",
   color:"brown",
    }}>Types article </h3>
</div>
<div>
<table 
          style={{
           // borderWidth:"2px",
           // borderStyle:'solid', 
             margin:"1em",
            width:"30em",
            height:"2em",
            
            }} 
>
        <thead>
        <tr>
      <th>Type</th>
    </tr>
    </thead>
    <tbody>
{typearticle.map((article) => {
        return (
         
          // style={{
          //   borderWidth:"2px",
          //   borderStyle:'solid', 
          //    margin:"1em",
          //   // padding:"1em",
          //   //borderRadius:"1em",
          //   width:"20em",
          //   height:"2em"
          //   }}     
          
            
    <tr key={article.id}   style={{
      borderWidth:"2px",
      borderStyle:'solid', 
       margin:"1em",
      // padding:"1em",
      //borderRadius:"1em",
    //  width:"500em",
     // height:"3em"
      }}>
      <td >{article.type}</td>
    </tr>
        )
    })}
    </tbody>
       
      </table>
            {/* <ul>{article.nom} | {article.prenom}</ul>  */}
           
            </div>
            <button style={{ 
            backgroundColor:'#D6F5F0',
            width: "15%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirection}>Ajouter  </button>
       </div>
      

  )
}
