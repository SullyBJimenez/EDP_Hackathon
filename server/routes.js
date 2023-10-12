import { express } from "express";
import { employeeDetails, login, searchByFirstName } from "./mongo-dao";
import jwt from "jsonwebtoken";

const app = express();

app.post('/employee-login', (req,res) => {
    login(function(data){
        res.send(data)
    })
})

app.post('/employeedetails', async(req, res) => {
    const { token } = req.body;
    try {
        const user = jwt.verify(token);
        console.log(user);
        const userEmail = user.email;
        employeeDetails(userEmail)
    }
     catch (error) {}
})

app.get('/searchbyname', (req,res) =>{
    searchByFirstName(function(data){
        res.send(data)
    })
    
})