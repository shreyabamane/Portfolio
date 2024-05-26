const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');


//transport
const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID
        }
    })
)


const sendEmailController = (req, res) => {
    try {
        const { name, email, msg } = req.body

        //validation  
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: 'Please Provide All Fields'
            });
        }

        //email format
        transporter.sendMail({
            to: 'shreyabamane123@gmail.com',
            from: 'shreyabamane123@gmail.com',
            subject: 'Regarding Portfolio App',
            html: `
            <h5>Detail Information</h5>
            <ul>
               <li><p>Name : ${name}</P></li>
               <li><p>Email : ${email}</P></li>
               <li><p>Message : ${msg}</P></li>
            </ul>
            `
        })


        //status code 200 means ok request
        return res.status(200).send({
            success: true,
            message: 'Your Message Send Successfully'
        })
    } catch (error) {
        console.log(error)
        //status code 500 means internal server error
        return res.status(500).send({
            success: false,
            message: 'Send Email API Error',
            error
        })
    }
}

module.exports = { sendEmailController };