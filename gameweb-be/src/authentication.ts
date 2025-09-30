import { Router, Request, Response} from "express";
import { registrarUsuario, traerUsuario } from "./model/user";

const router = Router();

router.post("/register", async (req:Request, res:Response)=>{
    try{
        const {username, password, email} = req.body;
        if(!username || !password || !email || username.length < 5 || password.length < 5 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            res.status(400).json({success:false, error: 'Error en body debe contener username y password con al menos 5 caracteres y un email valido'});
            return;
        }

        const usuario = await registrarUsuario({email, username, password});
        if(!usuario) {
            res.status(400).json({success:false, error: 'Error al crear el usuario'});
            return;
        }

        res.status(201).json({success:true})
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false, error: "Server Error"})
    }
})
router.post("/login", async (req:Request, res:Response)=>{
    try{
        const {username, password} = req.body;
        if(!username || !password){
            res.status(400).json({success:false, error: 'Error en body debe contener username y password con al menos 5 caracteres'});
            return;
        }

        const usuario = await traerUsuario({username, password});

        res.status(200).json({success:true, usuario})
    }
    catch(error){
        console.log(error);
        res.status(500).json({success:false, error: "Server Error"})
    }
})

export default router;