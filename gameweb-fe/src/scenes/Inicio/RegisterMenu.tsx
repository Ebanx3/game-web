import { useState } from "react";
import { Register } from "../../api/authentication";

export const RegisterMenu = ({
  changeToLogin,
  setIsLoading,
  setErrorAlert
}: {
  changeToLogin: VoidFunction;
  setIsLoading: (s: boolean) => void;
  setErrorAlert :(s:string)=>void
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const RegisterAccount = async () => {
    if (username.length < 5) {
      setErrorAlert("El nombre de usuario debe contener al menos 5 caracteres");
      return;
    }

    if (password.length < 5) {
      setErrorAlert("La contraseña debe contener al menos 5 caracteres");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorAlert("Email no valido");
      return;
    }

    setIsLoading(true);
    const response = await Register({ username, email, password });
    if (!response.success) {
      setErrorAlert(response.error);
      return;
    }
    setIsLoading(false);
    changeToLogin();
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
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className=" p-2 rounded bg-white/20 text-white focus:outline-none "
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className=" p-2 rounded bg-white/20 text-white focus:outline-none "
      />

      <button
        className="p-3 my-4 rounded bg-blue-600 hover:bg-blue-700 transition"
        onClick={RegisterAccount}
      >
        Resgitrar
      </button>
      <button
        className="text-sm opacity-80 hover:opacity-100"
        onClick={changeToLogin}
      >
        Ingresar
      </button>
    </>
  );
};
