/**
 * @swagger
 *
 *
 * tags:
 *   name: Pedidos
 *   description: Operações relacionadas a Pedidos
 *
 *
 * /pedidos:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *                 description: Descrição do pedido
 *                 example: Pedido de pizza de calabresa
 *               endereco_entrega:
 *                 type: string
 *                 description: Endereço de entrega do pedido
 *                 example: Rua das Flores, 123
 *               urgencia:
 *                 type: string
 *                 description: Urgência do pedido
 *                 example: alta
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido criado
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido criado
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido criado
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido criado
 *                   example: alta
 *       400:
 *         description: Campos inválidos fornecidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Listar todos os pedidos
 *     tags: [Pedidos]
 *     responses:
 *       200:
 *         description: Lista de Pedidos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: Lista de Pedidos
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido 
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido realizado
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido editado
 *                   example: 1
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor * 
 */

/**
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     summary: Obtém um pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *
 *         description: ID do pedido a ser obtido
 *     responses:
 *       200:
 *         description: Pedido obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido obtido
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido obtido
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido obtido
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido obtido
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido obtido
 *                   example: 1
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /pedidos/{id}:
 *   put:
 *    summary: Atualizar pedido pelo ID
 *    tags: [Pedidos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do pedido a ser atualizado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *               descricao:
 *                 type: string
 *                 description: Descrição do pedido
 *                 example: Pedido de pizza de calabresa
 *               endereco_entrega:
 *                 type: string
 *                 description: Endereço de entrega do pedido
 *                 example: Rua das Flores, 123
 *               urgencia:
 *                 type: string
 *                 description: Urgência do pedido
 *                 example: alta
 *    responses:
 *       200:
 *         description: Pedido editado com sucesso
 * 
 *
 */
/**
 * @swagger
 * /pedidos/descricao/{descricao}:
 *   get:
 *     summary: Obtém um pedido pela descrição
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: Descrição
 *         schema:
 *           type: string
 *         required: true
 *         description: Descrição do pedido a ser obtido
 *     responses:
 *       200:
 *         description: Pedido obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido editado
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido editado
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido editado
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido realizado
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido editado
 *                   example: 1
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor                
 *
 */
/**
 * @swagger
 * /pedidos/endereco_entrega/{endereco}:
 *   get:
 *     summary: Obtém um pedido pelo endereço
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: endereco
 *         schema:
 *           type: string
 *         required: true
 *         description: endereco do pedido a ser obtido
 *     responses:
 *       200:
 *         description: Pedido obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido obtido
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido obtido
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido obtido
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido obtido
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido obtido
 *                   example: 1
 *       404:
 *         description: Não há pedidos com esse endereço
 *       500:
 *         description: Erro interno do servidor

 */

/**
 * @swagger
 * /pedidos/{id}:
 *   put:
 *    summary: Atualizar pedido pelo ID
 *    tags: [Pedidos]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: ID do pedido a ser atualizado
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            properties:
 *               descricao:
 *                 type: string
 *                 description: Descrição do pedido
 *                 example: Pedido de pizza de calabresa
 *               endereco_entrega:
 *                 type: string
 *                 description: Endereço de entrega do pedido
 *                 example: Rua das Flores, 123
 *               urgencia:
 *                 type: string
 *                 description: Urgência do pedido
 *                 example: alta
 *    responses:
 *       200:
 *         description: Pedido editado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido editado
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido editado
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido editado
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido editado
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido editado
 *                   example: 1
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 *
 *
 *   delete:
 *     summary: Excluir pedido pelo ID
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do pedido
 *
 *     responses:
 *       200:
 *         description: Pedido excluido
 *       404:
 *         description: Pedido não encontrado
 */
/**
 * /**
 * @swagger
 * /pedidos/urgencia/{urgencia}:
 *   get:
 *     summary: Obtém um pedido pela urgência
 *     tags: [Pedidos]
 *     parameters:
 *       - in: path
 *         name: urgencia
 *         schema:
 *           type: string
 *         required: true
 *         description: urgencia do pedido a ser obtido
 *     responses:
 *       200:
 *         description: Pedido obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do pedido editado
 *                   example: 1
 *                 descricao:
 *                   type: string
 *                   description: Descrição do pedido editado
 *                   example: Pedido de pizza de calabresa
 *                 endereco_entrega:
 *                   type: string
 *                   description: Endereço de entrega do pedido editado
 *                   example: Rua das Flores, 123
 *                 urgencia:
 *                   type: string
 *                   description: Urgência do pedido editado
 *                   example: alta
 *                 entregadorId:
 *                   type: integer
 *                   description: ID do entregador vinculado ao pedido editado
 *                   example: 1
 *       404:
 *         description: Pedido não encontrado
 *       500:
 *         description: Erro interno do servidor
 * 
 */





const { Router } = require("express");
const Pedido = require("../database/pedido");
const { Op } = require("sequelize");
const Entregador = require("../database/entregador");

const router = Router();

//Adicionar um novo pedido ok
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
    const listaPedidos = await Pedido.findAll({ include: [Entregador] });
    res.json(listaPedidos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Procura de pedidos
router.get("/pedidos/:id", async (req, res) => {
  const pedido = await Pedido.findOne({
    where: { id: req.params.id },
    include: [Entregador],
  });

  try {
    if (pedido) {
      res.json(pedido);
    } else res.status(404).json({ message: err.message });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

// Rota para filtrar pedidos por descrição
router.get("/pedidos/descricao/:descricao", async (req, res) => {
  const pedidos = await Pedido.findAll({
    where: { descricao: { [Op.like]: `%${req.params.descricao}%` } },
  });
  if (pedidos) {
    res.json(pedidos);
  } else res.status(404).json({ message: "Descrição não encontrada" });
});

// Rota para filtrar pedidos por endereço de entrega
router.get("/pedidos/endereco_entrega/:endereco", async (req, res) => {
  const pedidos = await Pedido.findAll({
    //Com o Op é possível pesquisar por apenas caracteres contidos
    where: { endereco_entrega: { [Op.like]: `%${req.params.endereco}%` } },
  });
  if (pedidos) {
    res.json(pedidos);
  } else res.status(404).json({ message: "Não há pedidos com esse endereço" });
});

// Rota para filtrar pedidos por urgência
router.get("/pedidos/urgencia/:urgencia", async (req, res) => {
  const pedidos = await Pedido.findAll({
    where: { urgencia: req.params.urgencia },
  });
  if (pedidos) {
    res.json(pedidos);
  } else res.status(404).json({ message: "Não há pedidos com essa urgencia" });
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
