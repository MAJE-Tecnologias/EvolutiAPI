import PontosDor from '../models/pontosDor.js';

export const criarPontosDor = async (req, res) => {
  const {cnpj, nome, email, profissoes, verificadorProf, nivel } = req.body;

  try {
    let pontosDor = await PontosDor.findOne({ email });
    if (!pontosDor) {
      pontosDor = new pontosDor({cnpj, nome, email, profissoes, verificadorProf, nivel });
    } else {
      pontosDor.cnpj = cnpj;
      pontosDor.nome = nome;
      pontosDor.profissoes = profissoes;
      pontosDor.verificadorProf = verificadorProf;
      pontosDor.nivel = nivel;
    }

    await pontosDor.save();
    res.status(200).json(pontosDor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const buscarPontosDor = async (req, res) => {
  try {
    const pontosDor = await PontosDor.find(); 
    res.status(200).json(pontosDor);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const excluirPontosDor = async (req, res) => {
  try {
    const pontosDor = await PontosDor.findByIdAndDelete(req.params.id); // Supondo que você passe o ID do usuário a ser excluído através dos parâmetros da requisição
    if (!pontosDor) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(202).json(pontosDor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarPontosDor = async (req, res) => {
  try {
    const pontosDor = await PontosDor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pontosDor) {
      return res.status(404).json({ message: "Clínica não encontrada" });
    }
    res.status(200).json(pontosDor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
