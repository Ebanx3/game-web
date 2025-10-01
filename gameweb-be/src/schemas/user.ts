import mongoose, { Schema, Document } from 'mongoose';

export interface IUsuario extends Document {
  email: string;
  username: string;
  password: string;
  personajeActivo?: mongoose.Types.ObjectId; // Referencia futura
}

const UsuarioSchema = new Schema<IUsuario>({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  personajeActivo: {
    type: Schema.Types.Mixed,
    default: null
  }
}, {
  timestamps: true
});

export default mongoose.model<IUsuario>('Usuario', UsuarioSchema);
