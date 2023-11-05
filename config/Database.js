import { Sequelize } from "sequelize";
const db = new Sequelize({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME,
  dialect: "mysql",
  logging: false,
});

// const db = new Sequelize("crud_db", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

export default db;
