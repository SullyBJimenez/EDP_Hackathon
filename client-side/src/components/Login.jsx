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
    }
    return (
        <>
            <h2>Login</h2>
        </>
    )
}