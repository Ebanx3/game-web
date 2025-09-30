import { createContext } from "react";
import type { JugadorContextType } from "../types";

export const JugadorContext = createContext<JugadorContextType | undefined>(undefined);