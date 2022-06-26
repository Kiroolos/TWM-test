const express = require('express');
const sequelize = require('sequelize');
const sequelize = new Sequelize("dbtest","root","password",{
  dialect: "mysql",
  host: "localhost",
});

const app = express();
module.exports= sequelize;