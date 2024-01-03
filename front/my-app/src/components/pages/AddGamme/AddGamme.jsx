import React from 'react'
import  { useState ,useContext,useEffect} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddGamme() {
  const token = localStorage.getItem('token');
   
    const [nom, setInputnom] = useState("");
    const [utilisateur, setutilisateur] = useState("");
   
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    
    function handlenom(e){
      setInputnom(e.target.value)
    }
   
    async function validate(e){
      e.preventDefault();     
      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/stock/addGamme',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          nom:nom,
         
      })
    });
 // console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  console.log(user)
  alert("Gamme ajouter")
  
  setUser(response.data);
 // setMessage(user);
 
  window.location.href = '/ListeGamme';
/*
////////////////////////   enregistrer hystorique 
  try {
    let response =  await fetch('http://localhost:8088/api/v1/stock/enregistreractivite',
    {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
      },
      body: JSON.stringify({ 
       utilisateur:utilisateur,
       action:"ajouter gamme  "+nom,
       //date:new Date()
    })
  });
  if (response.status === 200) {
    alert("activiter enregistrer")
  }
  else {
    alert("Erreur d'activation")
  }
}
catch (error) {
  console.error(error);
}*/

  }else{
        throw new Error('Erreur lors de la requête.');
      }
    } catch (error) {
      console.error(error);
    }
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
    <form style={{
                width: "20rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}    >
      <input className={classes.input} onChange={handlenom} value={nom} placeholder="Nom " />
      
      <button className={classes.button} onClick={validate}>Valider </button>
    <p>{message}</p> 
    </form>
    
  </div>
  )
}


