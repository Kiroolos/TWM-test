const express = require("express");
const {
    getCountry,
    addCountry,
    updateCountry,
    deleteCountry
} = require("../controllers/countries/index");
const router = express.Router();
const Sequelize = require("sequelize");


router.route("/").get(getCountry);
