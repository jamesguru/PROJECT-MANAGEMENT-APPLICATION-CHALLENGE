import {Request,RequestHandler,Response} from 'express';
import {connectDB} from '../Helpers/connect_db'
import { Developer } from '../interface/Developers';
import mssql from 'mssql';


export const getAllDevelopers = async(req:Request,res:Response) =>{

try {

    const pool = await connectDB();

    const developers = await pool?.request().execute('getAllDevelopers');

    res.status(200).json(developers?.recordset)
    
} catch (error) {

    res.status(500).json('something went wrong');
    
}



}




export const assignTaskToDeveloper:RequestHandler<{id:string}> = async (req:Developer,res:Response) =>{


    const dev_id = req.params.id;

    const {assigned} = req.body;

    try {

        const pool = await connectDB();

        const developer = await pool?.request().input('id',mssql.Int,dev_id).input('assigned',mssql.NVarChar,assigned).execute('updateDeveloper');


        res.status(201).json(developer)

        
    } catch (error) {

        res.status(500).json({error})
        
    }


}


