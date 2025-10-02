import { motion } from "framer-motion";
import { useState } from "react";
import texturaFondo from "../../assets/fondo2.png";
import { AlertError } from "../Inicio/AlertError";
import { checkCharacterName } from "../../api/creatingCharacter";
import { useEscena } from "../../hooks/useEscena";

export const ElegirNombre = () => {
  const [charName, setCharName] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const { cambiarEscena } = useEscena();

  const confirmCharacterName = async () => {
    if (charName.length < 3 || charName.length > 20) {
      setErrorAlert(
        "El nombre de usuario debe contener entre 3 y 20 caracteres"
      );
      return;
    }

    const response = await checkCharacterName(charName);
    if (!response.success) {
      setErrorAlert(response.error)
      return;}

    if (response.isCharNameUsed) {
      setErrorAlert("El nombre de personaje ya está en uso");
      return;
    }

    cambiarEscena("elegirPersonaje");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen max-w-[600px] mx-auto bg-cover bg-center flex flex-col justify-center items-center px-4 text-white"
      style={{ backgroundImage: `url(${texturaFondo})` }}
    >
      <input
        type="text"
        placeholder="Nombre de personaje..."
        value={charName}
        onChange={(e) => setCharName(e.target.value)}
        className=" p-4 rounded bg-black/30 text-white focus:outline-none "
      />
      <button
        className="p-3 my-4 rounded bg-black/60 hover:bg-black/40 transition text-stone-300"
        onClick={confirmCharacterName}
      >
        Ingresar
      </button>
      {errorAlert != "" && (
        <AlertError message={errorAlert} setMessage={setErrorAlert} />
      )}
    </motion.div>
  );
};
