import { express } from "express";
import cors from cors;
import { MongoClient } from "mongodb";

const app = express();
const port = 2020;
const url = '';

app.use(express.json());
app.use(cors);

await MongoClient.connect(url)

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});