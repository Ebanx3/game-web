const SERVER_URL = import.meta.env.VITE_SERVER_URL + "/api";

export const checkCharacterName = async (charName:string) => {
  try {
    const data = await fetch(`${SERVER_URL}/checkCharacterName/${charName}`);
    const json = await data.json();
    console.log(json)
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};