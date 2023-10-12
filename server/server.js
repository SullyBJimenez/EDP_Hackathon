import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017';
const dbName = "Directory"

const dbConnect = async () => {
    let client = new MongoClient(url);
    await client.connect();
    let db = client.db(dbName);
    return db;
}

const app = express();
const port = 2020;

app.use(express.json());
app.use(cors());

app.post("/loginConfirmation", async (req, res) => {
    const { email, password } = req.body;
    const db = await dbConnect();
    const doc = await db.collection("Employee").findOne({ "email": email });
    if (password === doc?.password) {
        return res.json(doc)
    }
    else {
        return res.status(401).send("Try again")
    }

});

app.post("/search", async (req, res) => {
    const { query } = req.body;
    const final_query = query.split(" ")[0];
    const db = await dbConnect();
    const doc = await db.collection("Employee").findOne({ "firstName": final_query });
    if (final_query === doc?.firstName) {
        return res.json(doc);
    }
    else {
        return res.status(401).send("No employees found.");
    }

});

app.get("/employee/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const db = await dbConnect();
        const doc = await db.collection("Employee").findOne({ "_id": id });
        if (!doc) {
            res.json({ error: "No employee found" });
        }
        else {
            console.log(doc);
            res.json(doc);
        }
    }
    catch (error) {
        res.status(500).send(`No employee with id: ${id}`);
    }
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});