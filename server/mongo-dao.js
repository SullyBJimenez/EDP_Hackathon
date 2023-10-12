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

export const login = async () => {
    const {email,password} = req.body;
    let db = await dbConnect();
    let dataPromise = db.collection("Employee").findOne({email})
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

export const employeeDetails = async (email, callback) => {
    let de = await dbConnect();
    let dataPromise = db.collection("Employee").findOne({'email': email})
    dataPromise.then((employee) => callback(employee));
}

export const searchByFirstName = async (name, callback) => {
    let db = await dbConnect();
    let dataPromise = db.collection("Employee").find({'firstName':name})
    dataPromise.then((employee) => callback(employee))
}
