require('dotenv').config();
const { UsersModel, Roles } = require('../../models/ModelsDB.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const signUp = async (req, res) => {
    const { name, email, password, phone, address, city, image, roles } = req.body;
    const result = await UsersModel.findOne({email: email});
    if (result) {
        throw new Error(`The user was already found in the database`);
    }
    try {
        const user = new UsersModel({ 
            name, 
            email, 
            password: await UsersModel.encryptPassword(password),
            phone, 
            address, 
            city, 
            image });        
        if (roles) {
            const rolesFound = await Roles.find({name: {$in: roles}})
            user.roles = rolesFound.map(e => e._id);
        }
        else {
            const role = await Roles.findOne({name: 'user'});
            user.roles = [role._id];
        }
        await user.save()
        const token = jwt.sign({id: user._id}, SECRET, {
            expiresIn: 86400
        });        
        return res.status(201).json({token});
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }    
}

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({email: email}).populate('roles');
        if (!user) {
            return res.status(400).json({error: `The user was not found in the database`});
        }
        const matchedPassword = await UsersModel.comparePassword(password, user.password);
        if (!matchedPassword) {
            return res.status(401).json({token: null, message: `Invalid password`});
        }
        const token = jwt.sign({id: user._id}, SECRET, {
            expiresIn: 86400
        });
        return res.status(200).json({token: token});
    } catch (error) {
        next(error);
    }
}

module.exports = {
    signUp,
    signIn
}