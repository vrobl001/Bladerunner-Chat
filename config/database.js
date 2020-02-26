const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology
});

db.on('connected', function() {
    console.log(
        `MongoDB connected to ${db.db.databaseName} on ${db.host}:${db.port}`
    );
});
