import { MongoClient } from "mongodb";
import jwt from "jsonwebtoken";

const url = 'mongodb://localhost:27017';
const dbName = "Directory"

const dbConnect = async () =>{
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

//Promise not void but is it working?
export const login = async () => {
    console.log("req.body from insired the login function: ", req.body)
    const {email,password} = req.body;
    let db = await dbConnect();
    let dataPromise = db.collection("Employee").findOne({email:email});
    if(!(compare(password, dataPromise.password))) {
        return res.status(401).send({error: "Invalid Credentials", status: 401})
    } else {
        const token = jwt.sign({email: dataPromise.email})
        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({error:"error"})
        }
    }
}

//Promise is null need to fix
export const employeeDetails = async () => {
    const email = req.body;
    let db = await dbConnect();
    let dataPromise = await db.getCollection("Employee").findOne({'email': email})
    return dataPromise 
}

//Promise is void need to fix
export const searchByFirstName = async () => {
    const name = req.body.name;
    let db = await dbConnect();
    let dataPromise = db.collection("Employee").find({'firstName':name})
    return dataPromise //did this fix it?
}
