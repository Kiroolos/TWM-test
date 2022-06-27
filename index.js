const sequelize = require("./util/database");
const City = require("./models/city");
const Country = require("./models/country");
const User = require("./models/user");

City.hasOne(User);
Country.hasMany(City);

sequelize
    .sync({force: true})
    .then((result)=>{
        return Country.create({name:"Egypt"})
        // console.log(result);
    }).then((result)=>{
        return City.create({name:"Hurghada",countryCode:1})
        // console.log(result);
    }).then((result)=>{
        return User.create({name:"Kiroloss",cityID:1})
         console.log(result);
    })
    .catch((err)=>{
        console.log(err.message);
    });