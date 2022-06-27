const { addCountry } = require("./addCountry");
const { deleteCountry } = require("./deleteCountry");
const { updateCountry } = require("./updateCountry");
const { getCountry } = require("./getCountry");
// const { getCountries } = require("./getCountries");

module.exports = {
  getCountry,
  addCountry,
  updateCountry,
  deleteCountry
};
