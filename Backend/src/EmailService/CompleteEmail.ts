import ejs from 'ejs';
import dotenv from 'dotenv'
import sendMail from '../Helpers/SendEmail';

dotenv.config()

const sendCompleteEmail = async (name:string)=> {


    ejs.renderFile('templates/completeproject.ejs',{name}, async (err,data) =>{


        let messageoption = {

            from:process.env.EMAIL,
            to:process.env.ADMIN_EMAIL,
            subject:`${name} have completed project`,
            html:data,
            attachments:[{

                filename:'project.txt',
                content:'I have completed project successfully'
            }]
        }


        try {
            
            sendMail(messageoption);

        } catch (error) {

            console.log(err)
            
        }


    }) 

}


export default sendCompleteEmail;