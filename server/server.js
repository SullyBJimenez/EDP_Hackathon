import { express } from "express";
import cors from cors;
import { MongoClient } from "mongodb";

const app = express();
const port = 2020;
const url = '';

app.use(express.json());
app.use(cors);

await MongoClient.connect(url)

app.post("/profile-login", async(req,res) => {
    console.log("request: " , req)
    const {email,password} = req.body;

    const profile = await profileModel.findOne({email})
    if(!(await bcrypt.compare(password, profile.password))){
        return res.status(401).send({error: "Invalid Credentials", status: 401})
    } else {
        const token = jwt.sign({email: profile.email}, process.env.JWT_SECRET)
        if(res.status(201)){
            return res.json({status: "ok", data: token});
        } else {
            return res.json({error: "error"})
        }
    }

    
})

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});