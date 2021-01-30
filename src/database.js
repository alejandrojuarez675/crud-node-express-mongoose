import mongoose from 'mongoose';

async function connect() {
    await mongoose.connect('mongodb://localhost/crud-node-express-mongo', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}
connect();

export default mongoose.connection;