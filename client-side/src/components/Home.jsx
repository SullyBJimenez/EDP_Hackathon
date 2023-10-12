import { Link } from "react-router-dom";


export function Home(){
    return (
        <>
            <h1>Welcome to the Employee Directory</h1>
            <h3>Please login to access employee</h3>
            <Link className="login-link" to="/login/">Login In</Link>
        </>
    )
}