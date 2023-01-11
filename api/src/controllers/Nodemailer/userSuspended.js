const { transporter } = require("../../config/nodemailer")

const userSuspended = async (req, res) => {
    const { email } = req.body;
    try {
        const info = await transporter.sendMail({
            from: 'Snyckers henrypg.n2@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Account disabled", // Subject line
            html: "Your account has been temporarily deactivated, if we made a mistake please reply to this message requesting the activation of your account. Thank you!"
        });
      res.status(200).send(info)
    } catch (error) {
        res.status(400).send(error);
        return ({
            msg: "Error mails"
        });
    };
};

module.exports = {
   userSuspended
};