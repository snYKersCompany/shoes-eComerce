const { UsersModel } = require('../../models/ModelsDB.js');

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

const addUser = async (name, email, password, phone, address, city, image, admin) => {
    if (!name && !email && !password && !phone && !address && !image & !admin) {
        throw new Error(`It must set all values`);
    }
    const result = await UsersModel.findOne({email: email});
    if (result) {
        throw new Error(`The email was already found in the database`);
    }
    const user = await UsersModel.create({name, email, password, phone, address, city, image, admin});
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
            email: e.email, 
            password: e.password, 
            phone: e.phone, 
            address: e.address, 
            city: e.city, 
            image: e.image, 
            admin: e.admin
        })
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