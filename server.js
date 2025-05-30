import express from "express";
import { createServer } from "http";
import {config} from "./src/config/config.js";
import userRouter from './src/users/userRouter.js'
import cors from 'cors';
import connectDB from "./src/config/connection.js"; 
connectDB()
// Define __dirname manually for ESM
const app = express();
const server = createServer(app);
app.use(cors())
app.get('/', (req, res, next) => {
    res.send('Hello world');
});
app.use('/auth', userRouter);
server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
