import React from 'react'
import  { useState ,useContext} from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from '../../contexts/UserContext';
import ListeArticles from '../ListeArticles/ListeArticles';
import image1 from "../../../avatar/image1.jpg"
import mesclasses from "../../pages/Profil/Profil.module.css"
export default function Profil() {
  // const [ArticleInputTitle, setArticleInputTitle] = useState("");
  //   const [ArticleInput, setArticleInput] = useState("");
  //   const [message, setMessage] = useState("");
    const { user, setUser } = useContext(UserContext);
    // function handleArticleTitle(e){
    //   setArticleInputTitle(e.target.value)
    // }
    // function handleArticle(e){
    //   setArticleInput(e.target.value)
    // }
    // async function validate(e){
    //   e.preventDefault();
   //const data = await Request.postAuthorization("/user/me", { title: ArticleInputTitle, content:ArticleInput }, "POST");
      
    //   setUser(data.data.user)
    //   setArticleInputTitle("");
    //   setArticleInput("");
    //   setMessage("Article créer");
    
  return (
    <div>
    <div className={mesclasses.container}>
    
      <form className={mesclasses.form} >
        <label style={{textAlign:'start'}}> Username
        <input placeholder={user.username} name='username'></input>
        </label>
        <label> Email
        <input placeholder={user.email} name="email"/></label>
        <label>Mot de passe
        <input placeholder={user.password} type="password" name='Mot de passe '/></label>
      </form>
   
    <div className={mesclasses.image}>   
             <img src={image1} alt="image de profil" className={mesclasses.image}/>
             <button onClick={{}}>Modifier </button>
    </div>
    <div   >
      <h3 style={{
           textAlign:"center",
           fontSize:"30px",
           color:"gray"
            }} >Liste d'articles</h3>
   
    {/* {user.articles.map((article) => {
        return (
          <div key={article._id}
          style={{
            borderWidth:"2px",
            borderStyle:'solid', 
            margin:"0.5em",
            padding:"0em",
            borderRadius:"1em",
            width:"300px",
            textAlign:"center",
            }}     
          >
            <h3>{article.title}</h3>
          </div>
        )
      })} */}
      </div>
</div>
    <div className={mesclasses.button}>
    
    <button className={mesclasses.b} >Modifier </button>
    </div>
  </div>
  )
}

