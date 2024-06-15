import express from 'express';
const app = express();
import cors from 'cors';

app.use(cors({
    origin: '*'
}))

import { leetcode } from './leetcode.js';
app.get('/', (req, res) => {
    res.send(`<b>API URL:</b>/<b style="color:crimson;">yourLeetcodeUsername</b>`)
});
app.get('/:id', leetcode);

app.listen(3000, () => {
    console.log(`App is running on port 3000`);
});

export default app