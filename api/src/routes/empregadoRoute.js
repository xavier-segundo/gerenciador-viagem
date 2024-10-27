import express from "express";
import {
  cadastrarEmpregado,
  getEmpregadosComCargos,
  getEmpregadoPorId,
  updateEmpregado,
  deleteEmpregado,
} from "../controllers/EmpregadoController.js";
import { verificarToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @openapi
 * /empregados:
 *   get:
 *     summary: Lista todos os empregados cadastrados com seus respectivos cargos
 *     tags:
 *       - Empregado
 *     operationId: listarEmpregados
 *     responses:
 *       200:
 *         description: Lista de todos os empregados e seus respectivos cargos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Empregado'
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/", verificarToken, getEmpregadosComCargos);

/**
 * @openapi
 * /empregados/{idEmpregado}:
 *   get:
 *     summary: Busca um empregado pelo ID com seus respectivos cargos
 *     tags:
 *       - Empregado
 *     operationId: buscarEmpregadoPorId
 *     parameters:
 *       - name: idEmpregado
 *         in: path
 *         required: true
 *         description: ID único do empregado.
 *         schema:
 *           type: number
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalhes do empregado e seu respectivo cargo.
 *       404:
 *         description: Empregado não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.get("/:idEmpregado", verificarToken, getEmpregadoPorId);

/**
 * @openapi
 * /empregados:
 *   post:
 *     summary: Registra um novo empregado
 *     tags:
 *       - Empregado
 *     operationId: cadastrarEmpregado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeEmpregado:
 *                 type: string
 *                 description: O nome do empregado.
 *                 example: "João Silva"
 *               email:
 *                 type: string
 *                 description: E-mail do empregado.
 *                 example: "joao.silva@empresa.com"
 *               senha:
 *                 type: string
 *                 description: A senha do empregado.
 *                 example: "senhaSegura123"
 *               idCargo:
 *                 type: number
 *                 description: O ID do cargo associado ao empregado.
 *                 example: 1
 *               ativo:
 *                 type: boolean
 *                 description: Status do empregado (ativo ou inativo).
 *                 example: true
 *     responses:
 *       201:
 *         description: Empregado criado com sucesso.
 *       400:
 *         description: Solicitação inválida (Bad Request).
 *       404:
 *         description: Cargo não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.post("/", cadastrarEmpregado);

/**
 * @openapi
 * /empregados/{idEmpregado}:
 *   put:
 *     summary: Atualiza os detalhes de um empregado pelo seu ID.
 *     tags:
 *       - Empregado
 *     operationId: atualizarEmpregado
 *     parameters:
 *       - name: idEmpregado
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *         description: O ID único do empregado.
 *         example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nomeEmpregado:
 *                 type: string
 *                 description: O novo nome do empregado.
 *                 example: "João Silva Atualizado"
 *               email:
 *                 type: string
 *                 description: O novo e-mail do empregado.
 *                 example: "joao.atualizado@empresa.com"
 *               ativo:
 *                 type: boolean
 *                 description: Status atualizado do empregado (ativo ou inativo).
 *                 example: true
 *               idCargo:
 *                 type: number
 *                 description: ID atualizado do cargo.
 *                 example: 1
 *     responses:
 *       200:
 *         description: Detalhes do empregado atualizado.
 *       404:
 *         description: Empregado não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.put("/:idEmpregado", verificarToken, updateEmpregado);

/**
 * @openapi
 * /empregados/{idEmpregado}:
 *   delete:
 *     summary: Exclui um empregado pelo seu ID.
 *     tags:
 *       - Empregado
 *     operationId: excluirEmpregado
 *     parameters:
 *       - name: idEmpregado
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *         description: O ID único do empregado.
 *         example: 1
 *     responses:
 *       200:
 *         description: Mensagem de sucesso confirmando a exclusão.
 *       404:
 *         description: Empregado não encontrado.
 *       500:
 *         description: Erro interno do servidor.
 */
router.delete("/:idEmpregado", verificarToken, deleteEmpregado);

export default router;
