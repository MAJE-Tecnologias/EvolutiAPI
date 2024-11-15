import express from 'express';
import {criarPontosDor, editarPontosDor, excluirPontosDor, buscarPontosDor} from '../controllers/pontosDorController.js';

const router = express.Router();

router.post('/pontosDor', criarPontosDor);
router.get('/pontosDor/id=:id?', buscarPontosDor);
router.delete('/pontosDor/id=:id', excluirPontosDor);
router.put('/pontosDor/id=:id', editarPontosDor);

export default router;