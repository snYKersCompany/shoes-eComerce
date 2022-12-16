require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;
const { UsersModel, Roles } = require('../models/ModelsDB');

async function verifyToken (req, res, next) {
    try {
        const token = req.headers['x-access-token'];    
        if (!token) {
            return res.status(403).json({error: `No token provided`});
        }
        const decoded = jwt.verify(token, SECRET);
        req.userId = decoded.id;
        const user = await UsersModel.findById(req.userId, {password: 0});
        if (!user) {
            return res.status(404).json({error: `User was not found in the database`});
        }        
        next();
    } catch (error) {
        return res.status(400).json({error: `The token was invalid or unauthorized`});
    }
}

async function isAdmin (req, res, next) {
    const user = await UsersModel.findById(req.userId);
    const roles = await Roles.find({ _id: {$in: user.roles} });    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === 'admin') {
            next();
            return;
        }
    }
    return res.status(401).json({ error: `The user does not have the required permissions` });
}

module.exports = {
    verifyToken,
    isAdmin
}