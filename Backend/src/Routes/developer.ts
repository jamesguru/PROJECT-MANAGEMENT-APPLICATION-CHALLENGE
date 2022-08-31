import {Router} from 'express'
import { assignTaskToDeveloper, getAllDevelopers } from '../Controllers/Developer';
import { VerifyToken } from '../Middlewares/Verifytoken';


const router = Router();


router.get("/",VerifyToken,getAllDevelopers);
router.put("/:id",VerifyToken, assignTaskToDeveloper)





export default router;