import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World!!!");
});

app.use('/api', routes);

app.listen(PORT, () =>{
    console.log('server is running on http://localhost:${PORT}');
});