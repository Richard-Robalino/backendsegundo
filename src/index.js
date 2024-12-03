import express from 'express';
import { readFile } from 'fs/promises';

const app = express();
const port = process.env.PORT || 3000;

app.get('/db', async (req, res) => {
    try {
        const data = await readFile('./db.json', 'utf8');
        res.json(JSON.parse(data));
    } catch (error) {
        res.status(500).send('Error reading database file.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
