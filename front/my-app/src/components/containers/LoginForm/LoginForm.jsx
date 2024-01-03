import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Request } from "../../../utils/requests";
import classes from "../LoginForm/Login.module.css"
import axios from "axios";

export default function LoginForm() {

	const monContext= useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginMeassage, setloginMeassage] = useState("");
	//const [user,setUser]=useState('');
	
	function handleEmail(e) {	
		setEmail(e.target.value);
	}

	function handlePassword(e) {
		setPassword(e.target.value);
	}

	async function login(e) {
		
		e.preventDefault();

		//////////////////  avec request //////////////

// 	const responseData = await Request.post('http://localhost:8088/AUTH-SERVICE/api/v1/auth/authenticate',{ email, password });			 
//   if (responseData.status === 200) {
// 	console.log(responseData.data)
//      localStorage.setItem("token", responseData.data.token);
// 	 setloginMeassage("connexion réussie!");
// 	 monContext.setUser(responseData.data.user)
// 	 return
// 	}

////////////////////////////////////////// 1   ////////////////////////////
	
      //Stockez le token dans le localStorage ou utilisez-le comme requis
	/* 	fetch('http://localhost:8088/AUTH-SERVICE/api/v1/auth/authenticate', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ email,password }),
	 	}).then(response => {
			if (response.status === 200){
				return response.text();		
			} else {// Gérer les erreurs de la requête avec un statut de réponse différent de 2xx
				throw new Error('Erreur lors de la requête: ' + response.status);
			}
		}) // Récupérer le corps de la réponse comme une chaîne de caractères
		 .then(token => { // Utiliser le token JWT récupéré
		   localStorage.setItem("token", token);
		 })
		 .catch(error => {  // Gérer les erreurs de la requête
		   console.error('Une erreur s\'est produite:', error);
		 }); */

		 try {
			const response = await fetch('http://localhost:8088/api/v1/auth/authenticate', {
			  method: 'POST',
			  body: JSON.stringify({ email, password}),
			  headers: {
				'Content-Type': 'application/json'
			  }
			});
		console.log(response);
			if (response.ok) {
			  // Le statut de réponse est dans la plage 200-299

			  console.log('Statut de réponse:', response.status);
		console.log(monContext)
			  const data = await response.text(); // Récupérer le corps de la réponse comme une chaîne de caractères
			 console.log(data)
			  const datatab = data.split("/");
			  console.log(datatab[0])
			  const token = datatab[0];
			  localStorage.setItem("token", token);	
			  setloginMeassage("connexion réussie!");
			  // Utiliser le token JWT récupéré
			 window.location.href = '/';

			monContext.setUser(response.headers.user);
			console.log(monContext)
			console.log(email)
			  console.log('Token JWT:', token);
			} else {
			  // Gérer les erreurs de la requête avec un statut de réponse différent de 2xx
			  throw new Error('Erreur lors de la requête: ' + response.status);
			}
		  } catch (error) {
			// Gérer les erreurs de la requête
			console.error('Une erreur s\'est produite:', error);
		  }
		
		//  console.log(response);
		//  if (response.ok ) {
		// 	setloginMeassage("connexion réussie!");
		// 	const data = response.token;
		// 	console.log(data);
		// 	const token = data.token;
		// 	localStorage.setItem("token", token);		
		// 	//const data = await response.json();
		// 	console.log(data);
		//	monContext.setUser(data.user);
		// 	console.log(reponseData);	
		//  }else {
		// 	setloginMeassage("connexion échouée!");
		//  }
			}
	return (
		<div style={{
                width: "100%",
				height:"30%",
                padding: "30px",
                margin:"30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }} >
			<h2>Connexion</h2>
			<form style={{
                width: "20rem",
				// height:"30%",
                // padding: "30px",
                // margin:"30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>	
				<input className={classes.input}
					placeholder="Email"
					type="email"
					value={email}
					onChange={handleEmail}
				/>
				<input className={classes.input}
					
					placeholder="Mot de passe"
					type="password"
					value={password}
					onChange={handlePassword}
				/>
				<button className={classes.button} onClick={login}>Se connecter</button>
				<p>{loginMeassage}</p>
			</form>
		</div>
	);
}