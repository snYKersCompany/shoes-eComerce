const { transporter } = require("../../config/nodemailer")

const userSuspended = async (req, res) => {
    const { email } = req.body;
    try {
        const info = await transporter.sendMail({
            from: 'Snykers henrypg.n2@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Account disabled", // Subject line
            html: "CUENTA DE USUARIO SUSPENDIDA"
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