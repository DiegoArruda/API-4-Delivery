const { Router } = require("express");
const Entregador = require("../database/entregador");
const { route } = require("./pedidos");

const router = Router();

//Adicionar Entregador
router.post("/entregadores", async (req, res) => {
  const { nome, telefone } = req.body;
  try {
    const entregador = await Entregador.create({ nome, telefone });
    res.status(200).json({ entregador: entregador });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Lista de Entregadores
router.get("/entregadores", async (req, res) => {
  try {
    const listaEntregadores = await Entregador.findAll();
    res.json(listaEntregadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Procura de entregadores
router.get("/entregadores/:id", async (req, res) => {
  const { id } = req.params;
  const entregador = await Entregador.findByPk(id);

  try {
    if (entregador) {
      res.json(entregador);
    } else res.status(404).json({ message: "Entregador não encontrado." });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//Atualizar Entregador
router.put("/entregadores/:id", async (req, res) => {
  const { nome, telefone } = req.body;
  const entregador = await Entregador.findByPk(req.params.id);

  try {
  } catch (err) {}
});



module.exports = router;
