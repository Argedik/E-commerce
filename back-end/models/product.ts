import { DataTypes } from 'sequelize';
import sequelize from '../database';

export const Product = sequelize.define('Product', {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	price: {
		type: DataTypes.DECIMAL(10, 2),
		allowNull: false,
	},
	imageUrl: {
		type: DataTypes.STRING,
		allowNull: true,
	},
	description: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
});

export default Product;