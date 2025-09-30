import { useContext } from "react";
import { EscenaContext } from "../context/EscenaContext";

export const useEscena =() => {
  const context = useContext(EscenaContext);
  if (!context) throw new Error('useEscena debe usarse dentro de EscenaProvider');
  return context;
}
