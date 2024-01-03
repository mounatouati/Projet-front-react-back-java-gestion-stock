
import { Route, Routes, Navigate } from "react-router-dom";

import { useContext } from "react";
import LogOut from "../containers/LogOut/LogOut";
import ListeType from "../pages/ListeType/ListeType";
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Profil from "../pages/Profil/Profil";
import { UserContext } from "../contexts/UserContext";
import ListeLogements from "../pages/ListeLogements/ListeLogement";
import EtatduStock from "../pages/EtatduStock/EtatduStock";
import LoginForm from "../containers/LoginForm/LoginForm";
import SignupForm from "../containers/SignupForm/SignupForm";
import AddArticle from "../pages/AddArticle/AddArticle";
import Calendar from "../pages/Calendar/Calendar";
import AddGamme from "../pages/AddGamme/AddGamme";
import AddType from "../pages/AddType/AddType";
import ListeGamme from "../pages/ListeGamme/ListeGamme";
import mesclasses from "../Main/Main.module.css";
import Navbar from "../Navbar/Navbar";
import MvtStockentree from "../pages/MvtStock/MvtStockentree";
import MvtStocksortie from "../pages/MvtStock/MvtStocksortie";
import ListeArticles from "../pages/ListeArticles/ListeArticles";
import Employees from "../pages/Employees/Employees";
import AddEmployee from "../pages/Employees/AddEmployee";
export default function Main() {
	const { user } = useContext(UserContext);
	return (
		<div className={mesclasses.container}
		// style={{
		// 	//width: "50%",
		// 	padding: "20px",
		// 	margin:"30px",
		// 	display: "flex",
		// 	flexDirection: "column",
		// 	justifycontent:" center",
		// 	alignItems:"center",
		// 	height:"100%",
		// }}
		>
		<Routes>
		<Route exact path="/" element={<Home/>} />
		<Route path="/auth" element={user ? <Navigate to={"/"} /> : <Auth />} />
		{/* <Route path="/profil" element={!user ? <Navigate to={"/auth"} /> : <Profil />} />  */}
        <Route path="/logout" element={user ? <LogOut/> :<Navigate to={"/auth"} /> } /> 
		<Route path="/Clients" element={user ? <ListeLogements/> : <Auth />} />
		<Route path="/Stocks/Etatdustock" element={<EtatduStock/> }
		
		// {user ? <EtatduStock/> : <Auth />} 
		/> 
		<Route path="/Planning" element={user ? <Calendar/> : <Auth />}     
		// {user ? <Calendar/> : <Auth />} 
		/> 
		<Route path="/Login" element={<LoginForm/>} /> 
		<Route path="/Signup" element={<SignupForm/>} /> 
		<Route path="/AddStock" element={<AddArticle/>} /> 
		<Route path="/AddClients" element={<AddArticle/>} /> 
		<Route path="/AddGamme" element={<AddGamme/>} /> 
		<Route path="/ListeGamme" element={<ListeGamme/>} /> 
		<Route path="/addTypeArticle" element={<AddType/>} /> 
		<Route path="/typearticle" element={<ListeType/>} /> 
		<Route path="/entree" element={<MvtStockentree/>} /> 
		<Route path="/sortie" element={<MvtStocksortie/>} /> 
		<Route path="/Stocks/Listedarticles" element={<ListeArticles/>} /> 
	    <Route path="/Employees" element={<Employees/>} />  
		<Route path="/AddEmployee" element={<AddEmployee/>} />  
		
		</Routes>
		</div>
	);
	
}

