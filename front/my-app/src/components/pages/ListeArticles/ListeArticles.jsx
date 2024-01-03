import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
// import { Loader } from "@googlemaps/js-api-loader";
export default function EtatduCtock() {
    const [articles, setArticles] = useState([]);
    const token = localStorage.getItem('token');
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleRowClick = (id) => {
      setSelectedRowId(id);
    };
  useEffect(() => {
    axios.get('http://localhost:8088/api/v1/stock/articles', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        console.log(response.data) 
        setArticles(response.data);  
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
    window.location.href = '/AddStock';
  }
  const faireRedirectionGamme = () =>{ 
    window.location.href = '/ListeGamme';
  }
  const faireRedirectionType = () =>{ 
    window.location.href = '/typearticle';
  }


   function supprimer(e){
    e.preventDefault();   
    console.log(selectedRowId)
    console.log(token);
    try {
      
      fetch((`http://localhost:8088/api/v1/stock/deletearticle/${selectedRowId}`),
    {
      method:"DELETE",
      headers:{
      //  "Content-Type": "application/json",
        "Authorization": "Bearer "+token
      },
    }).then((response) => {
      if (response.ok) {
        alert("Article supprimé");
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
    }}>LISTE D'ARTICLE </h3>
</div>
<div>
<table 
          style={{
           borderWidth:"2px",
            borderStyle:'solid', 
             margin:"1em",
            width:"auto",
//height:"2em",

            }} 
>
        <thead>
        <tr>
      <th>Code</th>
      <th>Date dernier mouvement</th>
      <th>Nom</th>
      <th>Nserie</th>
      <th>Gamme</th>
      <th>Type article</th>
    </tr>
    </thead>
    <tbody>
{articles.map((article,index) => {
        return (            
    <tr key={article.id}  className={index % 2 === 0 ? 'table-row-even' : 'table-row-odd'}
    onClick={() => handleRowClick(article.id)}
            style={{ backgroundColor: selectedRowId === article.id ? "#ccc" : "transparent" }}
       
    >
     <td>{article.code}</td>
     <td>{article.datederniermouvement ? article.datederniermouvement.split('T')[0] : 'N/A'}</td>
     <td>{article.nom}</td>
      <td>{article.nserie}</td>
      <td>{article.gamme ? article.gamme.nom : 'null'}</td>
      <td>{article.typearticle ? article.typearticle.type : 'null'}</td>
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
       <button style={{ 
            backgroundColor:'#D6F5F0',
           // width: "25%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirectionGamme}>Liste Gamme </button>
     <button style={{ 
            backgroundColor:'#D6F5F0',
           // width: "25%",
            padding: "5px  10px",
            margin:"20px",
            borderRadius: "30px" }} onClick={faireRedirectionType}>Liste type </button>
     
       </div>
  )
}
