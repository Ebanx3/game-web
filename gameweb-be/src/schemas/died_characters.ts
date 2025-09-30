import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IPersonajeMuerto extends Document {
  nombre: string;
  usuario: string; // Referencia al usuario original
  fechaCreacion: Date;
  fechaMuerte: Date;
  enemigo: string;
  nivel: number;
}

const PersonajeMuertoSchema = new Schema<IPersonajeMuerto>({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true },
  fechaCreacion: { type: Date, required: true },
  fechaMuerte: { type: Date, required: true },
  enemigo: { type: String, required: true },
  nivel: { type: Number, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IPersonajeMuerto>('PersonajeMuerto', PersonajeMuertoSchema);
