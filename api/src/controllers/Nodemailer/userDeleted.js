const { transporter } = require("../../config/nodemailer")

const userDeleted = async (req, res) => {
    const { email } = req.body
    try {
        const info = await transporter.sendMail({
            from: 'Snyckers henrypg.n2@gmail.com', // sender address
            to: email, // list of receivers
            subject: "User banned permanently", // Subject line
            html: `Your user with email ${email} has been baned from snYKers`,
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
    userDeleted,

}
