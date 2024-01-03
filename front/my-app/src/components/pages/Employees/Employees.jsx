import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import mesclasses from "../../pages/Employees/Employees.module.css";
export default function Employees() {
    const [employees, setEmployees] = useState([]);
    const token = localStorage.getItem('token');
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleRowClick = (id) => {
      setSelectedRowId(id);
    };
  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/stock/employees', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data) 
        setEmployees(response.data);  
      })
      .catch(error => {
        console.error(error);
      });
    // fetch("http://localhost:8088/IMMO-SERVICE/logements")
    // .then(response => response.json())
    // .then(data => setLogement(data))
    // .catch(err => console.log(err))
  }, []);
  const faireRedirection = () =>{ 
    window.location.href = '/AddEmployee';
  }



   function supprimer(e){
    e.preventDefault();   
    console.log(selectedRowId)
    console.log(token);
    try {
      
      fetch((`http://localhost:8088/api/v1/stock/deleteemployee/${selectedRowId}`),
    {
      method:"DELETE",
      headers:{
      //  "Content-Type": "application/json",
        "Authorization": "Bearer "+token
      },
    }).then((response) => {
      if (response.ok) {
        alert("Employee supprimé");
        window.location.reload(); // pour actualiser la page apres suppression 
      } else {
        throw new Error('Erreur lors de la requête.');
      }
    })
    .catch((error) => {
      console.error(error);
    });
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
        <div>
<h3 style={{
   fontSize:"20px",
   color:"brown",
    }}>LISTE D'EMPLOYEES </h3>
</div>
<div>
<table 
          style={{
           borderWidth:"2px",
            borderStyle:'solid', 
             margin:"2em",
             padding:"2rem",
            width:"auto",
            textAlign:"center"
//height:"2em",

            }} 
>
        <thead  >
        <tr >
      <th>NOM</th>
      <th>PRENOM</th>
      <th>EMAIL</th>
      <th>DATE CREATION</th>
    </tr>
    </thead>
    <tbody>
{employees.map((employee,index) => {  
    console.log(index)
        return (            
    <tr key={employee.id}  className={index % 2 === 0 ? 'tableroweven' : 'tablerowodd'}
  
    onClick={() => handleRowClick(employee.id)}
            style={{ backgroundColor: selectedRowId === employee.id ? "#ccc" : "transparent" }}
       
    >
    <td>{employee.nom}</td>
    <td>{employee.prenom}</td>
    <td>{employee.email}</td>
     <td>{employee.datecreation ? employee.datecreation.split('T')[0] : 'N/A'}</td>
     
         </tr>
        )
    })}
    </tbody>   
      </table>
            {/* <ul>{article.nom} | {article.prenom}</ul>  */}
            </div>
            <button style={{ 
            backgroundColor:'#D6F5F0',
            //width: "25%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirection}>Ajouter  </button>
            <button style={{ 
            backgroundColor:'#D6F5F0',
            //width: "25%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={supprimer}>Supprimer  </button>
          {/* <button style={{ 
            backgroundColor:'#D6F5F0',
           // width: "25%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirectionType}>Liste type </button>
      */}
       </div>
  )
}
