import { useContext } from "react";
import { JugadorContext } from "../context/JugadorProvider";

export const useJugador = () => {
  const context = useContext(JugadorContext);
  if (!context) throw new Error('useJugador debe usarse dentro de JugadorProvider');
  return context;
}