import Atendimento from '../models/atendimento.js';

export const criarAtendimento = async (req, res) => {
  const {cnpj, nome, email, profissoes, verificadorProf, nivel } = req.body;

  try {
    let atendimento = await Atendimento.findOne({ email });
    if (!atendimento) {
      atendimento = new atendimento({cnpj, nome, email, profissoes, verificadorProf, nivel });
    } else {
      atendimento.cnpj = cnpj;
      atendimento.nome = nome;
      atendimento.profissoes = profissoes;
      atendimento.verificadorProf = verificadorProf;
      atendimento.nivel = nivel;
    }

    await atendimento.save();
    res.status(200).json(atendimento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const buscarAtendimento = async (req, res) => {
  try {
    const atendimento = await Atendimento.find(); 
    res.status(200).json(atendimento);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const excluirAtendimento = async (req, res) => {
  try {
    const atendimento = await Atendimento.findByIdAndDelete(req.params.id); // Supondo que você passe o ID do usuário a ser excluído através dos parâmetros da requisição
    if (!atendimento) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(202).json(atendimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarAtendimento = async (req, res) => {
  try {
    const atendimento = await Atendimento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atendimento) {
      return res.status(404).json({ message: "Clínica não encontrada" });
    }
    res.status(200).json(atendimento);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
