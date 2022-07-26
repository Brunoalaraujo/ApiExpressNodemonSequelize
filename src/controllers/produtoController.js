const { Produtos, Fabricantes, Categorias } = require("../models")

const produtoController = {
    async listarPorduto(req, res){
        const listaDePordutos = await Produtos.findAll({
            include: Fabricantes
        })
        res.json(listaDePordutos)
    },
    async cadastrarProduto(req, res){
        const {nome, preco, quantidade, fabricante_id, categoria_id} = req.body

        const novoProduto = await Produtos.create({
            nome,
            preco,
            quantidade,
            fabricante_id
        })

        const categoria = await Categorias.findByPk(categoria_id)

        await novoProduto.setCategoria(categoria)

        res.json(novoProduto)
    },
    async deletarProduto(req, res) {
        const { id } = req.params

        await Produtos.destroy({
            where: {
                id
            }
        })

        res.json("Produto Deletado")
    },
    async atualizarProduto(req, res) {
        const {id} = req.params
        const {nome, preco, quantidade} = req.body

        const produtoAtualizado = await Produtos.update(
            {
                nome, 
                preco,
                quantidade
            },
            {
                where:{
                    id
                }
            }
        )

        res.json("Produto Alterado")
    }
}

module.exports = produtoController
