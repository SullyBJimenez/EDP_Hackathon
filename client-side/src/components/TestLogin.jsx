import { useState } from "react";
import { GetCurrentUser } from "../getCurrentUser";


export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   

    const handleSubmit = async () => {
        GetCurrentUser(email, password)
    };

    return (
        <>
            <div className="login-div">
                <div className="login-style">
                    <h1 className="login-heading">Email Address</h1>
                    <br />
                    <input
                        type="email"
                        className="login-email"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <h1 className="login-heading">Password</h1>
                    <br />
                    <input
                        type="password"
                        className="login-password"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <br />
                    <button type="submit" className="login-button" onClick={handleSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </>
    );
}
