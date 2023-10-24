const { DataTypes } = require("sequelize");

module.exports = (Sequelize) => {
  Sequelize.define("genres", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
