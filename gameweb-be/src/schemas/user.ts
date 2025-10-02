import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  username: string;
  password: string;
  activeCharacter?: mongoose.Types.ObjectId; // Future reference
}

const UserSchema = new Schema<IUser>({
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
  activeCharacter: {
    type: Schema.Types.Mixed,
    default: null
  }
}, {
  timestamps: true
});

export default mongoose.model<IUser>('User', UserSchema);
