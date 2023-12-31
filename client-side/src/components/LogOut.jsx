import { useNavigate } from "react-router-dom"

export const LogOut = () => {

    const navigate = useNavigate()

    return (
        <>
            <button className="logout_button" onClick={() => {
                localStorage.clear() 
                navigate('/login/')}}>Log Out</button>
        </>
    )
}
