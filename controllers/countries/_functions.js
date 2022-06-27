const sequelize = require("../../util/database");
const { Op } = require("sequelize");
const { Users, Permissions, user_has_Permission, UserRoles } = sequelize.models;

const execludeAttribute = {
  attributes: {
    exclude: ["createdAt", "updatedAt"],
  },
};
// const permissionsInclude = {
//   include: [
//     {
//       model: Permissions,
//       // exclude: ["user_has_Permission"],
//       as: "All_Permissions",
//       attributes: ["name"],
//       through: { attributes: [] },
//     },
//   ],
// };