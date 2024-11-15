import mongoose from 'mongoose';

const atendimentoSchema = new mongoose.Schema({
  titulo: String,
  tipo: String,
  diagnostico, String,
  corpo: String,
  pacienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente' } 
});

const Paciente = mongoose.model('Paciente', atendimentoSchema);

export default Paciente;
