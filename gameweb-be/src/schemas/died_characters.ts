import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IDeadCharacter extends Document {
  name: string;
  user: Types.ObjectId; // Reference to the original user
  creationDate: Date;
  deathDate: Date;
  enemy: string;
  level: number;
}

const DeadCharacterSchema = new Schema<IDeadCharacter>({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  creationDate: { type: Date, required: true },
  deathDate: { type: Date, required: true },
  enemy: { type: String, required: true },
  level: { type: Number, required: true }
}, {
  timestamps: true
});

export default mongoose.model<IDeadCharacter>('DeadCharacter', DeadCharacterSchema);
