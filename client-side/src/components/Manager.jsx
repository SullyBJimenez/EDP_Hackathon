import { Employee } from "./Employee";

export function Manager() {
    return (
        <>
            <h2>Your Direct Reports</h2>
            <Employee/> 
            <Employee/>
            <Employee/>
        </>
    )
}