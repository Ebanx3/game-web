import { useState, type ReactNode } from "react";
import { JugadorContext } from "./JugadorContext";
import { type Usuario } from "../types";

export const JugadorProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  return (
    <JugadorContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </JugadorContext.Provider>
  );
};

export { JugadorContext };
