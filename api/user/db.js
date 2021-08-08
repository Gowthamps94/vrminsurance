const {Client} = require('pg');


const client = new Client({
    user: "postgres",
    password:"Palanisamy94$",
    host: "localhost",
    port: 5432,
    database: "insurancevrm"
  });

  module.exports = client;