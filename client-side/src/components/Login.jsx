import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getData } from "../getData.js"

export function Login( { setIsOpen }){
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
                window.localStorage.setItem("loggedIn", true);
                await getData();
                await setIsOpen(false)
                navigate('/search/');
            }
        });
        try {
            const result = await response.json();
            console.log("Result: ", result);
            if(result.status === 401) {
                return window.alert(result.error);
            }
        } catch(error) {
            console.error("Error: ", error);
        }
    };

    return (
        <>
            <div className="login-div">
                <div className="login-style">
                    <div className="close-div" onClick={() => setIsOpen(false)}>x</div>
                    <h1 className="login-heading">Email Address</h1>
                    <br/>
                    <input
                        type="email"
                        className="login-email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <h1 className="login-heading">Password</h1>
                    <br/>
                    <input
                        type="password"
                        className="login-password"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <br/>
                    <button
                        type="submit"
                        className="login-button"
                        onClick={handleSubmit}
                    >Login</button>
                </div>
            </div>
        </>
    )
}