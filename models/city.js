const Sequelize = require("sequelize");
const sequelize= require("../util/database");
const Country = require("./country");

const City =sequelize.define("city",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    }

});

module.exports=City;