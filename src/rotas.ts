import usuarioController from  "./usuarios/usuario.controller.js";
import produtoController from "./produtos/produto.controller.js";
import carrinhoController from "./carrinho/carrinho.controller.js";

import { Router } from "express";
const  rotas = Router();
 
//criando rotas de usuarios
rotas.post('/usuarios', usuarioController.adicionar);
rotas.get('/usuarios', usuarioController.listar);

rotas.post('/produtos', produtoController.adicionar);
rotas.get('/produtos', produtoController.listar);

rotas.post('/carrinhos', carrinhoController.adicionar);
rotas.get('/carrinhos', carrinhoController.listar);

export default rotas;