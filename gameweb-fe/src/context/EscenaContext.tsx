import { createContext } from 'react';
import type { Capa, Escena } from '../types';

interface EscenaContextType {
  escenaActual: Escena;
  capas: Capa[];
  cambiarEscena: (nueva: Escena) => void;
  pushCapa: (capa: Capa) => void;
  popCapa: () => void;
}
export const EscenaContext = createContext<EscenaContextType | undefined>(undefined);
