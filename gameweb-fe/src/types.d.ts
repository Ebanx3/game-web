type Escena =
  | "inicio"
  | "elegirNombre"
  | "elegirPersonaje"
  | "intro"
  | "mapa"
  | "combate"
  | "gremio"
  | "cementerio";

interface Personaje {
  nombre: string;
  clase: string;
  ubicacion: string;
  estado: "vivo" | "muerto";
  // podés agregar más campos según tu modelo
}

export interface Usuario {
  _id: string;
  username: string;
  email: string;
  personajeActivo?: Personaje | null;
}

interface JugadorContextType {
  usuario: Usuario | null;
  setUsuario: (u: Usuario | null) => void;
}

type Capa = 'menu' | 'dialogo' | 'inventario';