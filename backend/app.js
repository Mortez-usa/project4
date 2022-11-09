const express = require('express');
const app = express();
const cors = require('cors');
// const mongoose = require('mongoose');

const User = require('./models/User');

app.set('port', process.env.PORT || 4000);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const mongoose = require('./db/connections');

app.post('/api/register', async (req, res) => {
	console.log(req.body);
	try {
		await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
		});
		res.json({ status: 'ok' });
	} catch (err) {
		res.json({ status: 'err', err: 'Email should be unique' });
	}
});

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
		password: req.body.password,
	});

	if (user) {
		return res.json({ status: '✅ ok', user: true });
	} else {
		return res.json({ status: 'err', user: false });
	}
});

app.listen(app.get('port'), () => {
	console.log(`✅ Listening on port ${app.get('port')}`);
});
