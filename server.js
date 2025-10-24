import 'dotenv/config';
import express from 'express';
// Routes
import plantRouter from "./routes/plants.js";

const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello! This is Wilt's backend!")
})

app.use(express.json())

app.use("/api/plants", plantRouter)


app.listen(port, () => {
    console.log(`Wilt backend listening on port ${port}`);
})