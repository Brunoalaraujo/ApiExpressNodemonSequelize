const express = require("express")
const produtoController = require("../controllers/produtoController")
const routes = express.Router()

routes.get("/produto", produtoController.listarPorduto)
routes.post("/produto", produtoController.cadastrarProduto)
routes.delete("/produto/:id/deletar", produtoController.deletarProduto)
routes.put("/produto/:id/atualizar", produtoController.atualizarProduto)

module.exports = routes