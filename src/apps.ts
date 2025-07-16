import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user_routes';
import postRoutes from './routes/post_routes';

const app = express();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5001',
  credentials: true,
}));

app.use('/users', userRoutes);
app.use ('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('API RESTful para usuarios y posts funcionando!');
});

export default app;
// Este archivo configura la aplicación Express, incluyendo las rutas y middleware necesarios.