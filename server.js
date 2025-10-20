import 'dotenv/config';
import express from 'express';

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Wilt backend listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.send("Hello! This is Wilt's backend!")
})