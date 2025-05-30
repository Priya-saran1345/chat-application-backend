import { Router } from "express";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { dirname, join } from 'path';
import { createReadStream } from "fs";
import { fileURLToPath } from 'url';
const router = Router();

// router.post('/', (req, res, next) => {
//     const filePath = join(__dirname, '../data/data.json');
//     const chatFile = createReadStream(filePath);
//     chatFile.on('error', (err) => {
//         console.error('File read error:', err);
//         res.status(500).send('Could not read file.');
//     });
//     res.setHeader('Content-Type', 'application/javascript');
//     chatFile.pipe(res);
// });
router.post('/signup', (req, res, next) => {
    res.send({message:"signup api"})
});



export default router;