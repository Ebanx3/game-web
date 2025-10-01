import { motion } from "framer-motion";
import { useState } from "react";
import texturaFondo from "../../assets/texturafondo.png"

export const ElegirNombre = () => {
  const [charName, setCharName] = useState("");

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
      <button className="p-3 my-4 rounded bg-black/60 hover:bg-black/40 transition text-stone-300" onClick={()=>{}}>
        Ingresar
      </button>
    </motion.div>
  );
};
