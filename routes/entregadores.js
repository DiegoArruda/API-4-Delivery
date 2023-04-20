/**
 * @swagger
 * tags:
 *   name: Entregadores
 *   description: Operações relacionadas a Entregadores
 *
 * /entregadores:
 *   post:
 *     summary: Cria um novo entregador
 *     tags: [Entregadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do entregador
 *                 example: Cebola
 *               telefone:
 *                 type: string
 *                 description: Telefone do entregador
 *                 example: 998407253
 *     responses:
 *       201:
 *         description: Entregador cadastrado com sucesso
 *         content:
 *           application/json:
 *            schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do entregador cadastrado
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   description: Nome do entregador
 *                   example: Cebola
 *                 telefone:
 *                   type: string
 *                   description: Telefone do entregador
 *                   example: 998407253
 *       500:
 *         description: Erro interno do servidor
 */
/**
 * @swagger
 * /entregadores:
 *   get:
 *     summary: Lista de todos os entregadores
 *     tags: [Entregadores]
 *     responses:
 *       200:
 *         description: Lista dos entregadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *
 */
/**
 * @swagger
 * /entregadores/{id}:
 *   get:
 *     summary: Obtém um entregador pelo ID
 *     tags: [Entregadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do entregador a ser obtido
 *     responses:
 *       200:
 *         description: Entregador encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do entregador obtido
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   description: Nome do entregador
 *                   example: Cebola
 *                 telefone:
 *                   type: string
 *                   description: Telefone do entregador
 *                   example: 9973222856
 *       404:
 *         description: Entregador não encontrado
 *       500:
 *         description: Erro interno do servidor
 */


/**
 * @swagger
 * /entregadores/nome/{nome}:
 *   get:
 *     summary: Encontra um entregador pelo nome
 *     tags: [Entregadores]
 *     parameters:
 *       - in: path
 *         name: nome
 *         schema:
 *           type: string
 *         required: true
 *         description: Nome do entregador a ser obtido
 *     responses:
 *       200:
 *         description: Nome encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do entregador
 *                   example: 1
 *                 nome:
 *                   type: string
 *                   description: Nome do entregador
 *                   example: Cebola
 *                 telefone:
 *                   type: string
 *                   description: Telefone do entregador
 *                   example: 987238873
 *       404:
 *         description: Entregador não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 /**
/**
 * @swagger
 * /entregadores/{id}:
 *   put:
 *    summary: Atualizar pedido pelo ID
 *    tags: [Entregadores]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do entregador a ser atualizado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *               nome:
 *                 type: string
 *                 description: Descrição do entregadores
 *                 example: nome:joão Da Silva
     
 *               telefone:
 *                 type: string
 *                 description: Numero do Entregador
 *                 example: (99)- 9-9999-9999
 *              
 *    responses:
 *       200:
 *         telefone: entregador editado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 
 *                 nome:
 *                   type: string
 *                   description: Descrição do entregador editado
 *                   example: Joao
 *                 telefone:
 *                   type: string
 *                   description: Telefone do entregador
 *                   example: 987238873

 *       404:
 *         description: Entregador não encontrado
 *       500:
 *         description: Erro interno do servidor
 *   
 

  *   delete:
 *     summary: Excluir entregador pelo ID
 *     tags: [Entregadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do entregador
 *
 *     responses:
 *       200:
 *         description: entregador excluido
 *       404:
 *         description: Erro interno do servidor
 *  */
/**  
 * @swagger
 * /entregadores/{id}/pedidos/{pedidoId}:
 *   put:
 *     summary: Vincula um pedido existente a um entregador
 *     tags: [Entregadores]
 *       
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do entregador a ser vinculado
 *         schema:
 *           type: integer
 *       - name: pedidoId
 *         in: path
 *         required: true
 *         description: ID do pedido a ser vinculado
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Pedido vinculado ao entregador com sucesso
 *       404:
 *         description: Entregador ou pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 */


const { Router } = require("express");
const Entregador = require("../database/entregador");
const { Op } = require("sequelize");
const Pedido = require("../database/pedido");

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


// Vincular Pedido ao Entregador
router.put("/entregadores/:id/pedidos/:idPedido", async (req, res) => {
  const { id, idPedido } = req.params;
  try {
    const entregador = await Entregador.findOne({ where: { id } });
    const pedido = await Pedido.findOne({
      where: { id: idPedido },
      include: [Entregador],
    });

    if (entregador && pedido) {
      pedido.set("EntregadorId", id);
      await pedido.save();
      res
        .status(200)
        .json({ message: "Pedido vinculado ao entregador com sucesso!" });
    } else {
      res.status(404).json({ message: "Entregador ou pedido não encontrado!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
