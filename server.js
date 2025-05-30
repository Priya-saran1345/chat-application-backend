import express from "express";
import { createServer } from "http";
import {config} from "./config/config.js";
import userRouter from './users/userRouter.js'
import cors from 'cors';
// Define __dirname manually for ESM
const app = express();
const server = createServer(app);
app.use(cors())

app.get('/', (req, res, next) => {
    res.send('Hello world');
});
app.use('/chats', userRouter);

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
