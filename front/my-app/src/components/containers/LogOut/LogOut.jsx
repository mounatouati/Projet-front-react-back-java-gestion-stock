
import React, { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Request } from "../../../utils/requests";
import { useNavigate } from "react-router-dom";
import Auth from "../../pages/Auth/Auth";
import LoginForm from "../LoginForm/LoginForm";
export default function LogOut() {
  const {  setUser } = useContext(UserContext);
  const auth = localStorage.getItem('user');
  console.log(auth)
  const navigate = useNavigate();
  //const logout = () => {
      localStorage.removeItem("token");
      setUser(null);
     // navigate('/auth')
  //}
  return (
    <div>

        {/* <button  onClick={logout}> Deconnecter </button> */}
        <LoginForm/>
    </div>
  )
}
