import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Database
const sequelize = new Sequelize(
	process.env.DB_NAME!,
	process.env.DB_USER!,
	process.env.DB_PASS!,
	{
		host: process.env.DB_HOST,
		dialect: 'postgres',
	}
);

sequelize
	.authenticate()
	.then(() => console.log('Database connected...'))
	.catch((err: Error) => console.log('Error: ' + err));

export default sequelize;