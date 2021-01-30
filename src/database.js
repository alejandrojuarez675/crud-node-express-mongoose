import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect('mongodb://localhost/crud-node-express-mongo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,

    })
}
connect();

export default mongoose.connection;