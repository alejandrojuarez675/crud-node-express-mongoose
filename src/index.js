import express from 'express';
import morgan from 'morgan';

const app = express();

// middlewares
app.use(morgan('dev'));

// routes
app.get('/', (_req, res) => {
    res.json('Hello world');
})

app.listen(3000, () => {
    console.log('Connected to port 3000')
});