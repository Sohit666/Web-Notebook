const connectDB = require('./db');
const express = require('express')

const app = express()
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
const server = async () => {

    await connectDB();
    await app.listen(port, () => {
        console.log(`your server is running at http://localhost:${port}`)
    })

}
server();
