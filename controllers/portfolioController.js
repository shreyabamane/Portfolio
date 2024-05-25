const sendEmailController = (req,res) => {
    try {
        //status code 200 means ok request
        return res.status(200).send({
            success:true,
            message:'Your Message Send Successfully'
        })
    } catch (error) {
        console.log(error)
        //status code 500 means internal server error
        return res.status(500).send({
            success:false,
            message:'Send Email API Error',
            error
        })
    }
}

module.exports = { sendEmailController };