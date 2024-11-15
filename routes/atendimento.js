import express from 'express';
import { buscarAtendimento, criarAtendimento, excluirAtendimento, editarAtendimento} from '../controllers/atendimentoController.js';

const router = express.Router();

router.post('/clinicas', criarAtendimento);
router.get('/clinicas', buscarAtendimento);
router.delete('/clinicas/id=:id', excluirAtendimento);
router.put('/clinicas/id=:id', editarAtendimento);

export default router;
