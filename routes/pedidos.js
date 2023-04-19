const { Router } = require("express");
const Pedido = require("../database/pedido");

const router = Router();

//Adicionar um novo pedido
router.post("/pedidos", async (req, res) => {
  const { descricao, endereco_entrega, urgencia } = req.body;
  try {
    const pedido = await Pedido.create({
      descricao,
      endereco_entrega,
      urgencia,
    });
    res.status(201).json(pedido);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Lista de pedidos
router.get("/pedidos", async (req, res) => {
  try {
    const listaPedidos = await Pedido.findAll();
    res.json(listaPedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Procura de pedidos
router.get("/pedidos/:id", async (req, res) => {
  const { id } = req.params;
  const pedido = await Pedido.findByPk(id);

  try {
    if (pedido) {
      res.json(pedido);
    } else res.status(404).json({ message: err.message });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

//Atualizar pedido
router.put("/pedidos/:id", async (req, res) => {
  const { descricao, endereco_entrega, urgencia } = req.body;
  const pedido = await Pedido.findByPk(req.params.id);

  try {
    if (pedido) {
      await Pedido.update(
        { descricao, endereco_entrega, urgencia },
        { where: { id: req.params.id } }
      );
      res.json({ message: "Pedido atualizado com sucesso." });
    } else res.status(404).json({ message: "Pedido não encontrado" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Excluir pedido
router.delete("/pedidos/:id", async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);

  if (pedido) {
    await pedido.destroy();
    res.json({ message: "O Pedido foi deletado" });
  } else res.status(404).json({ message: "Pedido não encontrado" });
});

module.exports = router;
