const { Router } = require("express");
const Entregador = require("../database/entregador");
const { Op } = require("sequelize");

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

// Rota para filtrar entregadores por nome
router.get("/entregadores/nome/:nome", async (req, res) => {
  const entregadores = await Entregador.findAll({
    where: { nome: { [Op.like]: `%${req.params.nome}%` } },
  });
  if (entregadores) {
    res.json(entregadores);
  } else res.json(404).json({ message: "Nome não encontrado" });
});

// Rota para filtrar entregadores por telefone
router.get("/entregadores/telefone/:telefone", async (req, res) => {
  const entregadores = await Entregador.findAll({
    where: { telefone: { [Op.like]: `%${req.params.telefone}` } },
  });
  try {
    if (entregadores) {
      res.json(entregadores);
    } else res.json(404).json({ message: "Número não encontrado" });
  } catch (err) {
    res.json(500).json({ message: err.message });
  }
});

//Atualizar Entregador
router.put("/entregadores/:id", async (req, res) => {
  const { nome, telefone } = req.body;
  const entregador = await Entregador.findByPk(req.params.id);

  try {
    if (entregador) {
      await Entregador.update(
        { nome, telefone },
        { where: { id: req.params.id } }
      );
      res.status(200).json({ message: "Entregador atualizado com sucesso." });
    } else res.status(404).json({ message: "Entregador não encontrado" });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//Excluir Entregador
router.delete("/entregadores/:id", async (req, res) => {
  const entregador = await Entregador.findByPk(req.params.id);
  if (entregador) {
    await entregador.destroy();
    res.status(200).json({ message: "Entregador excluido" });
  } else res.status(404).json({ message: "Entregador não encontrado" });
});

//Hard-delete Entregador (Mais opções para isso)
/* router.delete("/entregadores/:id", async (req, res) => {
  const entregador = await Entregador.findByPk(req.params.id);
  if (entregador) {
    await entregador.destroy({ force: true });
    res.status(200).json({ message: "Entregador excluido" });
  } else res.status(404).json({ message: "Entregador não encontrado" });
}); */

module.exports = router;
