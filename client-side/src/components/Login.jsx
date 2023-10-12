import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("Clicked login");
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
                window.localStorage.setItem("_id", data._id);
                window.localStorage.setItem("avatar", data.avatar);
                window.localStorage.setItem("email", data.email);
                window.localStorage.setItem("phoneNumber", data.phoneNumber);
                window.localStorage.setItem("name", `${data.firstName} ${data.lastName}`);
                window.localStorage.setItem("jobRole", data.jobRole);
                window.localStorage.setItem("location", data.location);
                window.localStorage.setItem("salary", data.salary);
                window.localStorage.setItem("reports_to", data.reports_to);

                window.localStorage.setItem("loggedIn", true);
                navigate('/currentuser/')
            })
            .catch((error) => console.error(error));
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
