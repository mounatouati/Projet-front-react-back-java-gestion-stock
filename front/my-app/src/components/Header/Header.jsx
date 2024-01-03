import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import classes from "../Footer/Footer.module.css"
import img1 from "../../img1.jpg";
import icone from '../../icon.png';
import { Link } from 'react-router-dom';
import classes from '../Header/Header.module.css'
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
//import { UserContext } from '../../contexts/UserContext';
export default function Header() {
  const {user} = useContext(UserContext);
  console.log(user)
  return (

    <header className={classes.container}>
        <div >
      <Link to='/'>
              <img style={{height:'50px'}} src={icone} alt="" />
      </Link>
      </div>
    
      <div className={classes.container1} >
      {/* <button className={classes.click}>Click Me!</button>       */}
        {user === null ? 
        <div><Link  className={classes.click} to='/Login'>
          Log in  
        </Link>
      
        <Link className={classes.click} to="/Signup">
          Sign up  
        </Link>
        </div>
       : <Link className={classes.click} to="/logout">
          Login out   
        </Link>} 
        </div> 
     </header> 
   
  )
}
