import { useState, type ReactNode } from 'react';
import type { Capa, Escena } from '../types';
import { EscenaContext } from './EscenaContext';

export const EscenaProvider = ({ children }: { children: ReactNode }) => {
  const [escenaActual, setEscena] = useState<Escena>('inicio');
  const [capas, setCapas] = useState<Capa[]>([]);

  const cambiarEscena = (nueva: Escena) => {
    setEscena(nueva);
  }

  const pushCapa = (capa:Capa) => {
    setCapas((prev) => [...prev, capa]);
  };

  const popCapa = () => {
     setCapas((prev) => prev.slice(0, -1));
  };


  return (
    <EscenaContext.Provider value={{ escenaActual, capas, cambiarEscena, popCapa, pushCapa }}>
      {children}
    </EscenaContext.Provider>
  );
}

