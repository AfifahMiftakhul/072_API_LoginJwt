const express = require('express');
const connectDatabase = require('./config/db');

const app = express();
const PORT = 3000; // ini port

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', require('./routes/api'));

async function startServer() {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`); // nama http
    });
}

startServer();