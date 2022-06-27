const asyncHandler = require("../../middleware/async");
const sequelize = require("../../util/database");
const { Countries } = sequelize.models;
const { execludeAttribute} = require("./_functions");

exports.getCountry = asyncHandler(async (req, res, next) => {

    const country = await Countries.findByPk(req.params.id, {
        ...execludeAttribute,
        // ...permissionsInclude,
      });

    if (!country) {
        return next(
          new ErrorResponse(`Country with ID ${req.params.id} not found`, 404)
        );
    }

    res.status(200).json({ success: true, data: user.dataValues });

});