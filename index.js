const sequelize = require("./util/database");
const City = require("./models/city");
const Country = require("./models/country");
const User = require("./models/user");

const express = require("express");
const app = express();

const countries = require("./routes/countries");



City.hasOne(User);
Country.hasMany(City);

//Creating Tables...
sequelize
    .sync()
    .then(()=>{
        return Country.create()
        })
    .then(()=>{
        return City.create()
    })
    .then(()=>{
        return User.create()
    })
    .catch((err)=>{
        console.log(err.message);
    });
    console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzz");
// app.use("/api/countries", countries);