// const dotenv = require('dotenv');
// dotenv.config();

const { Customer } = require('./models');

(async function() {
  try {
    // const customers = await Customer.create(
    //   {
    //     id: 1,
    //     full_name: 'Foo'
    //   }
    // );
    const customers = await Customer.findAll();
    console.log(customers);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();


// MANUAL
// const dotenv = require('dotenv');
// dotenv.config();


// const sequelize = new Sequelize(
//   process.env.DATABASE_NAME,
//   process.env.DATABASE_USERNAME,
//   process.env.DATABASE_PASSWORD,
//   {
//     host: 'localhost',
//     port: 5432,
//     dialect: 'postgres'
//   }
// );

// (async function() {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');

//     const dataCustomers = await sequelize.query(`select 
//     customers.full_name as customer_name, orders.order_id, orders.dish_name
//     from customers full join orders on customers.id = orders.customer_id
//     order by customers.id;`);
//     const customers = dataCustomers[0];

//     console.log(customers);
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })();
