import React, { useContext, useState , useEffect } from "react";
import { Request } from "../../../utils/requests";
import { UserContext } from "../../contexts/UserContext";
import classes from "../LoginForm/Login.module.css";
import axios from "axios";
export default function SignupForm() {

    
//	const monContext = useContext(UserContext);
    const [usernameInput, setUsername] = useState("")
    const [usernameerror, setUsernameerror] = useState("")
    const [userprenomInput, setUserprenom] = useState("")
    const [userprenomerror, setUserprenomerror] = useState("")
    const [email, setEmail] = useState("");
    const [emailerror, setEmailerror] = useState("");
    const [passwordInput, setPassword] = useState("");
    const [passworderror, setPassworderror] = useState("");
    const [confirmPasswordInput, setConfirmPassword] = useState("");
    const [confirmPassworderror, setConfirmPassworderror] = useState(""); 
    const [signupMessage, setSignupMessage] = useState("");
    const [donnees, setDonnees] = useState([]);
    const [emailExiste, setEmailExiste] = useState(false);
    function handleUsername(e) {
        setUsernameerror("");
        setUsername(e.target.value);
    }
    function handleUserprenom(e) {
        setUserprenomerror("");
        setUserprenom(e.target.value);
    }
    function handleEmail(e) {
        setEmailerror("");
        setEmail(e.target.value);
    }

    function handlePassword(e) {
        setPassworderror("");
        setPassword(e.target.value);
    }

    function handleConfirmPassword(e) {
        setConfirmPassworderror("");
        setConfirmPassword(e.target.value);
    }
  /*
    useEffect(() => {
      axios.get('http://localhost:8088/api/v1/stock/employees') // Remplacez l'URL par votre endpoint pour récupérer les données
        .then(response => {
          setDonnees(response.data); // Mettez à jour l'état avec les données récupérées
          console.log(response.data)
          const emailExisteDansDonnees = response.data.some(item => item.email === email);
          console.log(emailExisteDansDonnees)
          setEmailExiste(emailExisteDansDonnees);
          console.log(emailExiste)
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    */
    async function signup(e) {
        e.preventDefault();
        setEmailerror("");
        setUsernameerror("");
        setPassworderror("");
        setConfirmPassworderror("");
        
        if ( email=="admin@admin"){     
     //   if (emailInput.includes('@') && passwordInput.length >= 6 && usernameInput.length >= 6 && passwordInput === confirmPasswordInput) {
        const response = await axios.post('http://localhost:8088/api/v1/auth/register',
                {
            
            firstname:usernameInput,
            lastname: userprenomInput,
            email:email,
            password:passwordInput,
           roles:[{roleName:"ADMIN"}]
              });
            console.log(response);
         
			if (response.status === 200) {
            // Rediriger l'utilisateur vers la page suivante
             window.location.href = '/Login';

            }
                else{
                    throw new Error('Erreur lors de la requête.');
                }
            }
            
     //   if (emailExiste==true){

        const response = await axios.post('http://localhost:8088/api/v1/auth/register',
                    {
                
                firstname:usernameInput,
                lastname: userprenomInput,
                email:email,
                password:passwordInput,
               roles:[{roleName:"USER"}]
                  });
                console.log(response);
             
                if (response.status === 200) {
                // Rediriger l'utilisateur vers la page suivante
                 window.location.href = '/Login';
    
                }
                    else{
                        throw new Error('Erreur lors de la requête.');
                    }

                // }
                // else{
                //      alert("L'email n'existe pas dans les données récupérées");
                // }
                   
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
            <h2>Inscription</h2>
            
            <form style={{
                width: "20rem",
				// height:"100px",
                // padding: "30px",
                // margin:"30px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <input className={classes.input}
                    placeholder="nom"
                    value={usernameInput}
                    onChange={handleUsername}
                    error={usernameerror}
                />
                <input className={classes.input}
                    placeholder="prenom"
                    value={userprenomInput}
                    onChange={handleUserprenom}
                    error={userprenomerror}
                />
                <input className={classes.input}
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    error={emailerror}
                />
                <input className={classes.input}

                    placeholder="Mot de passe"
                    type="password"
                    value={passwordInput}
                    onChange={handlePassword}
                    error={passworderror}
                />
                <input className={classes.input}

                    placeholder="Confirmez le mot de passe"
                    type="password"
                    value={confirmPasswordInput}
                    onChange={handleConfirmPassword}
                   error={confirmPassworderror}
                />
                <button className={classes.button} onClick={signup}>Inscription</button>
                <p>{signupMessage}</p>
            </form>
        </div>
    );
}