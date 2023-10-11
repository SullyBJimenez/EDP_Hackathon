import  express  from "express";
import cors from "cors";

const app = express();
const port = 2020;

app.use(express.json());
app.use(cors);



app.listen(port, () => {
    console.log('Listening on port: ' + port);
});