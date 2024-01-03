import React ,{useState}from 'react'
import LoginForm from '../../containers/LoginForm/LoginForm'
import SignupForm from '../../containers/SignupForm/SignupForm'
import classes from '../../containers/LoginForm/Login.module.css'
import ListeLogement from '../../pages/ListeLogements/ListeLogement'
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

	// function toggleLogin() {
	// 	setIsLogin(!isLogin);
	// }

  return (
    <div className={classes.container}>
			{/* {isLogin ? <LoginForm /> : <SignupForm />}
			<p className="link" onClick={toggleLogin} >
				{isLogin ? "Pas encore membre? Inscrivez vous!" : "Deja membre? Connectez-vous!"}
				
			</p> */}
			<LoginForm />
			{/* <SignupForm /> */}
			{/* <ListeLogement/> */}
		</div>

  )
}
