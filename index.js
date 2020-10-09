const server = require('./server.js');

const PORT = process.env.PORT || 6500;

server.listen(PORT, () => {
    console.log(`\nListening on ${PORT} ...\n`)
});