import {Response,Request} from 'express';
import {connectDB} from '../Helpers/connect_db'
import { Developer } from '../interface/Developers';
import mssql, { RequestError } from 'mssql';
import bcrypt from 'bcrypt'
import { loginSchema, registerSchema } from '../Helpers/userValidators';
import jwt from 'jsonwebtoken'
import { json } from 'stream/consumers';
import { Data } from '../interface/Data';





export const register = async (req:Developer,res:Response) =>{



    const {fullname,email,password} =req.body;


try{

    const {error,value} =registerSchema.validate(req.body)


    const pool = await connectDB();


    if(error){

        res.status(500).json(error.details[0].message);
    }


    const hashedPassword = await bcrypt.hash(password,10);

    const developer = await pool?.request().input('fullname',mssql.NVarChar,fullname).input('email',mssql.NVarChar,email).input('password',mssql.NVarChar,hashedPassword).execute('addDevelopers');

    res.status(201).json({developer});


}catch(error){


    res.status(500).json('something went wrong');


}



}


export const login = async(req:Developer,res:Response) => {


    const {email,password} =req.body;

    console.log('trying to login')
    

    try {


        const {error,value} = loginSchema.validate(req.body)


        const pool = await connectDB();

        const user = await pool?.request().input('email',mssql.NVarChar,email).execute('getDeveloper');


        if(!user?.recordset[0]){

            return res.status(400).json({message:'user is not defined'})

        }

        const userData = user?.recordset[0] as {developer_id:string,fullname:string,email:string,password:string,assigned:string,role:string};


        const validPassword = bcrypt.compare(password,userData.password,(err,data) =>{

                if(data){



                const {role,fullname,developer_id, ...others} = userData;

                const data={ role,fullname,developer_id};

                const token = jwt.sign(data,process.env.KEY as string,{expiresIn:'3000000000000000000000s'});

                res.json({

                    message:'Logged in',

                    data,

                    token
                })



                }else{


                    res.json({wrongPassword:"You entered wrong password"})
                }
            
        });

        

    if(error){

        res.status(500).json(error.details[0].message);
    }

        
    } catch (error) {
        
    }


}


export const checkuser = async(req:Request,res:Response) => {

    


}

