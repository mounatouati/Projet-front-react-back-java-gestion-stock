import React from 'react'
import  { useState ,useContext,useEffect} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddType() {
  const token = localStorage.getItem('token');
   
    const [type, setInputType] = useState("");
   
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    
    function handletype(e){
      setInputType(e.target.value)
    }
   
    async function validate(e){
      e.preventDefault();
      
      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/stock/addTypeArticle',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          type:type,
         
      })
    });
  console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  alert("type ajouter")
  setMessage("type créer");
console.log(user)
 // window.location.href = '/typearticle';
  }else{
        throw new Error('Erreur lors de la requête.');
      }
    //  setUser(data.data.user)
      // setArticleInputTitle("");
      // setArticleInput("");
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
      <input className={classes.input} onChange={handletype} value={type} placeholder="Type " />
      
      <button className={classes.button} onClick={validate}>Valider </button>
    <p>{message}</p> 
    </form>
    
  </div>
  )
}


