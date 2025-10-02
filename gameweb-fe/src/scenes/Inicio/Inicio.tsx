import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NightImg from "../../assets/night.png";
import { SpinnerSVG } from "../../assets/SpinnerSVG";
import { LoginMenu } from "./LoginMenu";
import { RegisterMenu } from "./RegisterMenu";
import { AlertError } from "./AlertError";

export const Inicio = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorAlert, setErrorAlert] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="h-screen max-w-[600px] mx-auto bg-cover bg-center flex flex-col justify-center px-4 text-white"
      style={{ backgroundImage: `url(${NightImg})` }}
    >
      <div className="flex flex-col justify-between h-full py-16">
        <h2 className="text-center text-6xl font-bold mb-6 text-amber-100/40 leading-16">
          Bruma
        </h2>
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              className="flex flex-col items-center gap-4"
              key="login"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {isLoading ? (
                <SpinnerSVG />
              ) : (
                <LoginMenu
                  changeToRegister={() => setIsLogin(false)}
                  setIsLoading={setIsLoading}
                  setErrorAlert={setErrorAlert}
                />
              )}
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col items-center gap-4"
              key="registro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {isLoading ? (
                <SpinnerSVG />
              ) : (
                <RegisterMenu
                  changeToLogin={() => setIsLogin(true)}
                  setIsLoading={setIsLoading}
                  setErrorAlert={setErrorAlert}
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {errorAlert != "" && (
        <AlertError message={errorAlert} setMessage={setErrorAlert} />
      )}
    </motion.div>
  );
};
