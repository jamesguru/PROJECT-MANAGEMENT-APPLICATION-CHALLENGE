import express, { Request, Response,json} from 'express';
import dotenv from 'dotenv';
import  taskRoute from './Routes/task';
import cors from 'cors';
import developerRoute from './Routes/developer';
import authRoute from './Routes/auth'


dotenv.config()


const app = express();


app.use(cors());
app.use(json());

app.use('/api/tasks',taskRoute);
app.use('/api/developers',developerRoute);
app.use('/api/auth',authRoute);

app.use((err:Error,req:Request,res:Response)=> {


    if(err.message){

        res.status(500).json({message:err.message});
    }


})
app.listen(3000,() => {

    console.log("Server started on port 3000");
})


