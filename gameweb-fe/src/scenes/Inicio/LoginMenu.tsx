import { useState } from "react";
import { useEscena } from "../../hooks/useEscena";
import { Login } from "../../api/authentication";
import { useJugador } from "../../hooks/useJugador";

export const LoginMenu = ({
  changeToRegister,
  setIsLoading,
  setErrorAlert
}: {
  changeToRegister: VoidFunction;
  setIsLoading: (s: boolean) => void;
  setErrorAlert :(s:string)=>void
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { cambiarEscena } = useEscena();
  const { setUsuario } = useJugador();

  const LogIn = async () => {
    if (username.length < 5) {
      setErrorAlert("El nombre de usuario debe contener al menos 5 caracteres");
      return;
    }

    if (password.length < 5) {
      setErrorAlert("La contraseña debe contener al menos 5 caracteres");
      return;
    }

    setIsLoading(true);
    const response = await Login({ username, password });
    if (!response.success) {
      setErrorAlert(response.error);
      setIsLoading(false);
      return;
    }
    
    setUsuario(response.user);
    if(response.user.activeChar === null) cambiarEscena('elegirNombre');
    else cambiarEscena('mapa')
  };
  return (
    <>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className=" p-2 rounded bg-white/20 text-white focus:outline-none "
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" p-2 rounded bg-white/20 text-white focus:outline-none "
      />

      <button className="p-3 my-4 rounded bg-blue-600 hover:bg-blue-700 transition" onClick={LogIn}>
        Ingresar
      </button>
      <button
        className="text-sm opacity-80 hover:opacity-100"
        onClick={changeToRegister}
      >
        Crear cuenta
      </button>
    </>
  );
};
