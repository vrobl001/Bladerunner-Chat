const express = require('express');
const logger = require('morgan');
const serveFavicon = require('serve-favicon');
const path = require('path');

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('onlineUser', user => {
        io.emit('onlineUser', user);
    });

    socket.on('offlineUser', user => {
        io.emit('offlineUser', user);
    });

    socket.on('sendMessages', messages => {
        io.emit('sendMessages', messages);
    });
});

let heroku = 'https://enigmatic-dawn-95873.herokuapp.com';

http.listen(heroku, () => {
    console.log(`Socket.io is listening on port ${heroku}`);
});

require('dotenv').config();
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

app.use(serveFavicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require('./config/auth'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/messages', require('./routes/api/messages'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express is listening on port: ${port}`);
});
