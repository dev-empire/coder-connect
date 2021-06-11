require('dotenv').config();
const express = require('express');
const dbConnect = require('./utils/dbConnect');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnect();

app.get('/', (req, res) => {
	res.status(200).send('This is an online chatting platform...');
});

app.use('/api', require('./routes/user'));

app.listen(4100, () => console.log('Server started...'));
