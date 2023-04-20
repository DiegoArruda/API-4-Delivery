const { DataTypes } = require("sequelize");
const { connection } = require("./database");

const Entregador = connection.define(
  "Entregador",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255],
      },
    },
    telefone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        matches: /^[\d-]+$/,
      },
    },
  },
  { paranoid: true, deletedAt: "destroyTime" }
);


module.exports = Entregador;
