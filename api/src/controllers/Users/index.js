const { UsersModel } = require('../../models/ModelsDB.js');

const listUsers = async () => {
    const users = await UsersModel.find();
    return users;
}

const addUser = async (name, email, password, phone, address, image, admin) => {
    if (!name && !email && !password && !phone && !address && !image & !admin) {
        throw new Error(`It must set all values`);
    }
    const user = await UsersModel.create({name, email, password, phone, address, image, admin});
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

module.exports = {
    listUsers,
    addUser,
    findUser
}