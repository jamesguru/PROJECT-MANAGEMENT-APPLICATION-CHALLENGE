import ejs from 'ejs';
import dotenv from 'dotenv'
import sendMail from '../Helpers/SendEmail';

dotenv.config()

const sendEmail = async (fullname:string,project:string,email:string)=> {


    


    ejs.renderFile('templates/assignproject.ejs',{name:fullname,task:project}, async(err,data) =>{


        let messageoption = {

            from:process.env.ADMIN_EMAIL,
            to:email,
            subject:'You have project to complete',
            html:data,
            attachments:[{

                filename:'assignment.txt',
                content:`You have been assign the project`
            }]
        }


        try {
            
            sendMail(messageoption);

           
        } catch (error) {

            console.log(err)
            
        }


    }) 

}


export default sendEmail;