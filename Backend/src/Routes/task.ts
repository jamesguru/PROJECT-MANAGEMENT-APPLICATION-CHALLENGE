import {Router} from 'express';

import {getAllTasks,getTasksForDeveloper,updateTask,deleteTask,addTask,assignTask, unassignTask} from '../Controllers/Task';
import { VerifyToken } from '../Middlewares/Verifytoken';


const router = Router();

router.get("/",getAllTasks)

router.get("/assigned/:id",getTasksForDeveloper)

router.put("/assign/:id",assignTask)

router.put("/unassign/:id",unassignTask)

router.put("/:id", updateTask)

router.delete("/:id", deleteTask)

router.post("/", addTask);



export default router;