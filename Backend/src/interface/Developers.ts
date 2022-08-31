import { Request } from "express";

export interface Developer extends Request{




    body:{


        developer_id:number,

        fullname:string,

        email:string,

        assigned:string,

        role:string,

        password:string
    }
}