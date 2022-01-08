import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { dirname, join } from 'path'
import { fileURLToPath } from 'url';
import usersRouter from './routes/users-routes.js';
import authRouter from './routes/auth-routes.js';
import bodyParser from 'body-parser';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { credentials : true, origin: process.env.URL || '*' }

app.use(cors(corsOptions));
app.use(json());
app.use(bodyParser.json())
app.use(cookieParser());

app.use('/', express.static(join(__dirname, 'public')));
app.use('/api/users',  usersRouter);
app.use('/api/auth',  authRouter);

app.listen(PORT, ()=> {
    console.log(`listening on  ${PORT}`)
})