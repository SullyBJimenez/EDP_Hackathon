import  express  from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = "Directory"

const dbConnect = async () =>{
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

const app = express();
const port = 2020;

app.use(express.json());
app.use(cors());

app.post("/loginConfirmation", async(req, res) => {
    const {email,password} = req.body;
    console.log({email})
    const db = await dbConnect();
    const doc = await db.collection("Employee").findOne({"email":email})
    if(password === doc?.password){
        return res.json(doc)
    }
    else {
        return res.status(401).send("Try again")
    }

})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});