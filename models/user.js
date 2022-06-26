const Sequelize = require("sequelize");
const sequelize= require("../util/database");
const City = require("./city");
const Users =sequelize.define("user",{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
});
Users.hasOne(City,{
    foreignKey:{
        id: 'city_id'
    }
});

module.exports=Users;