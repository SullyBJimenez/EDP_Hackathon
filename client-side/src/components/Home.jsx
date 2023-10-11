import { Link } from "react-router-dom";


export function Home(){
    return (
        <>
            <h1>Welcome to the login page</h1>
            <h3>Please verify your information to access the Employee Directory</h3>
            <Link className="login-link" to="/login/">Login In</Link>
        </>
    )
}