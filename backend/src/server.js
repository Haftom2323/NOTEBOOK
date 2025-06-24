import express from 'express';
import router from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';
import dotenv from 'dotenv';
import rateLimiter from '../middlewares/rateLimiter.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', router);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on Port: ", PORT);
    });
})



