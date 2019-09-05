const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Account = require('./api/account/create')
const Notification = require('./api/notifications/notifications')

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true })
	.then(() => {
		console.log('connected successfully')
	})
	.catch(() => {
		console.log('Connection failed');
	})

app.use(bodyParser.json());

app.use('/account/create', Account);
app.use('/notifications', Notification);


app.listen(port, () =>
	console.log(`listening on http://localhost:${port}`));

module.exports = app;
