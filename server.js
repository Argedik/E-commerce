const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());

const uri = process.env.MONGODB_DATABASE_URL; // Buraya MongoDB bağlantı bilgilerinizi ekleyin

app.get('/getdata', async (req, res) => {
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	try {
		await client.connect();

		const database = client.db('mealbox');
		const collection = database.collection('homepage-header');

		const data = await collection.findOne();

		console.log(data);

		res.send(data);
	} catch (e) {
		console.error(e);
	} finally {
		await client.close();
	}
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
