import { Request, RequestHandler } from 'express';


export interface ExtendendedTask extends Request{

    

    body:{

        id:number,
        title:string,
        description:string,
        date:string,

        completed:string,

        assigned:string,

        developer_id:string,

        
    }



}