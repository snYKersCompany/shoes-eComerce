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

module.exports = {
    listUsers,
    addUser
}