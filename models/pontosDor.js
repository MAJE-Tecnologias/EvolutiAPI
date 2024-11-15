import mongoose from 'mongoose';

const pontosDorSchema = mongoose.Schema({
  cord: [Number],
  descricao: String,
  cor: String
});

const PontosDor = mongoose.model('PontosDor', pontosDorSchema);

export default PontosDor;