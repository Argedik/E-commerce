// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// // Database
// const sequelize = new Sequelize(
// 	process.env.DB_NAME!,
// 	process.env.DB_USER!,
// 	process.env.DB_PASS!,
// 	{
// 		host: process.env.DB_HOST,
// 		dialect: 'postgres',
// 	}
// );

// sequelize
// 	.authenticate()
// 	.then(() => console.log('Database connected...'))
// 	.catch((err: Error) => console.log('Error: ' + err));

// export default sequelize;

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		await client.connect();
		await client.db('admin').command({ ping: 1 });
		console.log(
			'Pinged your deployment. You successfully connected to MongoDB!'
		);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);
