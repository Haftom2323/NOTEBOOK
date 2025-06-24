import express from 'express';
import router from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import rateLimiter from '../middlewares/rateLimiter.js';
import cors from 'cors';
import path from 'path';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

if(process.env.NODE_ENV !== 'production'){
    app.use(cors())
}

app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', router);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
})
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on Port: ", PORT);
    });
})



