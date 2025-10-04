import { useEscena } from "./hooks/useEscena";
import { Inicio } from "./scenes/Inicio/Inicio";
import { AnimatePresence } from "framer-motion";
import { ElegirNombre } from "./scenes/ElegirNombre/ElegirNombre";
import { Mapa } from "./scenes/Mapa/Mapa";
import { ElegirPersonaje } from "./scenes/ElegirPersonaje/ElegirPersonaje";
import {Intro} from "./scenes/Intro/Intro"

function App() {
  const { escenaActual} = useEscena();

  return (
    <AnimatePresence>
      {escenaActual === "inicio" && <Inicio />}

      {/* Si no hay personaje activo, de haberlo salta directo al mapa*/}
      {escenaActual === "elegirNombre" && <ElegirNombre/>}
      {escenaActual === "elegirPersonaje" && <ElegirPersonaje />}
      {escenaActual === "intro" && <Intro />}

      {escenaActual === "mapa" && <Mapa />}
     
    </AnimatePresence>
  );
}

export default App;
