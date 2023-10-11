import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const raw = {
            email,
            password,
        };
        const url = '';

        const response = await fetch(`${url}profile-login`, {
            method: 'POST',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(raw),
        })
        .then((res) => res.json())
        .then(async (data) => {
            if(data.status === "ok") {
                window.localStorage.setItem("token", data.data);
                
            }
        })
    }
    return (
        <>
            <h2>Login</h2>
        </>
    )
}