import { Router } from 'express';
import { register,login, checkuser } from '../Controllers/Auth';
import { VerifyToken } from '../Middlewares/Verifytoken';


const router = Router();


router.post('/register',register)
router.post('/login',login)
router.get('/check',VerifyToken,checkuser)




export default router;