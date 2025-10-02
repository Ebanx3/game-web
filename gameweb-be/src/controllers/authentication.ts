import {  Request, Response } from "express";
import { registerUser, fetchUser } from "../model/user";

export const registerController = async (req: Request, res: Response) => {
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
}

export const loginController = async (req: Request, res: Response) => {
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
}