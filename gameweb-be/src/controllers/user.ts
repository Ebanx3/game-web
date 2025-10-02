import { Request, Response } from "express";
import { checkCharacterName } from "../model/character";

export const checkCharNameController = async (req: Request, res: Response) => {
  try {
    const { charName } = req.params;
    if (!charName || charName.length < 3 || charName.length > 20) {
      res.status(400).json({
        success: false,
        error: 'El nombre de personaje debe contener entre 3 y 20 caracteres',
      });
      return;
    }

    const isCharNameUsed = await checkCharacterName(charName);

    res.status(200).json({ success: true, isCharNameUsed });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};
