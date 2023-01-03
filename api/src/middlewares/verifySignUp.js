const { ROLES } = require('../models/RolesModel');
const { UsersModel } = require('../models/UsersModel');

function checkRolesExisted(req, res, next) {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({ error: `The role ${req.body.roles[i]} does not exists` });
            }
        }
    }
    next();
}

async function checkDuplicated(req, res, next) {
    const username = await UsersModel.findOne({ username: req.body.username });
    console.log(username)
    if (username && username.length > 0) {
        return res.status(400).json({ error: `The username was already found in the database` });
    }
    const email = await UsersModel.findOne({ email: req.body.email });
    console.log(email)
    if (email && email.length > 0) {
        return res.status(400).json({ error: `The email was already found in the database` });
    }
    next();
}

module.exports = {
    checkRolesExisted,
    checkDuplicated
}