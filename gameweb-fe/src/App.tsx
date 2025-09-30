import { useEscena } from "./hooks/useEscena";
import { Inicio } from "./scenes/Inicio/Inicio";
import { AnimatePresence } from "framer-motion";

function App() {
  const { escenaActual} = useEscena();

  return (
    <AnimatePresence>
      {escenaActual === "inicio" && <Inicio />}
      {/* {escenaActual === "mapa" && <Mapa />}
      {escenaActual === "combate" && <Combate />} */}
    </AnimatePresence>
  );
}

export default App;
