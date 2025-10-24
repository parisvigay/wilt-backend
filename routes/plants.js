import express from 'express';
import supabase from '../db.js';

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Plant List")
})

router.post("/new", async (req, res) => {
    const response = await supabase
        .from('plants')
        .insert(req.body)

    if (response.error) {
        return res.status(400).json({ error: response.error.message })
    }
    
    res.status(201).json(response.data)
})

export default router;