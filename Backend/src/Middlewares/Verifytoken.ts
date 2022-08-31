import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import { Data } from '../interface/Data';
dotenv.config()



interface Extended extends Request{

    info?:Data
}



export const VerifyToken =(req:Extended, res:Response, next:NextFunction)=>{

   try {
     const token = req.headers['token'] as string

     if(!token){
       return res.json({message:'You do not have token to access this route'});
        
     }

      jwt.verify(token, process.env.KEY as string,(error,data) => {


        if(data){

          res.status(200).json({data});
          next()
        }

        return res.json({message:'The token is incorrect'});



      })
       
   } catch (error) {

    return res.json({error})
    
   }

 
}