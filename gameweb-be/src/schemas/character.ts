import mongoose, { Schema, Document, Types } from "mongoose";

export interface ICharacter extends Document {
  name: string;
  user: Types.ObjectId; // Reference to the original user
  creationDate: Date;
  level: number;
}

const CharacterSchema = new Schema<ICharacter>(
  {
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    creationDate: { type: Date, required: true },
    level: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ICharacter>("Character", CharacterSchema);
