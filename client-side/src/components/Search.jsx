import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getData } from "../getData";

export const Search = () => {

    const [searchParameters, setSearchParameters] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        const raw = {
            firstName,
            lastName,
        };
        const url = 'http://localhost:2020/';

        const response = await fetch(`${url}searchbyname`, {
            method: "GET",
            mode: "cors",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(raw),
        })
        .then((res) =>res.json())
        .then(async (data) => {
            if(data.status === "ok") {
                window.localStorage.setItem("token", data.data);
                //await getData(); this is returning void

                //navigate(`/employee/${firstName}`);
            }
        });
        try {
            const result = await response.json();
            console.log("Result: ", result);
            if(result.status === 401){
                return window.alert(result.error);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <>
        <div>
            <input
                type="search"
                placeholder="Search by employee name"
                value={searchParameters}
                onChange={(e) => setSearchParameters(e.currentTarget.value)}
            />
            <button
                type="submit"
                className="search-button"
                onClick={handleSubmit}
            >Submit</button>
        </div>
        <div>
            Results

        </div>
        </>
    )
}