import React from 'react'
import  { useState ,useContext,useEffect} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddEmployee() {
  const token = localStorage.getItem('token');
   
    const [nom, setInputnom] = useState("");
    const [prenom, setInputprenom] = useState("");
    const [email, setInputemail] = useState("");
    const [datecreation, setInputdatecreation] = useState("");
   
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    
    function handlenom(e){
      setInputnom(e.target.value)
    }
    function handleprenom(e){
      setInputprenom(e.target.value)
    }
    function handleemail(e){
      setInputemail(e.target.value)
    }
    function handledatecreation(e){
      setInputdatecreation(e.target.value)
    }
    async function validate(e){
      e.preventDefault();     
      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/stock/addemployee',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          nom:nom,
          prenom:prenom,
          email:email,
          datecreation:datecreation
         
      })
    });
 // console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  console.log(user)
  alert("Employee ajouter")
  
  setUser(response.data);
 // setMessage(user);
 
  window.location.href = '/Employees';

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
      <input className={classes.input} onChange={handleprenom} value={prenom} placeholder="Prenom " />
      <input className={classes.input} onChange={handleemail} value={email} placeholder="Email " />
      <input className={classes.input} onChange={handledatecreation} type="date"  value={datecreation} placeholder="Date " />
      
      <button className={classes.button} onClick={validate}>Valider </button>
    <p>{message}</p> 
    </form>
    
  </div>
  )
}


