require("dotenv").config();
const env = process.env;

const config = {
  development: {
    username: `${env.DB_USERNAME}`,
    password: `${env.DB_PASSWORD}`,
    database: `${env.DB_NAME}`,
    host: `${env.DB_HOST}`,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};

module.exports = config;
