const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose
    .connect(process.env.DATABASE_URL || db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('mongo working'))
    .catch(err => console.log(err));

db.on('connected', function() {
    console.log(
        `MongoDB connected to ${db.db.databaseName} on ${db.host}:${db.port}`
    );
});
