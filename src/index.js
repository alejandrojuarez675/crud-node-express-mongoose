import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/users.routes';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
// routes
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Connected to port 3000')
});