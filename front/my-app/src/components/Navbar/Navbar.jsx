import React, { useState,useContext } from 'react'
import Home from '../pages/Home/Home'
import {  Link } from "react-router-dom";
import Profil from '../pages/Profil/Profil';
import Auth from '../pages/Auth/Auth';
import mesclasses from "../Navbar/Navbar.module.css";
import ListeArticles from '../pages/ListeArticles/ListeArticles';
import LogOut from '../containers/LogOut/LogOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../contexts/UserContext';
import { faCubes  ,faCalendarCheck,faUsers,faCubesStacked,faSquareMinus,faSquarePlus,faArrowRotateLeft} from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const { user, setUser } = useContext(UserContext);
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        setSubMenuVisible(true);
      };
    
      const handleMouseLeave = () => {
        setSubMenuVisible(false);
      };
console.log(user.nom);
    return (
       
            <nav className={mesclasses.container} >
                {/* <div className={mesclasses.div1} > */}
                    <ul >
                        <li> 
                           <Link to="/">
                            <div>
                            <FontAwesomeIcon icon={faChartLine} /></div>
                            <div className={mesclasses.div2} >
                            Accueil
                            </div>
                            </Link></li>
                        <div  className={mesclasses.menuitem} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
                        <li> <Link to="/Stocks"><FontAwesomeIcon icon={faCubesStacked} />   
                        <div className={mesclasses.div2}>
                         Stocks
                         </div>
                         </Link></li>       
                        {isSubMenuVisible && (

                                <div className={mesclasses.submenu}>  
                                <ul class="menu">
                                    <li><Link to="/Stocks/Etatdustock">Etat du stock</Link></li>
                                    <li><Link to="/Stocks/Listedarticles">Articles</Link></li>
                                    <li> <Link to="/entree">Entrée</Link></li>
                        <li> <Link to="/sortie">Sortie </Link></li>
                                </ul>
                                </div>
                            )}
                       </div>
                        {/* <li> <Link to="/addMvtStock"><FontAwesomeIcon icon={faSquarePlus} /><div className={mesclasses.div2}>Entrée</div></Link></li> */}
                        {/* <li> <Link to="/sortie"><FontAwesomeIcon icon={faSquareMinus} /><div className={mesclasses.div2}>Sortie</div> </Link></li> */}
                        {/* <li> <Link to="/sortie"><FontAwesomeIcon icon={faArrowRotateLeft} />Retour </Link></li> */}
                        <li> <Link to="/Planning"><FontAwesomeIcon icon={faCalendarCheck} />
                        <div className={mesclasses.div2}>
                        Planning
                        </div>
                        </Link></li>
                        <li> <Link to="/Employees"><FontAwesomeIcon icon={faUsers} />
                        <div className={mesclasses.div2}>
                        Employees
                        </div>
                        </Link></li>
                    </ul>
                {/* </div> */}
                
            </nav>
     
    )
}
