import Usuario, { IUsuario } from "../schemas/user";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const registrarUsuario = async (data: {
  email: string;
  username: string;
  password: string;
}): Promise<IUsuario> => {
  const { email, username, password } = data;

  // Verificar si el usuario ya existe
  const existente = await Usuario.findOne({ $or: [{ email }, { username }] });
  if (existente) {
    throw new Error("Ya existe un usuario con ese email o nombre");
  }

  // Hashear la contraseña
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  // Crear y guardar el usuario
  const nuevoUsuario = new Usuario({
    email,
    username,
    password: hashedPassword,
  });

  await nuevoUsuario.save();
  return nuevoUsuario;
};

export const traerUsuario = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const user = await Usuario.findOne({username});
  if(!user){
    throw new Error("No hay usuario con el username: "+ username);
  }

  console.log(user)
};
