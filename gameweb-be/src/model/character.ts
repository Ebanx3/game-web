import Character from "../schemas/character";

export const checkCharacterName = async (name:string) => {
  const char = await Character.findOne({ name });
  return char !=  null;
};