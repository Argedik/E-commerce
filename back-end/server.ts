import './models';
import { Request, Response } from 'express';
import express from 'express';
import cors from 'cors';

import './models/user';
import './models/product';

import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import imageRoutes from './routes/imageRoutes';
import sequelize from './database';
import path from 'path';

const app = express();

sequelize
	.sync({ force: false })
	.then(() => console.log('Tablolar oluşturuldu veya güncellendi.'))
	.catch((error: Error) => console.error('Tablolar oluşturulamadı:', error));

app.get('/', function (req: Request, res: Response) {
	res.sendFile(path.join(__dirname, '../front-end/index.html'));
});

// URL
app.get('/kurumsal', (req: Request, res: Response) => {});
app.get('/bireysel', (req: Request, res: Response) => {});
app.get('/etkinlik', (req: Request, res: Response) => {});
app.get('/sosyal-sorumluluk', (req: Request, res: Response) => {});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../front-end')));

var corsOptions = {
	origin: 'http://localhost:8080',
	optionsSuccessStatus: 200,
};

console.log('server calisti');
// Routes
app.use(cors(corsOptions));
app.use('/images', cors(), imageRoutes);
app.use('/users', userRoutes);
app.use('/products', productRoutes);
const port = process.env.PORT || 3500;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

export default app;
