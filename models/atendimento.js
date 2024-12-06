import mongoose from 'mongoose';

const atendimentoSchema = new mongoose.Schema({
  titulo: String,
  tipo: String,
  diagnostico: String,
  corpo: String,
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' } 
});

const Atendimento = mongoose.models.Atendimento || mongoose.model('Atendimento', atendimentoSchema);

export default Atendimento;
