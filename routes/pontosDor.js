import express from 'express';
import {criarPontosDor, editarPontosDor, excluirPontosDor, buscarPontosDor} from '../controllers/pontosDorController.js';

const router = express.Router();

router.post('/enderecos', criarPontosDor);
router.get('/enderecos/id=:id?', buscarPontosDor);
router.delete('/enderecos/id=:id', excluirPontosDor);
router.put('/enderecos/id=:id', editarPontosDor);

export default router;