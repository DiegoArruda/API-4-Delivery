//Vai disponibilizar o uso de variáveis de ambiente
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerui = require("swagger-ui-express");

//Configuração do App
const app = express();
app.use(express.json()); //Possibilitar transitar dados usando JSON
app.use(morgan("tiny"));

//Configuração do Banco de Dados
const { connection, authenticate } = require("./database/database");
authenticate(connection);

//Definição de rotas
const rotaEntregadores = require("./routes/entregadores");
const rotaPedidos = require("./routes/pedidos");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api #4",
      version: "0.1.0",
      description: "API usada para estudos",
      contact: {},
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

//Juntar ao app as rotas
app.use(rotaEntregadores);
app.use(rotaPedidos);
const spacs = swaggerjsdoc(options);
app.use("/api-docs", swaggerui.serve, swaggerui.setup(spacs));

app.listen(4000, () => {
  // Gerar as tabelas a partir do model
  //Force = apaga tudo e recria as tabelas
  connection.sync();
  console.log("http://localhost:4000/");
});
