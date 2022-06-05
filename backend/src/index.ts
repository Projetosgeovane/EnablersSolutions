import express from 'express';
import routes from './routes';
import cors from 'cors';
import handleError from './middlewares/handleError';

const app = express();

app.use(express.json());
app.use(cors());
app.use(handleError)
app.use(routes);

export default app;