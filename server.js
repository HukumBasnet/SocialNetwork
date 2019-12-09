const express = require('express');
const connectDB = require('./config/db');



const app = express();

//Connect Database
connectDB();

const PORT = process.env.PORT || 5000;


//Init middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Running")
})

//Load api
const Postapi = require('./routes/api/posts');
const authapi = require('./routes/api/auth');
const profileapi = require('./routes/api/profile')
const usersapi = require('./routes/api/users');

app.use('/api/users', usersapi);
app.use('/api/auth', authapi);
app.use('/api/profile', profileapi);
app.use('/api/posts', require('./routes/api/posts'))

//

app.listen(PORT, () => console.log(`Server is listening at ${ PORT }`));