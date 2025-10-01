import { useState } from "react";
import { useEscena } from "../../hooks/useEscena";
import { Login } from "../../api/authentication";
import { AlertError } from "./AlertError";
import { useJugador } from "../../hooks/useJugador";

export const LoginMenu = ({
  changeToRegister,
  setIsLoading,
}: {
  changeToRegister: VoidFunction;
  setIsLoading: (s: boolean) => void;
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

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
    setIsLoading(false);
    if (!response.success) {
      setErrorAlert(response.error);
      return;
    }
    setUsuario(response.usuario);
    if(response.usuario.activeChar === null) cambiarEscena('elegirNombre');
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
      {errorAlert != "" && <AlertError message={errorAlert} setMessage={setErrorAlert}/>}
    </>
  );
};
