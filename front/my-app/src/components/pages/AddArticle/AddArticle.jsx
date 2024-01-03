import React from 'react'
import  { useState ,useContext,useEffect} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import axios from "axios";
import classes from "../../containers/LoginForm/Login.module.css"
export default function AddLogement() {
  const token = localStorage.getItem('token');
  
    const [code, setInputcode] = useState("");
    const [nom, setInputnom] = useState("");
    const [date_dernier_mouvement, setInputdate] = useState("");
    const [code_physique, setInputcodephysique] = useState("");
    const [serie, setInputserie] = useState("");
    //const [quantite, setInputquantite] = useState("");
    //const [etat, setInputEtat] = useState("NEUF");
    const [types, setType] = useState([]);
    const [gammes, setgammes] = useState([]);
    const [gamme, setgammechercher] = useState('');
    const [nomGamme, setNomGamme] = useState([]);
    const [typearticle, setTypearticle] = useState('');
    const [type, setTypechercher] = useState([]);
    const [erreur, setErreur] = useState('');
   /* const liste = [
    { value: "NEUF", label: "NEUF" },
    { value: "RETOUR", label: "RETOUR" },
      // Ajoutez d'autres éléments si nécessaire
    ];*/
   // const [type_article, setInputtypearticle] = useState("");
    //const [gamme, setInputgamme] = useState("");
   
    const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    function handlecode(e){
      setInputcode(e.target.value)
    }
    function handlenom(e){
      setInputnom(e.target.value)
    }
    function handledate(e){
      setInputdate(e.target.value)
    }
    function handlecodephysique(e){
      setInputcodephysique(e.target.value)
    }
    function handleserie(e){
      setInputserie(e.target.value)
    }
    function handleType(e){
      console.log(e.target.value)
      setTypearticle(e.target.value)
    }
    function handlegamme(e){
      console.log(e.target.value)
      setNomGamme(e.target.value)
    }

    useEffect(() => {
      axios.get('http://localhost:8088/api/v1/stock/typearticle', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data) 
          setType(response.data);  
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    useEffect(() => {
      axios.get('http://localhost:8088/api/v1/stock/gammes', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          console.log(response.data)
          setgammes(response.data);
        })
        .catch(error => {
        console.error(error);
        });
    }, []);
    useEffect(() => {
      if (nomGamme) {
        console.log(nomGamme)
        axios.get(`http://localhost:8088/api/v1/stock/gamme/${nomGamme}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            console.log(response.data)
            setgammechercher(response.data);
            setErreur('');
          })
          .catch(error => {
            setgammechercher(null);
            setErreur('La gamme avec ce nom n\'a pas été trouvée.');
          });
      } else {
        setgammechercher(null);
        setErreur('');
      }
    }, [nomGamme]);
   
    useEffect(() => {
      if (typearticle) {
        console.log(typearticle)
        axios.get(`http://localhost:8088/api/v1/stock/typearticle/${typearticle}`,{
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
          .then(response => {
            console.log(response.data)
            setTypechercher(response.data);
            setErreur('');
          })
          .catch(error => {
            setTypechercher(null);
            setErreur('La gamme avec ce nom n\'a pas été trouvée.');
          });
      } else {
        setTypechercher(null);
        setErreur('');
      }
    }, [typearticle]);


    async function validate(e){
      e.preventDefault();

      console.log(token);
      try {
      let response =  await fetch('http://localhost:8088/api/v1/stock/addarticle',
      {
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
        },
        body: JSON.stringify({ 
          nom:nom,
          code:code, 
          nserie:serie,
          codephysique:code_physique,
          datederniermouvement: date_dernier_mouvement,       
          //quantite:quantite,
         // etat:etat,
          typearticle:type,
          gamme:gamme
      })
    });
  console.log(response);
if (response.status === 200) {
  // Rediriger l'utilisateur vers la page suivante
  alert("Article créer")
  setMessage("Article créer");
  window.location.href = '/Stocks/Listedarticles';
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
      <input className={classes.input} onChange={handlenom} value={nom} placeholder="Nom " />
      <input className={classes.input} onChange={handlecode} value={code} placeholder="Code " />
      <input className={classes.input}  onChange={handledate} type="date"  value={date_dernier_mouvement} placeholder="Date_dernier_mouvement" />
      <input className={classes.input}  onChange={handlecodephysique} value={code_physique} placeholder="Code physique " />
      <input className={classes.input} onChange={handleserie} value={serie} placeholder="N° Serie " />
      {/* <input className={classes.input}  onChange={handlequantite} type="int"  value={quantite} placeholder="Quantité" /> */}
      {/* <input className={classes.input}  onChange={handleEtat} type="int"  value={etat} placeholder="Etat" /> */}
     
      {/* <input className={classes.input}  onChange={handleType} type="int"  value={type} placeholder="Type" /> */}
      <select className={classes.input} 
               onChange={handlegamme} 
               
               value={nomGamme}  placeholder="Gamme  ">
       <option value="" disabled hidden>
    Sélectionnez une gamme
  </option>
      {gammes.map((gammee) => (
         <option key={gammee.id} >
         {gammee.nom}
       </option>
     ))}
   
    </select>
      <select className={classes.input} onChange={handleType} value={typearticle}  >
      <option value="" disabled hidden>
    Sélectionnez un type
  </option>
        {types.map((typee) => (
          <option key={typee.id} >
           {typee.type}
          </option>
        ))}
      </select>

      <button className={classes.button} onClick={validate}>Valider </button>
    <p>{message}</p> 
    </form>
     {/* {Type.map((article) => {
        return (
          <div key={article.id}
          style={{
            borderWidth:"2px",
            borderStyle:'solid', 
            margin:"1em",
            padding:"1em",
            borderRadius:"1em"
            }}     
          >
            <h3>{article.nom}</h3>
          </div>
        )
      })} */}
  </div>
  )
}

