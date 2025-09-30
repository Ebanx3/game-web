import mongoose from "mongoose";
import { env_variables } from "./environment_variables";


export const conectarDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env_variables.MONGO_URI!);
    console.log("✅ Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    process.exit(1);
  }
};
