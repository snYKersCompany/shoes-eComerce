const mongoose = require('mongoose')

const url = 'mongodb+srv://UserMaster:hmBKrzA9XQPVHVUP@cluster0.elzma4t.mongodb.net/snikersdb?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)
mongoose.connect(url)
.then(()=>console.log('CONEXION A MONGO EXITOSA'))
.catch((err)=> console.log(`El error de conexion es: ${err}`))



// ======================= MODELS =======================

// const ProductsSchema = mongoose.Schema({
//   name: String,
// })
// const ProductsModel = mongoose.model('products', ProductsSchema) //export 

// ======================================================

// const mostrar = async ()=>{
//   // console.log('Llegue hasta aca')
//   const products = await ProductsModel.find()
//   console.log(products)
// }
// mostrar()

module.exports = {
}





// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const fs = require("fs");
// const path = require("path");
// const { DB_URL } = process.env;
// // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`

// const sequelize = new Sequelize(
//   DB_URL,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//     dialectOptions: {
//       ssl: {
//         require: true
//       }
//     }
//   }
// );
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach((model) => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [
//   entry[0][0].toUpperCase() + entry[0].slice(1),
//   entry[1],
// ]);
// sequelize.models = Object.fromEntries(capsEntries);

// // En sequelize.models están todos los modelos importados como propiedades
// // Para relacionarlos hacemos un destructuring
// const { Brand, Category, Order, Product, Stock, User } = sequelize.models;

// //RELACIONES

// User.hasMany(Order); //1 user puede tener muchas ordenes.
// Order.belongsTo(User); //1 orden, pertenece a 1 usuario.

// Order.hasMany(Product); //1 orden, puede tener muchos productos.
// Product.belongsTo(Order); // 1 producto pertenece a 1 orden.

// Product.belongsToMany(Stock, {through: "Stock_product"}); // 1 producto puede tener mucho stock.
// Stock.belongsToMany(Product, {through: "Stock_product"}); // el stock puede ser de muchos productos.

// Product.belongsToMany(Category, {through: "Category_product"}); //1 producto puede tener muchas categorias
// Category.belongsToMany(Product, {through: "Category_product"}); // la categoria puede tener muchos productos.

// Brand.hasMany(Product); // 1 marca puede tener muchos productos.
// Product.belongsTo(Brand); // 1 producto pertenece a 1 sola marca.







// module.exports = {
//   // ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   connect: client, // para importart la conexión { conn } = require('./db.js');
// };