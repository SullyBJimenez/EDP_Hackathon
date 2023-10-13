import { useState } from "react"
import { useNavigate } from "react-router-dom";


export const GetCurrentUser = async (email, password ) => {
    const [currentuser, setCurrentUser] = useState();
    const navigate = useNavigate();
    
    const url = "http://localhost:2020/";
        const data = await fetch(`${url}loginConfirmation`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => {
                if (!response.ok) throw new Error("Not ok");
                return response.json();
            })
            .then((data) => {
                setCurrentUser(data)
                navigate('/currentuser/')
            })
            .catch((error) => console.error(error));

  return currentuser
}