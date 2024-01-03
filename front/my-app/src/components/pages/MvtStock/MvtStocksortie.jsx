import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
// import { Loader } from "@googlemaps/js-api-loader";
export default function MvtStock() {
   // const [stocks, setStock] = useState([]);
    const token = localStorage.getItem('token');
    const [article, setInputarticle] = useState("");
    const [date_mouvement, setInputdate] = useState("");
    const [quantite, setInputquantite] = useState("");
    const [etat, setInputEtat] = useState("NEUF");
   const liste = [
    { value: "NEUF", label: "NEUF" },
    { value: "RETOUR", label: "RETOUR" },
      // Ajoutez d'autres éléments si nécessaire
    ];
    //////////////////
    const [articles, setarticle] = useState([]);
    ////////    ajout article ///////////////
    // const [code, setInputcode] = useState("");
    // const [nom, setInputnom] = useState("");
   // const [date_dernier_mouvement, setInputdate] = useState("");
    // const [code_physique, setInputcodephysique] = useState("");
    // const [serie, setInputserie] = useState("");
    // const [type, setType] = useState([]);
    // const [gammes, setgamme] = useState([]);
    const [selectedRowId, setSelectedRowId] = useState(null);

    const handleRowClick = (id) => {
      setSelectedRowId(id);
    };
    // function handlecode(e){
    //   setInputcode(e.target.value)
    // }
    // function handlenom(e){
    //   setInputnom(e.target.value)
    // }
    // function handledate(e){
    //   setInputdate(e.target.value)
    // }
    // function handlecodephysique(e){
    //   setInputcodephysique(e.target.value)
    // }
    // function handleserie(e){
    //   setInputserie(e.target.value)
    // }
    // function handleType(e){
    //   setType(e.target.value)
    // }
    // function handlegamme(e){
    //   setgamme(e.target.value)
    // }
    // //////////      mvtstock  /////////
    // function handlearticle(e){
    //   setInputarticle(e.target.value)
    // }
    function handledate(e){
      setInputdate(e.target.value)
    }
    function handlequantite(e){
      setInputquantite(e.target.value)
    }
    function handleetat(e){
      setInputEtat(e.target.value)
    }
    async function validate(e){
      e.preventDefault();
      
      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/stock/sortie',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          datemouvement: date_mouvement,       
          quantite:quantite,
          article:{id:selectedRowId},
          etatArticle:etat,
      })
    });
  console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  alert("Opération effectuer")
 // setMessage("Reception effectuer");
  window.location.href = '/Stocks/Etatdustock';
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

    useEffect(() => {
      axios.get('http://localhost:8088/api/v1/stock/articles', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data) 
          setarticle(response.data);  
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  return (
    <div>
    <form style={{
      width: "20rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
  }}    >
<input   onChange={handledate} type="date"  value={date_mouvement} placeholder="Date_dernier_mouvement" />
{/* <input   onChange={handlearticle_id} value={article_id} placeholder="article_id" /> */}
<input   onChange={handlequantite} type="int"  value={quantite} placeholder="Quantité" /> 
{/* <input   onChange={handleetat} type="int"  value={etat} placeholder="Etat" /> */}

<select  onChange={handleetat} value={etat} >
{liste.map((option) => (
<option key={option.value} value={option.value}>
  {option.label}
</option>
))}
</select>

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
{/* 
<div>

</div>
      {articles.map((article) => (
        <div>
          <input   type="text" name="nom" value= {article.nom} /> <input   type="text" name="code" value= {article.code} /> 
          <input   type="text" name="code physique" value= {article.code_physique} /> <input   type="text" name="code" value= {article.typearticle_id} /> 
        
        </div>
     ))}
    */}


<button  onClick={validate}>Valider </button>
{/* <p>{message}</p>  */}
</form>
       </div>
  )
}
