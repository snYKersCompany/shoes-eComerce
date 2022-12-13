const { UsersModel, Roles } = require('../../models/ModelsDB.js');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET;

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

const addUser = async (name, username, email, password, phone, address, city, image, admin, roles) => {
    if (!name && !username && !email && !password && !phone && !address && !image & !admin) {
        throw new Error(`It must set all values`);
    }
    const user = new UsersModel({ 
        name,
        username,
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
    await user.save();
    jwt.sign({id: user._id}, SECRET, {
        expiresIn: 86400
    });
    return `${user.name} was successfully created`;
}

const findUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);    
    if (!user) {
        return `The user with an id ${id} was not found in the database`
    }
    return user;
}

const deleteUser = async (id) => {
    if (!id) {
        throw new Error(`It needs an id property`);
    }
    const user = await UsersModel.findById(id);    
    if (!user) {
        return `The user with an id ${id} was not found in the database`;
    }
    await UsersModel.deleteOne({_id: id});
    return `The user with an id ${id} was successfully deleted`;
}

const modifyUser = async (id, name, email, password, phone, address, city, image, admin) => {
    let user = await UsersModel.findById(id);
    if (!user) {
        throw new Error(`The user with an id ${id} was not found in the database`);
    }
    await UsersModel.updateOne({_id: id}, {$set: {name, email, password, phone, address, city, image, admin}});
    return `The user with an id ${id} was successfully modified`;
}

const postUsers = async (array) => {    
    array.map((e) => {
        UsersModel.create({
            name: e.name,
            username: e.username, 
            email: e.email, 
            password: e.password, 
            phone: e.phone, 
            address: e.address, 
            city: e.city, 
            image: e.image, 
            admin: e.admin
        });
        jwt.sign({id: e._id}, SECRET, {
            expiresIn: 86400
        });
    });
    Promise.all(array);    
    return `Users added successfully`;
}

module.exports = {
    listUsers,
    addUser,
    findUser,
    deleteUser,
    modifyUser,
    postUsers
}