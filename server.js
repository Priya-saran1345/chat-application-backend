import express from "express";
import { createReadStream } from "fs";
import { createServer } from "http";
import { fileURLToPath } from 'url';
import {config} from "./config/config.js";
import { dirname, join } from 'path';
import cors from 'cors';
// Define __dirname manually for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const server = createServer(app);
app.use(cors())

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

app.get('/chats', (req, res, next) => {
    const filePath = join(__dirname, './data/data.json');
    const chatFile = createReadStream(filePath);
    chatFile.on('error', (err) => {
        console.error('File read error:', err);
        res.status(500).send('Could not read file.');
    });
    res.setHeader('Content-Type', 'application/javascript');
    chatFile.pipe(res);
});

server.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
