import React from 'react';
import {  Link } from "react-router-dom";
import mesclasses from "../SidebarMenu/SidebarMenu.module.css";
class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activeMenuItem: 'home', // Menu item actif par défaut
        };
      }
    
      handleClick = (menuItem) => {
        this.setState({ activeMenuItem: menuItem });
        // Effectuez ici d'autres actions en fonction de l'élément de menu cliqué
      }
    
      render() {
        const { activeMenuItem } = this.state;
    
        return (
          <div className={mesclasses.sidebar}>
            <div>
                    <ul >
                        <li> <Link to="/">Accueil</Link></li>
                        {/* <li> <Link to="/Profil">Profil</Link></li>
                        <li> <Link to="/logout">Déconnexion </Link></li> */}
                      
                        <li> <Link to="/Clients">Clients</Link></li>
                        <li> <Link to="/Stocks">Stocks</Link></li>
                        <li> <Link to="/Planning">Planning</Link></li>
                    </ul>
                </div>
          </div>
        );
      }
    }
    
export default SidebarMenu;