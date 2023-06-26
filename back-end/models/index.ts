import User from './user';
import Product from './product';

User.hasMany(Product, { as: 'products' });
Product.belongsTo(User, { as: 'user' });

export { User, Product };