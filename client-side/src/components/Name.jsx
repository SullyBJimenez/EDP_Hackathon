
export function Name(props){
    const name = localStorage.getItem("Name")
    return (
        <>
            <h3>Name</h3>
            <p>{props.name}</p>
        </>
    )
}