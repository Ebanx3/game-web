import { Router, Request, Response } from "express";
import { registerUser, fetchUser } from "./model/user";
import { checkCharacterName } from "./model/character";

const router = Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    const { username, password, email } = req.body;
    if (
      !username ||
      !password ||
      !email ||
      username.length < 5 ||
      password.length < 5 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      res.status(400).json({
        success: false,
        error:
          "Error en body debe contener username y password con al menos 5 caracteres y un email valido",
      });
      return;
    }

    const user = await registerUser({ email, username, password });
    if (!user) {
      res
        .status(400)
        .json({ success: false, error: "Error al crear el usuario" });
      return;
    }

    res.status(201).json({ success: true });
  } catch (error: any) {
    res.status(500).json({ success: false, error });
  }
});

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json({
        success: false,
        error:
          "Error en body debe contener username y password con al menos 5 caracteres",
      });
      return;
    }

    const user = await fetchUser({ username, password });
    if (typeof user === "string") {
        res.status(200).json({ success: false, error: user });
        return;
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

router.get(
  "/checkCharacterName/:charName",
  async (req: Request, res: Response) => {
    try {
      const { charName } = req.params;
      if (!charName || charName.length < 5) {
        res.status(400).json({
          success: false,
          error: `${charName} no es un nombre de personaje valido`,
        });
        return;
      }

      const isCharNameUsed = await checkCharacterName(charName);

      res.status(200).json({ success: true, isCharNameUsed });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  }
);

export default router;
