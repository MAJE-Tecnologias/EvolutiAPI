import express from 'express';
import { buscarAtendimento, criarAtendimento, excluirAtendimento, editarAtendimento} from '../controllers/atendimentoController.js';

const router = express.Router();

router.post('/atendimentos', criarAtendimento);
router.get('/atendimentos', buscarAtendimento);
router.delete('/atendimentos/id=:id', excluirAtendimento);
router.put('/atendimentos/id=:id', editarAtendimento);

export default router;
