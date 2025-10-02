const SERVER_URL = import.meta.env.VITE_SERVER_URL + "/api";

export const checkCharacterName = async (charNAme:string) => {
  try {
    const data = await fetch(`${SERVER_URL}/checkCharacterName/${charNAme}`);
    const json = await data.json();
    return json;
  } catch (error) {
    console.log(error);
    return null;
  }
};