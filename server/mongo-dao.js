import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = "Directory"

const dbConnect = async () =>{
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

export const searchByFirstName = async (callback) => {
    let db = await dbConnect();
    let dataPromise = db.collection("Employee").find
}
