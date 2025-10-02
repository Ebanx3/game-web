import { Router } from "express";
import {
  loginController,
  registerController,
} from "../controllers/authentication";
import { checkCharNameController } from "../controllers/user";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);

router.get("/checkCharacterName/:charName", checkCharNameController);

router.get("/", (_req, res) => res.send("Server active"));

export default router;
