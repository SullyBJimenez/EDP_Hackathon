
export const getData = async () => {
    const url = 'http://localhost:2020/'

    await fetch(url + "employeedetails", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body:  JSON.stringify({ token: window.localStorage.getItem("token") }),
    })
    .then((res) => res.json())
    .then((data) => {
        window.localStorage.setItem("email", data.data.email);
        window.localStorage.setItem("name", data.data.name);
    });
};