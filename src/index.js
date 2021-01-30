import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/users.routes';

const app = express();

// middlewares
app.use(morgan('dev'));

// routes
app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Connected to port 3000')
});