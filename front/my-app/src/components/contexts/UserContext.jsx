import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();


export default function UserProvider(props) {
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	 useEffect(() => {
	 	const token = localStorage.getItem("token");

		if (token) {
			fetch("http://localhost:8088/api/v1/auth/users/me", 
			{ headers: { 
				Authorization: `Bearer ${token}` } }).then(
				(reponse) => {
					console.log(reponse);
					reponse.text().then((data) => {
						console.log(data);
						setUser(data);
						setIsLoading(false);
					});
				}
			);
			return;
		}
		setIsLoading(false);
	 }, []);

	// const fetchUser = async () => {
	// 	try {
	// 	  const response = await axios.get("http://localhost:8088/AUTH-SERVICE/api/v1/auth/user/email");
	// 	  setUser(response.data);
	// 	} catch (error) {
	// 	  console.error(error);
	// 	}
	//   };
  	// setIsLoading(false);
	//   fetchUser();
	//  }, []);

	return (
		<UserContext.Provider value={{ user, setUser}}>
			{isLoading ? <h2>Loading...</h2> : props.children}
		</UserContext.Provider>
	);
}


