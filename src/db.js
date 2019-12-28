const mongoose = require('mongoose');

const URI = process.env.MONGO_URI ? process.env.MONGO_URI : 'mongodb://localhost/productos';

mongoose.Promise = global.Promise;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('DB conectada');
})