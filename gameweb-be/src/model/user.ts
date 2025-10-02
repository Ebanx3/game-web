import User, { IUser } from "../schemas/user";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const registerUser = async (data: {
  email: string;
  username: string;
  password: string;
}): Promise<IUser | string> => {
  const { email, username, password } = data;

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return "Ya existe un usuario con ese nombre";
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = new User({
    email,
    username,
    password: hashedPassword,
  });

  await newUser.save();
  return newUser;
};

export const fetchUser = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const user = await User.findOne({ username });
  if (!user) {
    return"No se encontró un usuario con el nombre: " + username;
  }

  const verifyPass = await bcrypt.compare(password, user.password);
  if (!verifyPass) {
    return"La constraseña no coincide";
  }

  return {
    email: user.email,
    username: user.username,
    activeChar: user.activeCharacter || null,
  };
};


